(function() {
  var Note = function(noteBody, author) {
    this.noteBody = noteBody;
    this.author = author || 'Anonymous';
  };

  Note.prototype.render = function() {
    var el = document.createElement('li');
    el.innerHTML = this.author + ': ' + this.noteBody; 
    return el;
  };

  window.Note = Note;
})();
