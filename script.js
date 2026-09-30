// ================================
// Mobile Navigation
// ================================

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});


// ================================
// Close Mobile Menu
// ================================

const mobileLinks = mobileMenu.querySelectorAll("a");

mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
    });
});


// ================================
// Contact Form
// ================================

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

// contactForm.addEventListener("submit", (event) => {
//     event.preventDefault();

//     const formData = new FormData(contactForm);

//     const name = formData.get("name");
//     const email = formData.get("email");
//     const message = formData.get("message");

//     console.log({
//         name,
//         email,
//         message
//     });

//     formStatus.textContent =
//         "Thanks! Your message has been received.";

//     formStatus.classList.remove("hidden");

//     contactForm.reset();
// });