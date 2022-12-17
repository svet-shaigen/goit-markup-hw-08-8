(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
      modalList: document.querySelector('.menu-list'),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.modalList.addEventListener('click', removeModal);

    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      refs.body.classList.toggle('no-scroll');
    }
    function removeMenu() {
      refs.modal.classList.add('is-hidden');
      refs.body.classList.remove('no-scroll');
    }
  })();