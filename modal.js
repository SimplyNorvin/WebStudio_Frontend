const modalOpenBtns = document.querySelectorAll('[data-modal-open]');
const modalOverlay = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');

if (modalOverlay) {
  modalOpenBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modalOverlay.classList.remove('modal-overlay--hidden');
      document.body.classList.add('no-scroll');
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      modalOverlay.classList.add('modal-overlay--hidden');
      document.body.classList.remove('no-scroll');
    });
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.add('modal-overlay--hidden');
      document.body.classList.remove('no-scroll');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modalOverlay.classList.add('modal-overlay--hidden');
      document.body.classList.remove('no-scroll');
    }
  });
}
