const showBtn = document.getElementById("showBtn");
const recipeCard = document.getElementById("recipeCard");

showBtn.addEventListener("click", () => {
  recipeCard.style.display = "block";
  showBtn.style.display = "none"; // hide button after showing recipe
});
