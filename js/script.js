
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const formMessage = document.getElementById("formMessage");

        if (!name || !email || !message) {
            formMessage.textContent = "Please fill in all fields.";
            return;
        }

        formMessage.textContent =
            "Thank you, " + name + "! Your form was validated successfully.";

        contactForm.reset();
    });
}
console.log("JavaScript file connected!");

