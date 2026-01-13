// ===========================
// ELEMENTS
// ===========================
const birthdayMusic = document.getElementById("birthdayMusic");
const romanticMusic = document.getElementById("romanticMusic");
const letterBox = document.getElementById("letter");
const photo = document.getElementById("photo");
const surpriseBtn = document.getElementById("surpriseBtn");
const confessBtn = document.getElementById("confessBtn");
const heartsContainer = document.getElementById("floatingHearts");
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

// ===========================
// CANVAS RESIZE
// ===========================
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

// ===========================
// CONFESSION TEXT
// ===========================
const confession = `Dear Riya, 🌸

I don’t really know yet what I feel in my heart for you 💛,
or what you think about me — and I understand that you might see me as just a friend 🤍.

But between 26th and 27th December, something quietly changed for me 🦋.

Seeing you cry affected me more than I expected 😢.
Talking to you felt different — easy and honest ✨.

Small moments started meaning more:
sitting together, quiet conversations, shared smiles 📚💫.

On New Year’s Day 🎆,
your outfit made you look adorable —
you honestly reminded me of Santa 🎅😊.

Somewhere in all this,
I started thinking of you as more than a friend 💛.

If that’s possible, I’d be grateful 🌸.
If not, that’s okay too 🤍.

What we already share is beautiful,
and I value it deeply 💖.
`;

// ===========================
// MUSIC AUTOPLAY
// ===========================
window.addEventListener(
  "click",
  () => {
    if (birthdayMusic && birthdayMusic.paused) {
      birthdayMusic.play().catch(() => {});
    }
  },
  { once: true }
);

// ===========================
// BUTTON EVENTS
// ===========================
surpriseBtn.addEventListener("click", () => {
  surpriseBtn.style.display = "none";
  confessBtn.style.display = "inline-block";
  startHearts();
  startFireworks();
  playRomanticMusic();
});

confessBtn.addEventListener("click", () => {
  confessBtn.style.display = "none";
  photo.style.display = "block";
  letterBox.innerHTML = "";
  typeWriter(confession, 0);
});

// ===========================
// TYPEWRITER
// ===========================
function typeWriter(text, index) {
  if (index < text.length) {
    letterBox.innerHTML +=
      text.charAt(index) === "\n" ? "<br>" : text.charAt(index);
    letterBox.scrollTop = letterBox.scrollHeight;
    setTimeout(() => typeWriter(text, index + 1), 40);
  }
}

// ===========================
// HEARTS
// ===========================
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("span");
    heart.textContent = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-20px";
    heart.style.fontSize = 16 + Math.random() * 24 + "px";
    heart.style.position = "fixed";
    heart.style.animation = "floatUp 6s linear forwards";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }, 400);
}

// ===========================
// FIREWORKS
// ===========================
function startFireworks() {
  setInterval(() => {
    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height * 0.5;

    for (let i = 0; i < 25; i++) {
      ctx.beginPath();
      ctx.arc(
        x + Math.random() * 30 - 15,
        y + Math.random() * 30 - 15,
        Math.random() * 2 + 1,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = `hsl(${Math.random() * 360},100%,60%)`;
      ctx.fill();
    }
  }, 120);
}

// ===========================
// MUSIC SWITCH
// ===========================
function playRomanticMusic() {
  if (birthdayMusic) {
    birthdayMusic.pause();
    birthdayMusic.currentTime = 0;
  }
  if (romanticMusic) {
    romanticMusic.play().catch(() => {});
  }
}

// ===========================
// HEART ANIMATION
// ===========================
const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(-100vh); opacity: 0; }
}`;
document.head.appendChild(style);
