// script.js

const toggleButton = document.getElementById('toggleNav');
const navMenu = document.getElementById('mainNav');

toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

const contactForm = document.getElementById('contactForm');
const confirmationMessage = document.getElementById('confirmationMessage');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    confirmationMessage.innerHTML = `Thank you, ${name}! We have received your contact information (email: ${email}).`;
});
