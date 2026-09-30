const navLinks = [...document.querySelectorAll('.nav nav a')];
const sections = [...document.querySelectorAll('main section[id]')];
const topButton = document.querySelector('.top-button');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
    });
  });
}, { threshold: 0.55 });

sections.forEach(section => observer.observe(section));

window.addEventListener('scroll', () => {
  topButton.classList.toggle('show', window.scrollY > window.innerHeight * 0.7);
}, { passive: true });

topButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
