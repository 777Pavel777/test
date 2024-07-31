(() => {
  const refs = {
    openModalBtn: document.querySelector('#is-open-mobile'),
    closeModalBtn: document.querySelector('#mobile-close-btn'),
    modal: document.querySelector('#mobile-menu'),
    menuLink: document.querySelectorAll('.modal-menu'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.menuLink.forEach(link =>
    link.addEventListener('click', scrollToSection)
  );

  function toggleModal() {
    refs.modal.classList.toggle('is-open-menu');
    document.body.classList.toggle('no-scroll');
  }

  function scrollToSection(e) {
    e.preventDefault();
    toggleModal();
    const targetId = this.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      const yOffset = 0;
      const y =
        targetSection.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
})();
