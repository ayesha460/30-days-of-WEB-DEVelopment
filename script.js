function showGreeting() {
    let name = document.getElementById("nameInput").value;
    let greeting = document.getElementById("greetingText");

    if (name.trim() === "") {
        greeting.innerText = "Please enter your name!";
    } else {
        greeting.innerText = Hello, ${name}! Welcome to Day 6 🎉;
    }
}

function changeBackground() {
    let colors = ["#FFB6C1", "#ADD8E6", "#90EE90", "#FFD700", "#FFA07A"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}