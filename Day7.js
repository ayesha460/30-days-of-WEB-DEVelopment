const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Check saved theme from localStorage
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    themeToggle.textContent = "☀ Light Mode";
}

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀ Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
    }
});