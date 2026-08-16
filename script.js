/* =========================
   LUNA BOUTIQUE JAVASCRIPT
========================= */


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".luna-navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }

});


/* =========================
   CLOSE MOBILE NAVBAR
========================= */

const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navbarCollapse.classList.contains("show")) {

            const bsCollapse =
                bootstrap.Collapse.getInstance(navbarCollapse);

            if (bsCollapse) {
                bsCollapse.hide();
            }

        }

    });

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {
            link.classList.add("active");
        }

    });

});


/* =========================
   QUICK VIEW
========================= */

function quickView(name, price, description) {

    document.getElementById("quickViewTitle").textContent = name;

    document.getElementById("quickViewPrice").textContent = price;

    document.getElementById("quickViewDescription").textContent =
        description;

    const whatsappNumber = "923001234567";

    const message =
        `Hi Luna Boutique, I'm interested in ${name}.`;

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    document.getElementById("quickViewOrder").href = whatsappURL;

    const modalElement =
        document.getElementById("quickViewModal");

    const modal =
        new bootstrap.Modal(modalElement);

    modal.show();
}


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (!name || !email || !subject || !message) {

        formMessage.textContent =
            "Please complete all fields.";

        return;
    }


    /*
        This is a FRONTEND demo.

        A real client website would connect this form
        to a backend, email service or form-processing API.
    */

    const whatsappMessage =
        `Hello Luna Boutique!%0A%0A` +
        `Name: ${encodeURIComponent(name)}%0A` +
        `Email: ${encodeURIComponent(email)}%0A` +
        `Subject: ${encodeURIComponent(subject)}%0A` +
        `Message: ${encodeURIComponent(message)}`;

    const whatsappURL =
        `https://wa.me/923001234567?text=${whatsappMessage}`;

    formMessage.innerHTML =
        `Thank you, ${name}! ` +
        `<a href="${whatsappURL}" target="_blank">` +
        `Continue on WhatsApp` +
        `</a>`;

    contactForm.reset();

});


/* =========================
   IMAGE FALLBACK
========================= */

const images =
    document.querySelectorAll("img");

images.forEach(function (image) {

    image.addEventListener("error", function () {

        image.style.display = "none";

        const parent =
            image.closest(".product-image-wrapper, .hero-image-card, .about-image-wrapper");

        if (parent) {
            parent.style.background = "#eee9e2";
        }

    });

});