function Head($el) {
  this.node = $('<div id="head"></div>');
  this.currentDirection = 'right';
  this.SPEED = 500;
  $el.append(this.node);
  this.node.css({top: 0, left: 0});

  setTimeout(this.move.bind(this), this.SPEED);

}

Head.prototype.move = function() {
  var direction = this.currentDirection;
  var position = this.node.position();
  if (direction === 'right') {
    position.right += 50;
  }

  this.node.offset(position);
  setTimeout(this.move.bind(this), this.SPEED);

}