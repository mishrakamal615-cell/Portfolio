// Typing Animation
const text = ["Electronics Engineer", "AI Enthusiast", "Developer"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
    if (i < text.length) {

        if (!isDeleting && j <= text[i].length) {
            currentText = text[i].substring(0, j++);
        }

        if (isDeleting && j >= 0) {
            currentText = text[i].substring(0, j--);
        }

        document.querySelector(".typing").textContent = currentText;

        if (j === text[i].length) {
            isDeleting = true;
        }

        if (j === 0 && isDeleting) {
            isDeleting = false;
            i++;
        }
    } else {
        i = 0;
    }

    setTimeout(type, 100);
}

type();

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// Scroll Reveal Animation
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 300;
        const height = sec.offsetHeight;

        if (top > offset && top < offset + height) {
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
        }
    });
});

// Initial hidden state
sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(50px)";
    sec.style.transition = "0.6s";
});