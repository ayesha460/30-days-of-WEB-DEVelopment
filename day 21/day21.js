const emojiBox = document.getElementById("emoji-box");

const emojis = [
  "😀","😂","😎","😍","🥳","🤩","😇","😭","😡","🤔",
  "🙌","🔥","🌟","🎉","🚀","🍕","🍔","🍟","🍩","🍎",
  "⚽","🏀","🎮","🎵","📚","💡","💻","📱","🎁","❤️"
];

function generateEmoji() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  emojiBox.textContent = emojis[randomIndex];
}
