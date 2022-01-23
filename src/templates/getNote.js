import categories from '../js/helpers/categories';

export default function getNote(note, archived) {
  const iconCategory = categories.find(
    category => category.name === note.category,
  ).icon;
  const notesContainer= document.querySelector('.notes-container');
  const notesRow = document.createElement('tr');
  const noteRow = `<td class='body-row__desc'>
      <div class="icon-name">
      <div class='body-row__name-icons'>
      <span class='material-icons name'>${iconCategory}</span>
      </div>
      <span class='body-row__desc name'>${note.name}</span>
      </div>
  </td>
  <td class='body-row__desc'>${note.created}</td>
  <td class='body-row__desc'>${note.category}</td>
  <td class='body-row__desc'>${note.content}</td>
  <td class='body-row__desc'>${note.dates}</td>
  <td>
    <button class='body-row__icons edit' type='button' >
      <span class='material-icons' data-edit>edit</span>
    </button>
  </td>
  <td>
    <button class='body-row__icons' type='button' >
      <span class='material-icons archive' data-archive>archive</span>
    </button>
  </td>
  <td>
    <button class='body-row__icons' type='button'>
      <span class='material-icons' data-delete>delete</span>
    </button>
  </td>`;
  notesRow.innerHTML = noteRow;
    !note.archive
        ? notesRow.classList.add('body-row')
        : notesRow.classList.add('body-row', 'archived')
    if (! archived && note.archive) notesRow.classList.add('visually-hidden')
    notesContainer.appendChild(notesRow)
}

