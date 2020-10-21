class Apple {
  constructor(el) {
    this.node = document.createElement('img');
    this.node.setAttribute('id', 'apple');
    this.node.setAttribute('src', 'src/assets/apple.jpg');

    el.appendChild(this.node);

    this.node.style.left = 300;
    this.node.style.top = 300;
  }
}