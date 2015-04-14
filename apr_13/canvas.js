'use strict';

(function() {
  var squares = [];

  var Square = function(x, y, size) {
    this.x = x;
    this.y = y;
    this.velX = Math.random();
    this.velY = Math.random();
    this.size = size;
  };

  Square.prototype.update = function(canvas) {
    if (this.x + this.size + this.velX < canvas.width && this.x + this.velX > 0) {
      this.x = this.x + this.velX;
    } else {
      var sign = this.velX / Math.abs(this.velX);
      this.velX = Math.abs(this.velX) + Math.random();
      this.velX =  this.velX * sign * -1;
    }

    if (this.y + this.size + this.velY < canvas.height && this.y + this.velY > 0) {
      this.y = this.y + this.velY;
    } else {
      var sign = this.velY / Math.abs(this.velY);
      this.velY = Math.abs(this.velY) + Math.random();
      this.velY = this.velY * sign * -1;
    }

  };

  Square.prototype.draw = function(context) {
    context.fillStyle = "white";
    context.fillRect(this.x, this.y, this.size, this.size);
  };


  var canvas1 = document.getElementById('canvas1');
  var context = canvas1.getContext('2d');

  for(var i = 0; i < 10000; i++) {
    squares.push(new Square(Math.random() * canvas1.width, Math.random() * canvas1.height, 2));
  }

  var blank = function(context, canvas) {
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
  }; 
 
  setInterval(function() {
    blank(context, canvas1);
    squares.forEach(function(square) {
      square.update(canvas1);
      square.draw(context);
    });
  }, 10);
})();
