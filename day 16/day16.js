function rollDice() {
  const dice = Math.floor(Math.random() * 6) + 1; // Random number 1-6
  document.getElementById('diceNumber').innerText = dice;
}