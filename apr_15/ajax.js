'use strict';

(function() {
  var images;

  var saveToLocalStorage = function(data) {
    localStorage.setItem('ajaxData', JSON.stringify(data));
  };

  var renderImages = function(images) {
    var $main = $('#content');

    images.forEach(function(img) {
      $main.append('<img src="' + img.link + '"></img>');
    });
    saveToLocalStorage(images);  
  };

 
  $.ajax({
    url: 'https://api.imgur.com/3/album/HKVED.json',
    method: 'GET',
    headers: {
      'Authorization': 'Client-ID 154a70abf0448d1'
    }
  })
  .done(function(res) {
    images = res.data.images  
    renderImages(images);
  })
  .fail(function(err) {
    console.log(err);
  });
})();
