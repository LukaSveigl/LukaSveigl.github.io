/// <reference path="https://code.jquery.com/jquery-3.6.0.min.js" />

$(function() {
    console.log("main.js loaded");

    // Initialize local storage.
    initLocalStorage();

    // Initialize event listeners.
    initEventListeners();

    // Initialize bootstrap elements.
    initBootstrapElements();
});

/**
 * Initialize the local storage.
 */
const initLocalStorage = () => {
    console.log("initLocalStorage() called");

    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === null) {
        localStorage.setItem("theme", "light");
    }
}

/**
 * Initialize the event listeners.
 */
const initEventListeners = () => {
    console.log("initEventListeners() called");

    $("#theme-toggle").on("click", toggleTheme);
}

const initBootstrapElements = () => {
    const navbar = new bootstrap.Collapse(document.getElementById("navbarNav"));
}

/**
 * Toggle the theme between light and dark.
 */
function toggleTheme() {
    console.log("toggleTheme() called");

    const currentTheme = localStorage.getItem("theme");

    console.log("currentTheme: " + currentTheme);

    if (currentTheme === "light") {
        localStorage.setItem("theme", "dark");

        // Invert the background and text colors.
        const body = $("body");
        body.addClass("bg-dark");
        body.addClass("text-white");

        const nav = $("nav");
        nav.addClass("navbar-dark");
        nav.addClass("bg-dark");
        nav.removeClass("navbar-light");
        nav.removeClass("bg-light");

        const footer = $("footer");
        footer.addClass("bg-dark");
        footer.addClass("text-white");
        footer.removeClass("bg-light");
        footer.removeClass("text-dark");

        const bubble = $(".bubble");
        bubble.css("box-shadow", "5px 5px 10px rgba(255, 255, 255, 0.2)");

    } else {
        localStorage.setItem("theme", "light");

        // Invert the background and text colors.
        const body = $("body");
        body.removeClass("bg-dark");
        body.removeClass("text-white");

        const nav = $("nav");
        nav.removeClass("navbar-dark");
        nav.removeClass("bg-dark");
        nav.addClass("navbar-light");
        nav.addClass("bg-light");

        const footer = $("footer");
        footer.removeClass("bg-dark");
        footer.removeClass("text-white");
        footer.addClass("bg-light");
        footer.addClass("text-dark");

        const bubble = $(".bubble");
        bubble.css("box-shadow", "5px 5px 10px rgba(0, 0, 0, 0.2)");
    }
}