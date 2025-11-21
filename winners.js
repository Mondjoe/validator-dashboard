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
fetch('capsule.json')
  .then(response => response.json())
  .then(data => {
    const winnerList = document.getElementById('winner-list');
    data.winners.forEach(winner => {
      const li = document.createElement('li');
      li.textContent = `#${winner.rank} — ${winner.name} (${winner.token})`;
      winnerList.appendChild(li);
    });
  })
  .catch(error => console.error('Error loading winners:', error));
