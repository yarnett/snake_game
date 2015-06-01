function Head() {
  this.position = $('<div id="head"></div>');
  this.currentDirection = 'right';
  $('body').append(this.position);
  this.position.css({top: 100, left: 100});
  setTimeout(this.move.bind(this), 1000);
}

Head.prototype.move = function() {
  var direction = this.currentDirection;
  console.log(direction);
  var position = this.position.position();
  if (direction === 'left') {
    position.left -= 50;
  }
  if (direction === 'right') {
    position.left += 50;
  }
  if (direction === 'up') {
    position.top -= 50;
  }
  if (direction === 'down') {
    position.top += 50;
  }
  this.position.css(position);
  setTimeout(this.move.bind(this), 1000);

}