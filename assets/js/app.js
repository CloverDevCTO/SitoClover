document.addEventListener('DOMContentLoaded', function() {
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