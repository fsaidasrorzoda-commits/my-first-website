

/* =====================================
   1. TYPING ANIMATION
===================================== */

const typingText = document.getElementById("typing-text");

const words = [
    "IT Teacher",
    "Programmer",
    "Technology Enthusiast",
    "Lifelong Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingText.textContent = currentWord.substring(0, charIndex);

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        speed = 1500;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

if (typingText) {
    typeEffect();
}


/* =====================================
   2. DARK / LIGHT MODE
===================================== */

const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeToggle.textContent = "🌙 Dark Mode";
}

themeToggle.addEventListener("click", function() {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
    } else {
        themeToggle.textContent = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
    }

});


/* =====================================
   3. MOBILE HAMBURGER MENU
===================================== */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function() {

    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");

    menuToggle.textContent = isOpen ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
    );

});

const navItems = document.querySelectorAll("#nav-links a");

navItems.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("show");

        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open menu");

    });

});


/* =====================================
   4. BACK TO TOP BUTTON
===================================== */

const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
