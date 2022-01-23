import { v4 as uuidv4 } from 'uuid';

export default function getSummaryList(notesList) {
  let categoryList = [];
  notesList.map(note => {
    const uniqNote = categoryList.find(n => n.category === note.category);
    if (uniqNote) {
      note.archive ? (uniqNote.archive += 1) : (uniqNote.active += 1);
    } else {
      categoryList.push({
        id: uuidv4(),
        category: note.category,
        active: note.archive ? 0 : 1,
        archive: note.archive ? 1 : 0,
      });
    }
  });
  return categoryList;
};
