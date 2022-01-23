import moment from 'moment';
import getRefs from './refs';
import notes from '../../data.json';
import getNote from '../templates/getNote';
// import getEditNoteModal from '../templates/getEditNoteModal';
import getSummaryNote from '../templates/getSummaryNote';
import getSummaryList from './helpers/getSummaryList';
import { v4 as uuidv4 } from 'uuid';

const refs = getRefs();
let archivedVisibility = false;
let notesList = JSON.parse(window.localStorage.getItem('notes')) ?? notes;

function renderNotesList() {
  notesList.map(note => getNote(note, archivedVisibility));
}
/*Actions*/
////////////////Delete note/////////////////////////
const deleteNote = index => {
  const currentList = notesList.filter((note, i) => i !== index);
  notesList = [...currentList];
  render();
};
const handleDeleteNote = () => {
  const btnDelete = document.querySelectorAll('[data-delete]');
  btnDelete.forEach((element, i) => {
    element.addEventListener('click', e => deleteNote(i, e));
  });
};
///////////////Archive note////////////////////
const archiveNote = index => {
  notesList[index].archive = !notesList[index].archive;
  getSummaryList(notesList);
  render();
};

const handleArchiveNote = () => {
  const btnArchive = document.querySelectorAll('[data-archive]');
  btnArchive.forEach((element, i) => {
    element.addEventListener('click', e => archiveNote(i, e));
  });
};
/////////////////////Edit note/////////////////////////
// const editNote=idx=>{
//    document.body.classList.add('modal-open');
//   refs.modal.classList.remove('is-hidden');
//   const note=document.querySelectorAll('.body-row')[idx];
//   console.log(note, idx,notesList[idx], notesList[idx].id);
//   refs.form.innerHTML = getEditNoteModal(notesList[idx]);
//   document.querySelector('#btn-edit').addEventListener('click',()=>getEditNote(notesList[idx].id));
//   const editItem = document.createElement('tr');
//   editItem.classList.add(`body-row`);
//   note.replaceWith(editItem)
//   render()
// }

// const getEditNote = (editNote,note) => {
//   const name = refs.form.elements[0].value;
//   const category = refs.form.elements[1].value;
//   const content = refs.form.elements[2].value;
//   editNote = {...editNote, name, category, content};
//   document.body.classList.remove('modal-open');
//   refs.modal.classList.add('is-hidden');  
//   render()
// };

// const handleEditNote=()=>{
//   const btnEdit = document.querySelectorAll('[data-edit]');
//   btnEdit.forEach((element, i) => {
//     element.addEventListener('click', e => editNote(i, e));
//   });
// }

//////////////////Add note///////////////////////
const getNewNote = e => {
  e.preventDefault();
  const date = new Date();
  const dateFormat = moment(date).format('MMM DD, YYYY');
  const name = refs.form.elements[0].value;
  const category = refs.form.elements[1].value;
  const content = refs.form.elements[2].value;
  const dates= refs.form.elements[3].value;
    notesList = [
      ...notesList,
      { 
        id: uuidv4(),
        name: name,
        created:`${dateFormat}`,
        category: category,
        content: content,
        dates: dates,
        archived: false,
      },
    ];
    render();
};
const handleAddNote=()=>{
  refs.form.addEventListener('submit', e => getNewNote(e));
}

////////////Render///////////////
const render = () => {
  window.localStorage.setItem('notes', JSON.stringify(notesList));
  let summaryList = getSummaryList(notesList);
  refs.notesContainer.innerHTML = '';
  refs.summaryContainer.innerHTML = '';
  renderNotesList();
  summaryList.forEach(item => getSummaryNote(item));
  handleDeleteNote();
  handleArchiveNote();
  // handleEditNote();
  handleAddNote();
  refs.archive.onclick = () => {
    archivedVisibility = !archivedVisibility;
    render();
  };
};
render();

