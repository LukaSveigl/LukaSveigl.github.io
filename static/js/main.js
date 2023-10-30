/// <reference path="https://code.jquery.com/jquery-3.6.0.min.js" />

$(function() {
    // Initialize local storage.
    initLocalStorage();

    // Initialize event listeners.
    initEventListeners();

    // Initialize bootstrap elements.
    initBootstrapElements();
});

/**
 * Map of the project names to their respective GitHub repositories.
 *
 * @type {{JPINS: string, MythVM: string, MythC: string}}
 */
const indexHighlightsToURLs = {
    "JPINS-bubble": "https://github.com/LukaSveigl/PINS-JavaBytecode-Compiler",
    "MythC-bubble": "https://github.com/LukaSveigl/Myth-Compiler",
    "MythVM-bubble": "https://github.com/LukaSveigl/Myth-VM",
}

/**
 * Initialize the local storage.
 */
const initLocalStorage = () => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === null) {
        // Check if theme is set as a GET parameter in the URL.
        const url = new URL(window.location.href);
        const theme = url.searchParams.get("theme");

        if (theme === "dark") {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    }
}

/**
 * Initialize the event listeners.
 */
const initEventListeners = () => {
    $("#theme-toggle").on("click", toggleTheme);

    initIndexHighlightEventListeners();
}

/**
 * Initialize the event listeners for the index highlights.
 */
const initIndexHighlightEventListeners = () => {
    for (const highlightId in indexHighlightsToURLs) {
        const highlight = $("#" + highlightId);
        highlight.on("click", () => {
            window.location.href = indexHighlightsToURLs[highlightId];
        });
    }
}

/**
 * Initialize the bootstrap elements, such as the navbar on mobile devices.
 */
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

        // Set the theme as a GET parameter in the URL.
        for (const a of $("nav").children("a")) {
            const href = a.href;
            const url = new URL(href);
            url.searchParams.set("theme", "dark");
            a.href = url.href;

            console.log("a.href: " + a.href);
        }

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

        // Set the theme as a GET parameter in the URL.
        for (const a of $("nav").children("a")) {
            const href = a.href;
            const url = new URL(href);
            url.searchParams.delete("theme");
            a.href = url.href;

            console.log("a.href: " + a.href);
        }
    }
}