document.getElementById('login-btn').addEventListener('click', async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const wallet = accounts[0];
      document.getElementById('wallet-info').textContent = `Connected: ${wallet}`;
    } catch (err) {
      document.getElementById('wallet-info').textContent = 'Connection failed.';
    }
  } else {
    document.getElementById('wallet-info').textContent = 'No wallet found. Use MetaMask or similar.';
  }
});
