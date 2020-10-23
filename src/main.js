// TODO: could do no-undef false or specify globals in config for Head Apple and Body
// TODO: specify jquery env or take out jquery?
$(document).ready(() => {
  const head = new Head($('#board'));
  const apple = new Apple($('#board'));

  $('body').on('keydown', (e) => {
    if (e.keyCode === 37) {
      console.log('pressed left');
      head.currentDirection = 'left';
    }
  });
});
