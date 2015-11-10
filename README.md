#Snake

##Summary
Snake is one of the first mobile games in development. We will be creating a browser based version using our understanding of OOP and DOM manipulation.

###Learning Goals
- Understand how to manipulate the DOM
- Solidify grasp of OOP

##Getting Started

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

##Testing
Previous, we ran tests in the browser (we opened an index.html). In production though, we often run test in the terminal. To run tests in the terminal for this challenge, type the following code:
````
npm test
````

##Challenges
1. Three classes have been provided to you

    - Head
    - Body
    - Apple

1. Head Class

    -[] make the head of the snake be able to turn based on the arrow keys
    -[] when the head of the snake reaches a border, end the game

1. Apple Class

    -[] the apple should appear randomly on the screen
    -[] the apple should appear within the size of the board
    -[] remove the apple when the head of the snake reaches the apple
    -[] another apple should appear on the screen
    -[] the apple should not appear on the snake

##Extension Challenges

1. Head Class
    -[]: the head of the snake should not be able to move backwards

1. : Body Class
    -[] add a segment to the snake when the head of the snake reaches an apple
    -[] end the game when the snake runs into its own segment