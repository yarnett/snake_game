#Snake

##Summary
Snake is one of the first mobile games in development. We will be creating a browser based version using our understanding of OOP and DOM manipulation.

##How do I get started?

1. First, load the external dependencies with the following commands:
````
npm install
````
and
````
bower install
````
Note: If you do not have bower installed, then run
````
npm install -g bower
````
**Dependencies are files that other developers have written that you plan to use in your code.**

1. Three classes have been provided to you

    - Head
    - Body
    - Apple

1. Head Class

    - make the head of the snake be able to turn based on the arrow keys
    - when the head of the snake reaches a border, end the game (Note: when the game ends the head should stop moving!)
    - **BONUS**: the head of the snake should not be able to move backwards

1. Apple Class

    - the apple should appear randomly on the screen
    - the apple should appear within the size of the board
    - remove the apple when the head of the snake reaches the apple
    - another apple should appear on the screen
    - the apple should not appear on the snake


1. **BONUS**: Body Class

    - add a segment to the snake when the head of the snake reaches an apple
    - end the game when the snake runs into its own segment

##How do I test if my answer is correct?
You have two options for testing your code for this challenge: either open the ./test/index.html file in your browser, or enter the following terminal command from this folder:
````
npm test
````
The tests for Snake are meant as a way to provide you a definite path through the initial stages of the project but they do not test all the possible ways one could implement it. It's very possible you'll find a solution that doesn't pass these tests. If you can't pass a test but you think your solution works then just let us know.