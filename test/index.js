if (window.mochaPhantomJS) {
describe('Snake', function() {
  describe('Head', function() {
    var head;
    var clock;
    var SPEED;
    beforeEach(function() {
      clock = sinon.useFakeTimers();
      head = new Head($('#board'));
      SPEED = head.SPEED;
    });

    afterEach(function() {
      clock.restore();
    });

    it('should move right if right button is pressed', function() {
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
      clock.tick(SPEED);
      var newPosition = head.node.position();
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

    xit('should end game over message when snake head touches border', function() {

    });

    xit('head should not be able to move backwards', function() {

    });

  });

  describe('Apple', function() {
    var apple;
    beforeEach(function() {
      apple = new Apple($('#board'));
    });

    it('description', function() {
      // body...
    });

    it('should generate an apple randomly on the board', function() {
      var oldPosition = apple.position();
      var newPosition = new Apple($('#board')).position();
      expect(oldPosition).to.not.eql(newPosition);
    });

    xit('apple should not be place where head is', function() {
      // body...
    });

  });

  describe('Segment', function() {
    it('should add segment when apple is eaten', function() {

    });

  });
});
mochaPhantomJS.run();

}