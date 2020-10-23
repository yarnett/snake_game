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
