// Audio Elements
const birthdayMusic = document.getElementById("birthdayMusic");
const romanticMusic = document.getElementById("romanticMusic");

// Buttons
const surpriseBtn = document.getElementById("surpriseBtn");
const confessBtn = document.getElementById("confessBtn");

// Letter
const letter = document.getElementById("letter");

// Play Birthday Music
surpriseBtn.addEventListener("click", () => {
  birthdayMusic.play();
});

// Special Words & Romantic Music
confessBtn.addEventListener("click", () => {
  romanticMusic.play();
  letter.innerHTML = `
    <p>Riya, you are amazing 💖<br>
    Every moment with you is special.<br>
    Your smile lights up the world 🌟<br>
    Happy Birthday once again! 🎂💐</p>
  `;
  letter.style.display = "block";
});

// Fireworks Canvas
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createFirework() {
  const x = random(0, canvas.width);
  const y = random(0, canvas.height / 2);
  const colors = ["#ff0000", "#ff9900", "#ffff00", "#00ff00", "#00ffff", "#ff00ff"];
  const color = colors[Math.floor(random(0, colors.length))];

  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x + random(-50, 50), y + random(-50, 50), 3, 0, Math.PI * 2);
      ctx.fill();
    }, i * 50);
  }
}

setInterval(createFirework, 1000);

// Floating Hearts
const floatingHearts = document.getElementById("floatingHearts");
function createHeart() {
  const heart = document.createElement("div");
  heart.textContent = "❤️";
  heart.style.left = `${Math.random() * window.innerWidth}px`;
  heart.style.top = `${window.innerHeight}px`;
  heart.style.fontSize = `${random(20, 40)}px`;
  floatingHearts.appendChild(heart);

  let top = window.innerHeight;
  const id = setInterval(() => {
    top -= 2;
    heart.style.top = top + "px";
    if (top < -50) {
      clearInterval(id);
      heart.remove();
    }
  }, 20);
}

setInterval(createHeart, 500);
