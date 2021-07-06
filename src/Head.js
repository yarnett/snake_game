class Head {
  constructor(el) {
    this.node = document.createElement('div');
    this.node.setAttribute('id', 'head');
    el.appendChild(this.node);

    this.currentDirection = 'right';
    this.SPEED = 250;

    this.node.style.top = 0;
    this.node.style.left = 0;

    setTimeout(this.move.bind(this), this.SPEED);
  }

  move() {
    const head = this.node;
    const direction = this.currentDirection; // 'right'

    // Current position of the snake
    let topPosition = Number(head.style.top.replace('px', ''));
    let leftPosition = Number(head.style.left.replace('px', ''));

    // Updating the position of the snake
    if (direction === 'right') {
      if (leftPosition >= 650) {
        alert("GAME OVER")
      }
      head.style.left = `${(leftPosition += 50)}px`;
    } else if (direction === 'left') {
      if (leftPosition <= 0) {
        alert("GAME OVER")
      }
      head.style.left = `${(leftPosition -= 50)}px`;
    } else if (direction === 'up') {
      if (topPosition <= 0) {
        alert("GAME OVER")
      }
      head.style.top = `${(topPosition -= 50)}px`;
    } else if (direction === 'down') {
      if (topPosition >= 650) {
        alert("GAME OVER")
      }
      head.style.top = `${(topPosition += 50)}px`;
    }

    setTimeout(this.move.bind(this), this.SPEED);
  }
}

