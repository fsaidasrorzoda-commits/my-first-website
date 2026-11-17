
/* =================================
   ECOCODE - JAVASCRIPT
================================= */

// 1. MOBILE NAVIGATION

const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");

menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("show");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close mobile menu after selecting a link

document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});


// 2. COURSE SEARCH

const courseSearch = document.querySelector("#courseSearch");
const courseCards = document.querySelectorAll(".course-card");
const filterButtons = document.querySelectorAll(".filter-btn");
const noResults = document.querySelector("#noResults");

let currentFilter = "all";

function filterCourses() {

    const searchText = courseSearch.value.toLowerCase().trim();
    let visibleCount = 0;

    courseCards.forEach(function (card) {

        const category = card.dataset.category;
        const content = card.textContent.toLowerCase();

        const matchesSearch = content.includes(searchText);

        const matchesFilter =
            currentFilter === "all" ||
            category === currentFilter;

        const shouldShow = matchesSearch && matchesFilter;

        card.hidden = !shouldShow;

        if (shouldShow) {
            visibleCount++;
        }

    });

    noResults.hidden = visibleCount !== 0;
}

courseSearch.addEventListener("input", filterCourses);


// 3. COURSE FILTER BUTTONS

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        filterButtons.forEach(function (item) {
            item.classList.remove("active");
        });

        button.classList.add("active");

        currentFilter = button.dataset.filter;

        filterCourses();

    });

});


// 4. COURSE DETAILS

const courseDetails = document.querySelector("#courseDetails");
const detailTitle = document.querySelector("#detailTitle");
const detailDescription = document.querySelector("#detailDescription");
const detailLevel = document.querySelector("#detailLevel");
const closeDetails = document.querySelector("#closeDetails");

const courseInformation = {

    html: {
        title: "HTML - Web Structure",
        description: "Learn HTML elements, headings, paragraphs, links, images, lists and forms. Build your first webpage.",
        level: "Beginner | Web Development"
    },

    css: {
        title: "CSS - Web Design",
        description: "Learn colors, backgrounds, typography, spacing, Flexbox, Grid and responsive web design.",
        level: "Beginner | Web Development"
    },

    javascript: {
        title: "JavaScript - Web Interaction",
        description: "Learn variables, data types, conditions, loops, functions and interactive webpage features.",
        level: "Beginner | Web Development"
    },

    python: {
        title: "Python - Programming",
        description: "Start with variables, input, output, conditions, loops and functions using Python.",
        level: "Beginner | Programming"
    },

    cpp: {
        title: "C++ - Programming",
        description: "Learn program structure, variables, input, output, if/else, loops and functions.",
        level: "Beginner | Programming"
    },

    sql: {
        title: "SQL - Database",
        description: "Understand databases, tables, records and SQL commands such as SELECT, INSERT, UPDATE and DELETE.",
        level: "Beginner | Database"
    }

};

document.querySelectorAll(".course-link").forEach(function (button) {

    button.addEventListener("click", function () {

        const courseName = button.dataset.course;
        const course = courseInformation[courseName];

        if (!course) return;

        detailTitle.textContent = course.title;
        detailDescription.textContent = course.description;
        detailLevel.textContent = course.level;

        courseDetails.hidden = false;

        courseDetails.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });

});


// CLOSE COURSE DETAILS

closeDetails.addEventListener("click", function () {
    courseDetails.hidden = true;
});


// 5. CONTACT FORM DEMONSTRATION

const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.querySelector("#userName").value.trim();

    formMessage.textContent =
        "Thank you, " + name +
        "! Your form works, but message delivery is not connected yet.";

    contactForm.reset();

});


// 6. AUTOMATIC COPYRIGHT YEAR

document.querySelector("#year").textContent =
    new Date().getFullYear();


// 7. WELCOME MESSAGE IN CONSOLE

console.log("Welcome to ECOCODE!");
console.log("Learn. Practice. Create.");
