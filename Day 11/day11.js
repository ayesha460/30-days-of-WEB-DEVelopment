let randomNum = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
  const guess = document.getElementById("guessInput").value;
  const result = document.getElementById("result");

  if (guess == "") {
    result.textContent = "⚠ Please enter a number!";
    result.style.color = "orange";
    return;
  }

  if (Number(guess) === randomNum) {
    result.textContent = "🎉 Correct! The number was " + randomNum;
    result.style.color = "green";
  } else {
    result.textContent = "❌ Wrong guess, try again!";
    result.style.color = "red";
  }
}

function resetGame() {
  randomNum = Math.floor(Math.random() * 10) + 1;
  document.getElementById("result").textContent = "";
  document.getElementById("guessInput").value = "";
}