
export default function getEditNote(note){
    return `
    <form class="note form" id="#edit-form">
      <input
        type="text"
        name="name"
        class="note form__input"
        placeholder="Name"
        value=${note.name}
        id="name"
        required
      /> 
      <select
        name="category"
        class="note form__select"
        id="category"
        value=${note.category}
        placeholder="Category"
      >
        <option  value="Task">Task</option>
        <option  value="Random Thought">Random Thought</option>
        <option  value="Idea">Idea</option>
        <option  value="Quote">Quote</option>
      </select>
      <input
        type="text"
        name="content"
        class="note form__input"
        placeholder="Content"
        id="content"
        value=${note.content}
        required
      />
      <input
        type="text"
        name="dates"
        class="note form__input"
        placeholder="Dates format DD/MM/YYYY"
        value=${note.dates}
      />
      <button class="btn edit" id="btn-edit" type="submit">Edit note</button>
    </form>`;
  
}