// ===================== script.js =====================
const texts = [
  "Electronics Engineer",
  "Cloud Enthusiast",
  "AI/ML Developer",
  "UI/UX Designer"
];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
  currentText = texts[i];
  document.getElementById("typing").textContent = currentText.substring(0, j);

  if (!isDeleting && j < currentText.length) {
    j++;
  } else if (isDeleting && j > 0) {
    j--;
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % texts.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();

// Hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});