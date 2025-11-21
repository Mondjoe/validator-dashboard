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
