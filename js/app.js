document.addEventListener('DOMContentLoaded', () => {
    try {
        // ======================
        //  Mobile Menu Toggle (Fixed)
        // ======================
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        const navbar = document.querySelector('.navbar');
        
        const toggleMenu = (forceClose = false) => {
            if (forceClose) {
                navLinks.classList.remove('nav-active');
                hamburger.classList.remove('is-active');
            } else {
                navLinks.classList.toggle('nav-active');
                hamburger.classList.toggle('is-active');
            }
        };
        
        if (hamburger && navLinks) {
            // Toggle menu on hamburger click
            hamburger.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent event bubbling
                toggleMenu();
            });
        
            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!navbar.contains(e.target) && navLinks.classList.contains('nav-active')) {
                    toggleMenu(true);
                }
            });
        
            // Close menu on ESC key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && navLinks.classList.contains('nav-active')) {
                    toggleMenu(true);
                }
            });
        
            // Close menu on nav item click (with smooth scroll)
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', (e) => {
                    if (window.innerWidth <= 768) {
                        toggleMenu(true);
                    }
                });
            });
        }

        // ======================
        //  Enhanced Form Validation (Fixed)
        // ======================
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            const feedbackContainer = document.createElement('div');
            feedbackContainer.className = 'form-feedback';
            contactForm.prepend(feedbackContainer);

            const showFeedback = (message, type = 'error') => {
                feedbackContainer.textContent = message;
                feedbackContainer.className = `form-feedback ${type}`;
                setTimeout(() => {
                    feedbackContainer.className = 'form-feedback';
                }, type === 'success' ? 3000 : 5000);
            };

            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(contactForm);
                
                try {
                    // Validate name
                    const name = formData.get('name').trim();
                    if (!name) throw 'Please enter your name';
                    
                    // Validate email
                    const email = formData.get('email').trim();
                    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw 'Invalid email address';
                    
                    // Validate message
                    const message = formData.get('message').trim();
                    if (message.length < 10) throw 'Message must be at least 10 characters';

                    // Simulate successful submission
                    showFeedback('✓ Message sent successfully!', 'success');
                    contactForm.reset();
                    
                    // Remove focus from submit button
                    e.target.querySelector('button[type="submit"]').blur();

                } catch (error) {
                    showFeedback(`⚠️ ${error}`);
                    contactForm.classList.add('form-error');
                    setTimeout(() => contactForm.classList.remove('form-error'), 500);
                }
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