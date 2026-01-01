// --- Reveal Animation Intersection Observer ---
const revealOptions = { threshold: 0.15 };
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, revealOptions);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// --- Header Dynamic Background on Scroll ---
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 80) {
        nav.style.background = 'rgba(5, 5, 5, 1)';
        nav.style.padding = '15px 0';
    } else {
        nav.style.background = 'rgba(5, 5, 5, 0.8)';
        nav.style.padding = '25px 0';
    }
});