const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const heroBgLayers = document.querySelectorAll('.hero-bg-layer');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (heroBgLayers.length > 1 && !prefersReducedMotion) {
  let activeIndex = 0;
  setInterval(() => {
    heroBgLayers[activeIndex].classList.remove('is-active');
    activeIndex = (activeIndex + 1) % heroBgLayers.length;
    heroBgLayers[activeIndex].classList.add('is-active');
  }, 15000);
}
