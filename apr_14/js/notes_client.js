'use strict';

$(function() {
  var notesStorage = JSON.parse(window.localStorage.getItem('notes')) || [];

  var $noteList = $('#note-list');

  notesStorage.forEach(function(note) {
    $noteList.append('<li>' + note.author + ': ' + note.noteBody + '</li>');
  });

  $('#new-note-form').children('input').change(function(e) {
    $(this).removeClass('invalid');
    $(this).addClass('dirty');
    
    if (e.target.value.length < 1)
      $(this).addClass('invalid');

    if ($(this).attr('class').indexOf('invalid') !== -1) {
      $('#create-note').attr('disabled', true);
    } else {
      $('#create-note').attr('disabled', false);
    }
  });

  $('#new-note-form').submit(function(e) {
    e.preventDefault();

    var newNote = {author: e.target['new-note-author'].value , noteBody: e.target['new-note-body'].value };
    notesStorage.push(newNote);
    window.localStorage.setItem('notes', JSON.stringify(notesStorage));

    $('#note-list').append('<li>' + newNote.author + ': ' + newNote.noteBody + '</li>');
    e.target['new-note-body'].value = '';
    e.target['new-note-author'].value = '';
  });
});
