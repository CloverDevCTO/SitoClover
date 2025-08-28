$(document).ready(function() {
  $('#customers-testimonials').owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1170: { items: 3 }
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
     
    
    //Navigazione e altro

        const navLinks = document.querySelectorAll('.nav-link');
            const sections = document.querySelectorAll('.nav-section');
            const heroSection = document.querySelector('.hero');
            const mobileToggle = document.getElementById('mobile-toggle');
            const nav = document.getElementById('nav');

            // Mobile menu toggle
            mobileToggle.addEventListener('click', function() {
                nav.classList.toggle('active');
            });

            // Navigation functionality
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href').substring(1);
                    
                    // Hide all sections
                    sections.forEach(section => {
                        section.classList.remove('active');
                    });
                    
                    if (targetId === 'home') {
                        // Show hero section and all homepage sections in CORRECT order
                        heroSection.style.display = 'flex';
                        document.querySelector('.partner-logos').style.display = 'block';
                        document.querySelector('.stats').style.display = 'block';
                        document.querySelector('.petal-cards').style.display = 'block';
                        document.querySelector('.ticker-section').style.display = 'block';
                        document.querySelector('.methodology-pillars').style.display = 'block';
                        document.querySelector('.nextgen-hackathon').style.display = 'block';
                        document.querySelector('.ecosystem-section').style.display = 'block';
                        document.querySelector('.team-section').style.display = 'block';
                        document.querySelector('.scientific-board').style.display = 'block';
                        document.querySelector('.osservatorio-section').style.display = 'block';
                        document.querySelector('.testimonials-section').style.display = 'block';
                        document.querySelector('.contact-section').style.display = 'block';
                    } else {
                        // Hide hero and all homepage sections, show target section
                        heroSection.style.display = 'none';
                        document.querySelector('.partner-logos').style.display = 'none';
                        document.querySelector('.stats').style.display = 'none';
                        document.querySelector('.petal-cards').style.display = 'none';
                        document.querySelector('.ticker-section').style.display = 'none';
                        document.querySelector('.methodology-pillars').style.display = 'none';
                        document.querySelector('.nextgen-hackathon').style.display = 'none';
                        document.querySelector('.ecosystem-section').style.display = 'none';
                        document.querySelector('.team-section').style.display = 'none';
                        document.querySelector('.scientific-board').style.display = 'none';
                        document.querySelector('.osservatorio-section').style.display = 'none';
                        document.querySelector('.testimonials-section').style.display = 'none';
                        document.querySelector('.contact-section').style.display = 'none';
                        
                        const targetSection = document.getElementById(targetId);
                        if (targetSection) {
                            targetSection.classList.add('active');
                        }
                    }

                    // Update active nav link
                    navLinks.forEach(nl => nl.classList.remove('active'));
                    this.classList.add('active');

                    // Close mobile menu
                    nav.classList.remove('active');

                    // Scroll to top
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            });

            // Smooth scrolling for all internal links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    if (this.classList.contains('nav-link')) return; // Already handled above
                    
                    e.preventDefault();
                    const targetId = this.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);
                    
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });

            // Intersection Observer for animations
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-up');
                    }
                });
            }, observerOptions);

            // Observe elements for animation
            document.querySelectorAll('.petal-card, .stat-item, .service-card').forEach(el => {
                observer.observe(el);
            });

            // Header scroll effect
            let lastScrollTop = 0;
            window.addEventListener('scroll', function() {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const header = document.querySelector('header');
                
                if (scrollTop > lastScrollTop && scrollTop > 100) {
                    // Scrolling down
                    header.style.transform = 'translateY(-100%)';
                } else {
                    // Scrolling up
                    header.style.transform = 'translateY(0)';
                }
                
                lastScrollTop = scrollTop;
            });

            // Dynamic counter animation
            function animateCounters() {
                const counters = document.querySelectorAll('.stat-number');
                counters.forEach(counter => {
                    const target = counter.textContent;
                    const numericValue = parseInt(target.replace(/[^0-9]/g, ''));
                    const suffix = target.replace(/[0-9]/g, '');
                    
                    let current = 0;
                    const increment = numericValue / 50;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= numericValue) {
                            current = numericValue;
                            clearInterval(timer);
                        }
                        counter.textContent = Math.floor(current) + suffix;
                    }, 30);
                });
            }

            // Trigger counter animation when stats section is visible
            const statsObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCounters();
                        statsObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            const statsSection = document.querySelector('.stats');
            if (statsSection) {
                statsObserver.observe(statsSection);
            }

            // Parallax effect for hero
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
                const hero = document.querySelector('.hero');
                if (hero) {
                    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
                }
            });

            // Interactive card tilt effect
            document.querySelectorAll('.petal-card').forEach(card => {
                card.addEventListener('mousemove', function(e) {
                    const rect = this.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const rotateX = (y - centerY) / 10;
                    const rotateY = (centerX - x) / 10;
                    
                    this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
                });
            });

            // Smooth page transitions
            function smoothTransition() {
                document.body.style.opacity = '0';
                setTimeout(() => {
                    document.body.style.transition = 'opacity 0.3s ease';
                    document.body.style.opacity = '1';
                }, 100);
            }

            // Initialize page
            smoothTransition();


            // Contact form handling (if needed later)
        function handleContactForm(event) {
            event.preventDefault();
            
            const formData = new FormData(event.target);
            const data = {
                fullName: formData.get('fullName'),
                email: formData.get('email'),
                role: formData.get('role'),
                company: formData.get('company'),
                message: formData.get('message')
            };
            
            // Create mailto link
            const subject = `Richiesta Strategica da ${data.fullName} - ${data.company}`;
            const body = `Nome: ${data.fullName}
Email: ${data.email}
Ruolo: ${data.role}
Azienda: ${data.company}

Messaggio:
${data.message}`;
            
            const mailtoLink = `mailto:paolo@cloverventure.it?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoLink;
            
            // Show success message
            const button = event.target.querySelector('button[type="submit"]');
            const originalText = button.textContent;
            button.textContent = 'Messaggio Inviato!';
            button.style.background = 'var(--green, #28a745)';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = 'var(--clover-teal)';
                event.target.reset();
            }, 3000);
        }

        // Dynamic content loading simulation
        function loadDynamicContent() {
            const elements = document.querySelectorAll('.content-loading');
            elements.forEach((element, index) => {
                setTimeout(() => {
                    element.classList.add('content-loaded');
                }, index * 200);
            });
        }

        // Call on page load
        window.addEventListener('load', loadDynamicContent);


    // Hero Slideshow
    const slides = document.querySelectorAll('.hero-slideshow .slide');
    let currentSlide = 0;
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 4000);

    // Language Switcher
    const langSwitcher = document.querySelector('.language-switcher');
    if(langSwitcher) {
        const userLang = navigator.language || navigator.userLanguage;
        if (userLang.startsWith('it')) {
            // Logic to switch to Italian
        }
    }

    // Cookie Banner
    const cookieBanner = document.createElement('div');
    cookieBanner.innerHTML = `
        <div class="cookie-banner">
            <p>We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.</p>
            <button class="btn btn-primary">Accept</button>
        </div>
    `;
    document.body.appendChild(cookieBanner);
    cookieBanner.querySelector('button').addEventListener('click', () => {
        cookieBanner.style.display = 'none';
    });
});