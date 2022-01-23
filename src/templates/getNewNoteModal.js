export default function getNewNoteModal(){
  return `
    <form class="note form" id="note-form">
      <input
        type="text"
        name="name"
        class="note form__input"
        placeholder="Name"
        autocomplete="off"
        id="name"
        required
      /> 
      <select
        name="category"
        class="note form__select"
        id="category"
        placeholder="Category"
        autocomplete="off"
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
        autocomplete="off"
        id="content"
        required
      />
      <input
        type="text"
        name="dates"
        class="note form__input"
        placeholder="Dates format DD/MM/YYYY"
        pattern="[0-9]{2}\[0-9]{2}\[0-9]{4}"
        autocomplete="off"
        id="dates"
      />
      <button class="btn" id="btn-submit" type="submit">Add note</button>
    </form>>`;
  

}