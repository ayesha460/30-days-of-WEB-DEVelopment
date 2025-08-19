function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function changeGradient() {
  let color1 = getRandomColor();
  let color2 = getRandomColor();
  document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
}