<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let formData = {
    id: '',
    name: '',
    email: '',
    amount: ''
  };

  let loading = false;
  let response: any = null;
  let error = '';

  async function handlePayment() {
    loading = true;
    error = '';
    response = null;

    try {
      const res = await fetch('/.netlify/functions/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Payment failed');
      }

      response = data;
      
      // Emit success event
      dispatch('paymentSuccess', { data, formData });
      
    } catch (err) {
      error = err instanceof Error ? err.message : 'An error occurred';
      dispatch('paymentError', { error, formData });
    } finally {
      loading = false;
    }
  }

  function resetForm() {
    formData = {
      id: '',
      name: '',
      email: '',
      amount: ''
    };
    response = null;
    error = '';
  }
</script>

<div class="payment-test">
  <h3>Payment Function Test</h3>
  
  <form on:submit|preventDefault={handlePayment} class="payment-form">
    <div class="form-group">
      <label for="id">Charity ID:</label>
      <input 
        id="id"
        type="text" 
        bind:value={formData.id}
        placeholder="Enter charity ID"
        required
      />
    </div>

    <div class="form-group">
      <label for="name">Full Name:</label>
      <input 
        id="name"
        type="text" 
        bind:value={formData.name}
        placeholder="Enter your full name"
        required
      />
    </div>

    <div class="form-group">
      <label for="email">Email:</label>
      <input 
        id="email"
        type="email" 
        bind:value={formData.email}
        placeholder="Enter your email"
        required
      />
    </div>

    <div class="form-group">
      <label for="amount">Amount (IDR):</label>
      <input 
        id="amount"
        type="number" 
        bind:value={formData.amount}
        placeholder="Enter amount"
        min="1000"
        required
      />
    </div>

    <div class="form-actions">
      <button 
        type="submit" 
        disabled={loading}
        class="btn btn-primary"
      >
        {loading ? 'Processing...' : 'Process Payment'}
      </button>
      
      <button 
        type="button" 
        on:click={resetForm}
        class="btn btn-secondary"
      >
        Reset
      </button>
    </div>
  </form>

  {#if response}
    <div class="success-message">
      <h4>Payment Success!</h4>
      <p><strong>Order ID:</strong> {response.orderId}</p>
      <p><strong>Redirect URL:</strong> <a href={response.url} target="_blank" rel="noopener">Click here to complete payment</a></p>
      <details>
        <summary>View Full Response</summary>
        <pre>{JSON.stringify(response, null, 2)}</pre>
      </details>
    </div>
  {/if}

  {#if error}
    <div class="error-message">
      <h4>Payment Error</h4>
      <p>{error}</p>
    </div>
  {/if}

  <div class="info">
    <p>This component tests the <code>payment.js</code> Netlify function.</p>
    <p>Make sure you have set the environment variables:</p>
    <ul>
      <li><code>MIDTRANS_CLIENT_KEY</code></li>
      <li><code>MIDTRANS_SERVER_KEY</code></li>
    </ul>
  </div>
</div>

<style>
  .payment-test {
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin: 20px 0;
    background: #f9f9f9;
  }

  .payment-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 20px 0;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .form-group label {
    font-weight: bold;
    color: #333;
  }

  .form-group input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }

  .form-group input:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }

  .form-actions {
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }

  .btn {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.2s;
  }

  .btn-primary {
    background: #007bff;
    color: white;
  }

  .btn-primary:hover:not(:disabled) {
    background: #0056b3;
  }

  .btn-primary:disabled {
    background: #6c757d;
    cursor: not-allowed;
  }

  .btn-secondary {
    background: #6c757d;
    color: white;
  }

  .btn-secondary:hover {
    background: #545b62;
  }

  .success-message {
    background: #d4edda;
    color: #155724;
    padding: 15px;
    border-radius: 4px;
    margin: 20px 0;
    border: 1px solid #c3e6cb;
  }

  .success-message h4 {
    margin: 0 0 10px 0;
    color: #155724;
  }

  .success-message a {
    color: #155724;
    text-decoration: underline;
  }

  .error-message {
    background: #f8d7da;
    color: #721c24;
    padding: 15px;
    border-radius: 4px;
    margin: 20px 0;
    border: 1px solid #f5c6cb;
  }

  .error-message h4 {
    margin: 0 0 10px 0;
    color: #721c24;
  }

  .info {
    margin-top: 20px;
    padding: 15px;
    background: #e7f3ff;
    border-radius: 4px;
    border-left: 4px solid #007bff;
  }

  .info p {
    margin: 5px 0;
    font-size: 14px;
  }

  .info ul {
    margin: 10px 0;
    padding-left: 20px;
  }

  .info li {
    margin: 5px 0;
  }

  code {
    background: #f1f1f1;
    padding: 2px 4px;
    border-radius: 3px;
    font-family: monospace;
  }

  pre {
    background: #f8f9fa;
    padding: 10px;
    border-radius: 4px;
    overflow-x: auto;
    font-size: 12px;
    margin-top: 10px;
  }

  details {
    margin-top: 10px;
  }

  summary {
    cursor: pointer;
    font-weight: bold;
    color: #007bff;
  }
</style>
