const dot = document.getElementById("dot");
const scoreDisplay = document.getElementById("score");
let score = 0;

function moveDot() {
  const gameArea = document.querySelector(".game-area");
  const maxX = gameArea.clientWidth - dot.clientWidth;
  const maxY = gameArea.clientHeight - dot.clientHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  dot.style.left = randomX + "px";
  dot.style.top = randomY + "px";
}

dot.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
  moveDot();
});

// Move dot every 2 seconds if not clicked
setInterval(moveDot, 2000);

// Initial position
moveDot();
