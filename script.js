function showWish() {
    document.getElementById("wish").style.display = "block";
}

// Birthday countdown logic
const today = new Date();
const year = today.getFullYear();
let birthday = new Date(year, 0, 14); // January = 0

if (today > birthday) {
    birthday = new Date(year + 1, 0, 14);
}

const diff = birthday - today;
const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

const countdown = document.getElementById("countdown");

if (days > 0) {
    countdown.innerText = `🎈 ${days} day(s) to go`;
} else {
    countdown.innerText = "🎉 Today is the day!";
}
