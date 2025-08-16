exports.handler = async (event, context, callback) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  const Midtrans = require('midtrans-client');

  const snap = new Midtrans.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY,
    clientKey: process.env.MIDTRANS_CLIENT_KEY
  });

  const { id, name, email, amount } = JSON.parse(event.body);

  if (!id || !name || !email || !amount) {
    return callback(null, {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: 'Missing required fields' })
    });
  }

  const names = name.split(" ");
  let firstName, lastName;
  if (names.length > 1) {
    firstName = names[0];
    lastName = names[names.length - 1];
  } else {
    firstName = names[0];
    lastName = "";
  }

  const orderId = `BWA-CHARITY-${id}-${Date.now()}`;

  const parametersTransaction = {
    transaction_details: {
      order_id: orderId,
      gross_amount: parseInt(amount)
    },
    customer_details: {
      first_name: firstName,
      last_name: lastName,
      email: email
    },
    credit_card: {
      secure: true
    }
  };

  await snap.createTransaction(parametersTransaction).then((transaction) => {
    const { token, redirect_url } = transaction;
    console.log("Token: ", token);
    console.log("Redirect URL: ", redirect_url);

    callback(null, {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        url: redirect_url, 
        params: transaction
      })
    });
  }).catch((error) => {
    console.log("Error: ", error);
    callback(null, {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: error.message })
    });
  });
};