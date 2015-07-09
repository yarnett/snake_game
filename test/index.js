describe('Snake', function() {
  describe('Head', function() {
    var SPEED;
    
    beforeEach(function() {
      clock = sinon.useFakeTimers();
      head.node.detach();
      head = new Head($('#board'));
      SPEED = head.SPEED;
    });

    afterEach(function() {
      clock.restore();
    });

    function move(direction) {
      var keyCodes = { 'left': 37, 'up': 38, 'right': 39, 'down': 40 };
      $('body').trigger(jQuery.Event("keydown", {keyCode: keyCodes[direction]}));
      clock.tick(SPEED);
    }

    it('should move right if right button is pressed', function() {
      console.log(clock);
      
      var oldPosition = head.node.position();
      move('right');
      var newPosition = head.node.position();
      expect(newPosition.top).to.eql(oldPosition.top);
      expect(newPosition.left).to.be.greaterThan(oldPosition.left);
    });

    it('should move left if left button is pressed', function() {
      // Should not be moving right before moving left
      move('down');
      var oldPosition = head.node.position();
      move('left');
      var newPosition = head.node.position();
      expect(newPosition.top).to.eql(oldPosition.top);
      expect(newPosition.left).to.be.lessThan(oldPosition.left);
    });

    it('should move up if up button is pressed', function() {
      var oldPosition = head.node.position();
      move('up');
      var newPosition = head.node.position();
      expect(newPosition.top).to.lessThan(oldPosition.top);
      expect(newPosition.left).to.eql(oldPosition.left);
    });

    it('should move down if down button is pressed', function() {
      var oldPosition = head.node.position();
      move('down');
      var newPosition = head.node.position();
      expect(newPosition.top).to.be.greaterThan(oldPosition.top);
      expect(newPosition.left).to.eql(oldPosition.left);
    });

    describe('Cannot move backwards', function() {

      it('should not move left if currently moving right', function() {
        var oldPosition = head.node.position();
        move('right');
        var newPosition = head.node.position();
        expect(newPosition.left).to.be.greaterThan(oldPosition.left);
        oldPosition = head.node.position();
        move('left');
        newPosition = head.node.position();
        expect(newPosition.left).to.be.greaterThan(oldPosition.left);
        expect(newPosition.top).to.eql(oldPosition.top);
      });

      it('should not move right if currently moving left', function() {
        var oldPosition = head.node.position();
        move('down');
        move('left');
        var newPosition = head.node.position();
        expect(newPosition.left).to.be.lessThan(oldPosition.left);
        oldPosition = head.node.position();
        move('right');
        newPosition = head.node.position();
        expect(newPosition.left).to.be.lessThan(oldPosition.left);
        expect(newPosition.top).to.eql(oldPosition.top);
      });

      it('should not move up if currently moving down', function() {
        var oldPosition = head.node.position();
        move('down');
        var newPosition = head.node.position();
        expect(newPosition.top).to.be.greaterThan(oldPosition.top);
        oldPosition = head.node.position();
        move('up');
        newPosition = head.node.position();
        expect(newPosition.top).to.be.greaterThan(oldPosition.top);
        expect(newPosition.left).to.eql(oldPosition.left);
      });

      it('should not move down if currently moving up', function() {
        // move('right');
        var oldPosition = head.node.position();
        move('up');
        var newPosition = head.node.position();
        expect(newPosition.top).to.be.lessThan(oldPosition.top);
        oldPosition = head.node.position();
        move('down');
        newPosition = head.node.position();
        expect(newPosition.top).to.be.lessThan(oldPosition.top);
        expect(newPosition.left).to.eql(oldPosition.left);
      });
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
      console.log(board_position);
      var board_height = board.height();
      var board_width = board.width();

      for (var i = 0; i < 10; i ++) {
        apple = new Apple(board);
        var apple_position = apple.node.position();
        var apple_height = apple.node.height();
        var apple_width = apple.node.width();

        console.log(apple_position);

        expect(apple_position.top).to.be.greaterThan(board_position.top);
        expect(apple_position.left).to.be.greaterThan(board_position.left);
        expect(apple_position.top + apple_height).to.be.lessThan(board_position.top + board_height + 2);
        expect(apple_position.left + apple_width).to.be.lessThan(board_position.left + board_width + 2);
      }
    });

    it('should generate an apple randomly on the board', function() {
      var oldPosition = apple.node.position();

      for (var i = 0; i < 10; i ++) {
        $('#apple').detach();
        var newPosition = new Apple(board).node.position();
        console.log("Old position", oldPosition, "New position", newPosition);
        expect(oldPosition).to.not.eql(newPosition);
        oldPosition = newPosition;     
      }
    });
  });
});
mocha.globals();
if (window.mochaPhantomJS) { mochaPhantomJS.run(); }
