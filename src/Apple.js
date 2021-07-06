class Apple {
  constructor(el) {
    this.node = document.createElement('img');
    this.node.setAttribute('id', 'apple');
    this.node.setAttribute('src', 'src/assets/apple.jpg');

    el.appendChild(this.node);

    //Randomize position of apple node
    const randomX = Math.floor(Math.random() * 14) * 50;
    const randomY = Math.floor(Math.random() * 14) * 50;

    this.node.style.left = `${randomX}px`
    this.node.style.top = `${randomY}px`;
  }
}
