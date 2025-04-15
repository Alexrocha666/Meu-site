const symbols = ['🐯', '🍒', '💰', '🍇', '7️⃣'];

function spin() {
  const r1 = symbols[Math.floor(Math.random() * symbols.length)];
  const r2 = symbols[Math.floor(Math.random() * symbols.length)];
  const r3 = symbols[Math.floor(Math.random() * symbols.length)];

  document.getElementById('reel1').textContent = r1;
  document.getElementById('reel2').textContent = r2;
  document.getElementById('reel3').textContent = r3;

  if (r1 === r2 && r2 === r3) {
    document.getElementById('result').textContent = "Você ganhou!";
  } else {
    document.getElementById('result').textContent = "Tente novamente!";
  }
}
