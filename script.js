const grid = document.getElementById("boxGrid");
const message = document.getElementById("message");
const streakEl = document.getElementById("streak");
const winsEl = document.getElementById("wins");

let winStreak = 0;
let totalWins = 0;
let prizeIndex = -1;

function initGame() {
  grid.innerHTML = "";
  message.style.display = "none";

  prizeIndex = Math.floor(Math.random() * 9);

  for (let i = 0; i < 9; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerText = "?";

    box.addEventListener("click", () => {
      if (i === prizeIndex) {
        box.classList.add("winner");
        box.innerText = "🎉";
        winStreak++;
        totalWins++;
        winsEl.innerText = totalWins;
        streakEl.innerText = winStreak;
        showMessage("You Win!", "green");
      } else {
        box.classList.add("loser");
        box.innerText = "✗";
        winStreak = 0;
        streakEl.innerText = winStreak;
        showMessage("Game Over! Better luck next time.", "red");
      }

      // Disable all boxes after click
      document.querySelectorAll(".box").forEach(b => {
        b.classList.add("clicked");
      });

      // Restart after 2 seconds
      setTimeout(initGame, 2000);
    });

    grid.appendChild(box);
  }
}

function showMessage(text, color) {
  message.innerText = text;
  message.style.color = color;
  message.style.display = "block";
}

initGame();
