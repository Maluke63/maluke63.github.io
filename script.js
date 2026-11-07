
/* =================================
   1. MOBILE NAVIGATION
================================= */

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-links");

if (menuButton && navigation) {

    menuButton.addEventListener("click", function () {

        navigation.classList.toggle("show");

        const isOpen = navigation.classList.contains("show");

        menuButton.setAttribute("aria-expanded", isOpen);

        menuButton.textContent = isOpen ? "✕" : "☰";

    });

    // Close the menu after selecting a page.

    navigation.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navigation.classList.remove("show");

            menuButton.setAttribute("aria-expanded", "false");

            menuButton.textContent = "☰";

        });

    });

}


/* =================================
   2. CONTACT FORM
================================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const message = document.getElementById("message").value.trim();

        const status = document.getElementById("formStatus");

        if (!name || !email || !message) {

            status.textContent = "Please complete all fields.";

            return;

        }

        const myEmail = "malukelibenyane@gmail.com";

        const subject = encodeURIComponent(
            "Portfolio Contact - " + name
        );

        const body = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage:\n" + message
        );

        const mailLink = "mailto:" + myEmail +
            "?subject=" + subject +
            "&body=" + body;

        status.textContent =
            "Opening your email application...";

        window.location.href = mailLink;

    });

}
