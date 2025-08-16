const Midtrans = require('midtrans-client');

exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    // Initialize Midtrans Snap
    const snap = new Midtrans.Snap({
      isProduction: false,
      serverKey: process.env.MIDTRANS_SERVER_KEY,
      clientKey: process.env.MIDTRANS_CLIENT_KEY
    });

    // Parse request body
    const { id, name, email, amount } = JSON.parse(event.body);

    // Validate required fields
    if (!id || !name || !email || !amount) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          error: 'Missing required fields',
          required: ['id', 'name', 'email', 'amount'],
          received: { id, name, email, amount }
        })
      };
    }

    // Parse name into first and last name
    const names = name.split(" ");
    let firstName, lastName;
    if (names.length > 1) {
      firstName = names[0];
      lastName = names[names.length - 1];
    } else {
      firstName = names[0];
      lastName = "";
    }

    // Generate unique order ID
    const orderId = `BWA-CHARITY-${id}-${Date.now()}`;

    // Prepare transaction parameters
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

    // Create transaction
    const transaction = await snap.createTransaction(parametersTransaction);
    const { token, redirect_url } = transaction;
    
    console.log("Token: ", token);
    console.log("Redirect URL: ", redirect_url);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        url: redirect_url, 
        params: transaction,
        orderId: orderId
      })
    };

  } catch (error) {
    console.error("Payment Error: ", error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Payment processing failed',
        message: error.message,
        timestamp: new Date().toISOString()
      })
    };
  }
};