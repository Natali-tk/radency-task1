export default function getRefs() {
    return {
        notesContainer: document.querySelector('.notes-container'),
        openModalBtn: document.querySelector('[data-modal-open]'),
        closeModalBtn: document.querySelector('[data-modal-close]'),
        modal: document.querySelector('[data-modal]'),
        form:document.querySelector('.note.form'),
        btnSubmit:document.querySelector('#btnSubmit'),
        summaryContainer:document.querySelector('.summary-container'),
        btnEdit:document.querySelectorAll('[data-edit]'),
        btnDelete:document.querySelectorAll('[data-delete]'),
        btnArchive:document.querySelectorAll('[data-archive]'), 
        archive:document.querySelector('[data-archive-list]'),
        // btnSubmitEdit:document.querySelector('.btn.edit'),
        formEdit:document.querySelector('#edit-form'),
    }
}