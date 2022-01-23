import getRefs from './refs';
const refs=getRefs();

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.btnSubmit.addEventListener('click', toggleModal);
// refs.btnSubmitEdit.addEventListener('click', toggleModal);

function toggleModal() {
  document.body.classList.toggle('modal-open');
  refs.modal.classList.toggle('is-hidden');
}
window.scrollTo({
  top: 2000,
  behavior: "smooth"
});
