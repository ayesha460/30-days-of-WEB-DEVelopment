document.getElementById("generateBtn").addEventListener("click", generatePalette);

function generatePalette() {
    const mood = document.getElementById("moodInput").value.toLowerCase();
    const container = document.getElementById("paletteContainer");
    container.innerHTML = ""; // Clear previous palette

    let colors = [];
    if (mood === "happy") {
        colors = ["#FFD700", "#FFA500", "#FF69B4"];
    } else if (mood === "calm") {
        colors = ["#ADD8E6", "#98FB98", "#D8BFD8"];
    } else if (mood === "energetic") {
        colors = ["#FF0000", "#00FF00", "#1E90FF"];
    } else if (mood === "sad") {
        colors = ["#00008B", "#808080", "#4B0082"];
    } else {
        alert("Please enter a valid mood: happy, calm, energetic, sad");
        return;
    }

    // Display color boxes
    colors.forEach(color => {
        const box = document.createElement("div");
        box.className = "color-box";
        box.style.backgroundColor = color;

        // ✅ Change background on click
        box.addEventListener("click", () => {
            document.body.style.backgroundColor = color;
        });

        container.appendChild(box);
    });
}