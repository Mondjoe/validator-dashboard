<script>
(async function tokens(){
  const config = await fetch('data/config.json').then(r=>r.json());
  const list = document.getElementById('token-list');
  list.innerHTML = '';
  config.memeTokens.forEach(t=>{
    const li=document.createElement('li');
    li.innerHTML = `<strong>${t.name}</strong> (${t.symbol}) • Supply: ${t.supply} • Chain: ${t.chain}`;
    list.appendChild(li);
  });
})();
</script>
fetch('capsule.json')
  .then(response => response.json())
  .then(data => {
    const tokenList = document.getElementById('token-list');
    data.memeTokens.forEach(token => {
      const li = document.createElement('li');
      li.textContent = `${token.name} (${token.symbol}) • Supply: ${token.supply} • Chain: ${token.chain}`;
      tokenList.appendChild(li);
    });
  })
  .catch(error => console.error('Error loading memeTokens:', error));
