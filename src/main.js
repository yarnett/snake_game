// head out in global scope for testing purposes
$(document).ready(function() {
  head = new Head($('#board'));
  var apple = new Apple($('#board'));

  $('body').on('keydown', function(e) {
    if (e.keyCode === 37) {
      console.log('pressed left');
      head.currentDirection = 'left';
    }
  });
});
