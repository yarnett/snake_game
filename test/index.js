if (window.mochaPhantomJS) {
describe('Snake', function() {
  describe('Head', function() {
    var SPEED;
    beforeEach(function() {
      SPEED = head.SPEED;
    });

    afterEach(function() {
      clock.restore();
    });

    it('should move right if right button is pressed', function() {
      console.log('there');
      var oldPosition = head.node.position();
      var e = jQuery.Event( "keydown", { keyCode: 39 } );
      $('body').trigger(e);
      clock.tick(SPEED);
      var newPosition = head.node.position();
      expect(newPosition.top).to.eql(oldPosition.top);
      expect(newPosition.left).to.be.greaterThan(oldPosition.left);
    });

    it('should move left if left button is pressed', function() {
      var oldPosition = head.node.position();
      var e = jQuery.Event( "keydown", { keyCode: 37 } );
      $('body').trigger(e);
      console.log(clock);
      console.log(oldPosition);
      console.log(SPEED);
      clock.tick(10000);
      console.log(clock);
      var newPosition = head.node.position();
      console.log(newPosition);
      expect(newPosition.top).to.eql(oldPosition.top);
      expect(newPosition.left).to.be.lessThan(oldPosition.left);
    });


    it('should move up if up button is pressed', function() {
      var oldPosition = head.node.position();
      var e = jQuery.Event( "keydown", { keyCode: 38 } );
      $('body').trigger(e);
      clock.tick(SPEED);
      var newPosition = head.node.position();
      expect(newPosition.top).to.lessThan(oldPosition.top);
      expect(newPosition.left).to.eql(oldPosition.left);
    });

    it('should move down if down button is pressed', function() {
      var oldPosition = head.node.position();
      var e = jQuery.Event( "keydown", { keyCode: 40 } );
      $('body').trigger(e);
      clock.tick(SPEED);
      var newPosition = head.node.position();
      expect(newPosition.top).to.be.greaterThan(oldPosition.top);
      expect(newPosition.left).to.eql(oldPosition.left);
    });

  });

  describe('Apple', function() {
    var apple;
    var board;
    beforeEach(function() {
      board = $('#board');
      apple = new Apple(board);
    });

    it('should generate an apple within the parameters of the board', function() {
      var board_position = board.position();
      var board_height = board.height();
      var board_width = board.width();
      var apple_position = apple.node.position();
      var apple_height = apple.node.height();
      var apple_width = apple.node.width();

      expect(apple_position.top).to.be.greaterThan(board_position.top);
      expect(apple_position.left).to.be.greaterThan(board_position.left);
      expect(apple_position.top + apple_height).to.be.lessThan(board_position.top + board_height - 2);
      expect(apple_position.left + apple_width).to.be.lessThan(board_position.left + board_width - 2);
    });

    it('should generate an apple randomly on the board', function() {
      var oldPosition = apple.node.position();
      $('#apple').detach();
      var newPosition = new Apple($('#board')).node.position();
      expect(oldPosition).to.not.eql(newPosition);
    });



  });
});
mochaPhantomJS.run();

}