const nav = document.getElementById('nav');
const topBtn = document.getElementById('top-btn');

// Extra 1: hamburger menu
document.getElementById('menu-btn').addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// Extra 2: dark mode toggle
document.getElementById('theme-btn').addEventListener('click', () => document.body.classList.toggle('dark'));

// Extra 4: back-to-top button appears after scrolling
window.addEventListener('scroll', () => topBtn.classList.toggle('show', window.scrollY > 300));
