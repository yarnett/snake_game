class Head { // creates a constructor function

  constructor($el) { // this is what's called when you use the "new" keyword
    this.node = $('<div id="head"></div>');
    this.currentDirection = 'right';
    this.SPEED = 500;
    $el.append(this.node);
    this.node.css({ top: 0, left: 0 });
    setTimeout(this.move.bind(this), this.SPEED);
  }

  move() {  // same as Head.prototype.move = function() {...}
    var direction = this.currentDirection;
    var position = this.node.position();
    if (direction === 'right') {
      position.left += 50;
    }
    this.node.offset(position);
    setTimeout(this.move.bind(this), this.SPEED);
  }

}
