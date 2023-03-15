(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-open-mobile-modal]'),
    closeModalBtn: document.querySelector('[data-close-mobile-modal]'),
    backdrop: document.querySelector('[data-mobile-backdrop]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.backdrop.addEventListener('click', logBackdropClick);

  function toggleModal() {
    refs.backdrop.classList.toggle('header__is-hidden');
  }

  function logBackdropClick() {
    console.log('Це клік в бекдроп');
  }
})();
