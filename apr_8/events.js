(function() {
  var Note = window.Note;
  var noteList = document.getElementById('notes-list');
  var noteForm = document.getElementById('new-note-form');
  var clearNotesButton = document.getElementById('clear-all-notes');
  var noteData = [];

  var renderAllNotes = function() {
    noteList.innerHTML = '';
    noteData.forEach(function(note) {
      noteList.appendChild(note.render());
    });
  };

  var handleNoteFormSubmit = function(event) {
    event.preventDefault();

    if (!event.target.note.value) {
      return alert('note cannot be blank');
    }

    var newNote = new Note(event.target.note.value, event.target.author.value);
    event.target.note.value = null;
    event.target.author.value = null;
    noteData.push(newNote);
    renderAllNotes();
  };

  noteForm.addEventListener('submit', handleNoteFormSubmit);
  clearNotesButton.addEventListener('click', function() {
    noteList.innerHTML = '';
    noteData = []; 
  });
})();
