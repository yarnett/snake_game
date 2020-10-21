// creates a constructor function - research ES6 classes
// class Head {

//   // this is what's called when you use the "new" keyword
//   constructor($el) {
//     this.node = $('<div id="head"></div>');
//     this.currentDirection = 'right';
//     this.SPEED = 500;
//     $el.append(this.node);
//     this.node.css({ top: 0, left: 0 });
//     setTimeout(this.move.bind(this), this.SPEED);
//   }

//   // same as Head.prototype.move = function() {...}
//   move() {
//     let direction = this.currentDirection;
//     let position = this.node.position();

//     if (direction === 'right') {
//       position.left += 50;
//     }

//     this.node.css(position);
//     setTimeout(this.move.bind(this), this.SPEED);
//   }

// }

class Head {
  constructor(el) {
    this.node = document.createElement('div');
    this.node.setAttribute('id', 'head');
    el.appendChild(this.node);

    this.currentDirection = "right";
    this.SPEED = 250;

    this.node.style.top = 0;
    this.node.style.left = 0;

    setTimeout(this.move.bind(this), this.SPEED);
  }

  move() {
    const head = this.node;
    const direction = this.currentDirection;

    let topPosition = Number(head.style.top.replace('px', ''))
    let leftPosition = Number(head.style.left.replace('px', ''))

    if (direction === 'right') {
      head.style.left = `${leftPosition += 50}px`;
    }


    setTimeout(this.move.bind(this), this.SPEED);
  }

}
