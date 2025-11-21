<script>
(async function winners(){
  const config = await fetch('data/config.json').then(r=>r.json());
  const list = document.getElementById('winner-list');
  list.innerHTML = '';
  config.winners.forEach(w=>{
    const li=document.createElement('li');
    li.innerHTML = `#${w.rank} — ${w.name} • Token: ${w.token}`;
    list.appendChild(li);
  });
})();
</script>
