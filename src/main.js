document.addEventListener('DOMContentLoaded', (e) => {
  const body = document.querySelector('body');
  const board = document.querySelector('#board');

  const head = new Head(board);
  new Apple(board);


  body.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowLeft') {
      console.log('pressed left');
      head.currentDirection = 'left';
    }
  })
});