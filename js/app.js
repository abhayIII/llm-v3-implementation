document.addEventListener('DOMContentLoaded', () => {
    try {
        // ======================
        //  Mobile Menu Toggle
        // ======================
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        const navItems = document.querySelectorAll('.nav-links a');

        const toggleMenu = () => {
            navLinks.classList.toggle('nav-active');
            hamburger.classList.toggle('is-active');
        };

        if (hamburger && navLinks) {
            // Toggle menu on hamburger click
            hamburger.addEventListener('click', toggleMenu);

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.navbar') && navLinks.classList.contains('nav-active')) {
                    toggleMenu();
                }
            });

            // Close menu on nav item click
            navItems.forEach(item => {
                item.addEventListener('click', toggleMenu);
            });
        }

        // ======================
        //  Smooth Scrolling
        // ======================
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // ======================
        //  Form Validation
        // ======================
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            const errorContainer = document.createElement('div');
            errorContainer.className = 'error-messages';
            contactForm.prepend(errorContainer);

            const showError = (message, isSuccess = false) => {
                errorContainer.textContent = message;
                errorContainer.style.color = isSuccess ? 'green' : 'red';
                errorContainer.style.display = 'block';
                setTimeout(() => {
                    errorContainer.style.display = 'none';
                }, isSuccess ? 3000 : 5000);
            };

            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(contactForm);
                
                try {
                    // Validate name
                    if (!formData.get('name').trim()) throw 'Please enter your name';
                    
                    // Validate email
                    const email = formData.get('email').trim();
                    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw 'Invalid email address';
                    
                    // Validate message
                    if (formData.get('message').trim().length < 10) throw 'Message must be at least 10 characters';

                    // If validation passes
                    showError('Message sent successfully!', true);
                    contactForm.reset();

                } catch (error) {
                    showError(error);
                }
            });
        }

        // ======================
        //  Feature Cards Animation
        // ======================
        const featureCards = document.querySelectorAll('.feature-card');
        if (featureCards.length > 0) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    }
                });
            }, { threshold: 0.1 });

            featureCards.forEach(card => observer.observe(card));
        }

        // ======================
        //  Learn More Buttons
        // ======================
        document.querySelectorAll('.learn-more-btn').forEach(button => {
            button.addEventListener('click', () => {
                const cardTitle = button.closest('.feature-card').querySelector('h3').textContent;
                alert(`Feature clicked: ${cardTitle}`);
            });
        });

    } catch (error) {
        console.error('Initialization error:', error);
    }
});