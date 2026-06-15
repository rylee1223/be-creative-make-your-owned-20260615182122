/* -------------------------------------------------
   script.js – Handles navigation toggle, smooth scroll,
   dynamic year insertion, and contact form validation.
   ------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    // Navigation toggle for mobile
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');

    navToggle.addEventListener('click', () => {
        const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
        navToggle.setAttribute('aria-expanded', !expanded);
        navList.classList.toggle('open');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('open')) {
                navList.classList.remove('open');
                navToggle.setAttribute('aria-expanded', false);
            }
        });
    });

    // Insert current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Simple form validation
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');

    form.addEventListener('submit', e => {
        e.preventDefault();
        feedback.textContent = '';
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (name.length < 2) {
            showError('Please enter a valid name (at least 2 characters).');
            return;
        }
        if (!validateEmail(email)) {
            showError('Please enter a valid email address.');
            return;
        }
        if (message.length < 10) {
            showError('Message should be at least 10 characters long.');
            return;
        }

        // Simulate successful submission
        showSuccess('Thank you! Your message has been sent.');
        form.reset();
    });

    function showError(msg) {
        feedback.style.color = '#ff6b6b';
        feedback.textContent = msg;
    }

    function showSuccess(msg) {
        feedback.style.color = '#4ecca3';
        feedback.textContent = msg;
    }

    function validateEmail(email) {
        // Basic email regex
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});