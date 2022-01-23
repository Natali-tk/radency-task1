import categories from '../js/helpers/categories';

export default function renderSummary(item) {
  const iconCategory = categories.find(
    category => category.name === item.category,
  ).icon;
  const summaryContainer = document.querySelector('.summary-container');
  const notesRow = document.createElement('tr');
  notesRow.innerHTML = `
    <td class='body-row__desc'>
        <div class="icon-name">
        <div class='body-row__name-icons'>
        <span class='material-icons name'>${iconCategory}</span>
        </div>
        <span class='body-row__desc name'>${item.category}</span>
        </div>
    </td>
    <td class='body-row__desc'>${item.active}</td>
    <td class='body-row__desc'>${item.archive}</td>
  `;
  notesRow.classList.add('body-row');
  summaryContainer.appendChild(notesRow);
}
