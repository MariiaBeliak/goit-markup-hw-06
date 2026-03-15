const burgerBtn = document.querySelector('.burger-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.mobile-menu-close');

burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
});