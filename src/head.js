console.log('declrae');
function Head($el) {
  this.node = $('<div id="head"></div>');
  this.currentDirection = 'right';
  this.SPEED = 500;
  $el.append(this.node);
  this.node.css({top: 0, left: 0});

  setTimeout(this.move.bind(this), this.SPEED);

  $('body').on('keydown',function(e) {
    if (e.keyCode === 37) {
      this.currentDirection = 'left';

    }
    if (e.keyCode === 39) {
      this.currentDirection = 'right';

    }
    if (e.keyCode === 38) {
      this.currentDirection = 'up';

    }
    if (e.keyCode === 40) {
      this.currentDirection = 'down';
    }
  }.bind(this));
}

Head.prototype.move = function() {
  var direction = this.currentDirection;
  var position = this.node.position();
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
  this.node.offset(position);
  setTimeout(this.move.bind(this), this.SPEED);

}