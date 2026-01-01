const mobileBtn = document.querySelector('[data-mobile-toggle]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
const closeBtn = document.querySelector('[data-mobile-close]');

if (mobileBtn && mobileMenu) {
  mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
  });
}

if (closeBtn && mobileMenu) {
  closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  });
}
