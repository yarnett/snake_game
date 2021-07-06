document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body'); // 
  const board = document.querySelector('#board');

  const head = new Head(board);
  new Apple(board);

  body.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowLeft') {
      // Regardless of the current direction, we're setting the new direction to be left.
      if (head.currentDirection === 'right') {
        return;
      }
      head.currentDirection = 'left';
    } else if (e.code === 'ArrowRight') {
      if (head.currentDirection === 'left') {
        return;
      }
      head.currentDirection = 'right';
    } else if (e.code === 'ArrowDown') {
      if (head.currentDirection === 'up') {
        return;
      }
      head.currentDirection = 'down';
    } else if (e.code === 'ArrowUp') {
      if (head.currentDirection === 'down') {
        return;
      }
      head.currentDirection = 'up';
    }
  });
});
