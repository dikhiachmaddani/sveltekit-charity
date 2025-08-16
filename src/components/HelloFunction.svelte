<script lang="ts">
  import { onMount } from 'svelte';

  let message = '';
  let loading = false;
  let error = '';

  async function callHelloFunction() {
    loading = true;
    error = '';
    
    try {
      const response = await fetch('/.netlify/functions/hello');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      message = data.message;
    } catch (err) {
      error = err instanceof Error ? err.message : 'An error occurred';
    } finally {
      loading = false;
    }
  }

  onMount(() => {
    // Auto-call the function when component mounts
    callHelloFunction();
  });
</script>

<div class="hello-function">
  <h3>Netlify Function Test</h3>
  
  <button 
    on:click={callHelloFunction} 
    disabled={loading}
    class="btn btn-primary"
  >
    {loading ? 'Calling...' : 'Call Hello Function'}
  </button>

  {#if message}
    <div class="success-message">
      <strong>Response:</strong> {message}
    </div>
  {/if}

  {#if error}
    <div class="error-message">
      <strong>Error:</strong> {error}
    </div>
  {/if}

  <div class="info">
    <p>This component calls the <code>hello.js</code> Netlify function.</p>
    <p>The function returns a message and can be used for custom server-side logic.</p>
  </div>
</div>

<style>
  .hello-function {
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin: 20px 0;
    background: #f9f9f9;
  }

  .btn {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin: 10px 0;
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

  .success-message {
    background: #d4edda;
    color: #155724;
    padding: 10px;
    border-radius: 4px;
    margin: 10px 0;
    border: 1px solid #c3e6cb;
  }

  .error-message {
    background: #f8d7da;
    color: #721c24;
    padding: 10px;
    border-radius: 4px;
    margin: 10px 0;
    border: 1px solid #f5c6cb;
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

  code {
    background: #f1f1f1;
    padding: 2px 4px;
    border-radius: 3px;
    font-family: monospace;
  }
</style>
