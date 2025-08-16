import { Snap } from 'midtrans-client';

export const handler = async (event: any) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  try {
    const snap = new Snap({
      isProduction: false,
      serverKey: process.env.MIDTRANS_SERVER_KEY!,
      clientKey: process.env.MIDTRANS_CLIENT_KEY!
    });

    const { id, name, email, amount } = JSON.parse(event.body);

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

    const transaction = await snap.createTransaction(parametersTransaction);
    const { redirect_url } = transaction;
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        url: redirect_url,
        params: parametersTransaction
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
