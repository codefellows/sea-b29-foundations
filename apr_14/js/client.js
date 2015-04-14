'use strict';

$(function() {
  $('#content').append('<h1>Hello From jQuery</h1>');

  $('#simple-list').children().each(function(index) {
    $(this).html('<em>List Number: ' + (index + 1) + '</em>');
  });
});
