// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // 1. Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('nav ul li a[href^="#"], nav ul li a[href^="index.html"], nav ul li a[href^="About.html"], nav ul li a[href^="services.html"], nav ul li a[href^="contact"]');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Prevent default behavior for internal links
            if (link.getAttribute('href').startsWith('#') || link.getAttribute('href') === 'contact') {
                e.preventDefault();
                let targetId = link.getAttribute('href') === 'contact' ? 'contact' : link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId) || document.querySelector(link.getAttribute('href'));
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // 2. Sign-In Modal Functionality
    const signInButton = document.querySelector('.cta-btn[href="#"]'); // Adjust selector if necessary
    if (signInButton) {
        signInButton.addEventListener('click', (e) => {
            e.preventDefault();
            openSignInModal();
        });
    }

    function openSignInModal() {
        // Create modal overlay
        const modalOverlay = document.createElement('div');
        modalOverlay.id = 'modalOverlay';
        modalOverlay.classList.add('modal-overlay');
        
        // Create modal content
        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');
        modalContent.innerHTML = `
            <span class="close-button">&times;</span>
            <h2>Sign In</h2>
            <form id="signInForm">
                <input type="email" id="signInEmail" placeholder="Email" required>
                <input type="password" id="signInPassword" placeholder="Password" required>
                <button type="submit">Sign In</button>
            </form>
        `;

        modalOverlay.appendChild(modalContent);
        document.body.appendChild(modalOverlay);

        // Show modal
        modalOverlay.style.display = 'flex';

        // Close modal when clicking the close button or outside the modal
        const closeButton = modalOverlay.querySelector('.close-button');
        closeButton.addEventListener('click', () => {
            modalOverlay.style.display = 'none';
            modalOverlay.remove();
        });

        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.style.display = 'none';
                modalOverlay.remove();
            }
        });

        // Handle Sign-In Form Submission
        const signInForm = document.getElementById('signInForm');
        signInForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Implement actual sign-in logic here
            alert('Sign-In functionality is not yet implemented.');
            modalOverlay.style.display = 'none';
            modalOverlay.remove();
        });
    }

    // 3. Contact Form Validation and Submission
    const contactForm = document.querySelector('.contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = contactForm.querySelector('input[type="text"]').value.trim();
            const email = contactForm.querySelector('input[type="email"]').value.trim();
            const message = contactForm.querySelector('textarea').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields.');
                return;
            }

            // Simple email format validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Implement actual form submission logic here (e.g., send data to server)
            alert('Thank you for contacting us!');
            contactForm.reset();
        });
    }

    // 4. Interactive News Buttons
    const newsButtons = document.querySelectorAll('.news-item .cta-btn');
    newsButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const href = button.getAttribute('href');
            if (!href || href === '#') {
                e.preventDefault();
                alert('This feature is coming soon!');
            }
        });
    });

    // 5. Virtual Tour Button
    const tourButton = document.querySelector('.virtual-tour .cta-btn');
    if (tourButton) {
        tourButton.addEventListener('click', (e) => {
            e.preventDefault();
            startVirtualTour();
        });
    }

    function startVirtualTour() {
        // Implement actual virtual tour functionality here
        // For now, we'll display an alert
        alert('Starting the virtual tour...');
        // Example: Redirect to a tour page
        // window.location.href = 'tour.html';
    }

});
