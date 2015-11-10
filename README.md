#Snake

##Summary
Snake is one of the first mobile games in development. We will be creating a browser based version using our understanding of OOP and DOM manipulation. This will be your first dynamic, single-page app. It's a game, so have some fun and get creative once the basic functionality is created!

##Learning objectives
  - Using JavaScript to change the look and behavior of the DOM
  - React to user input
  - Utilize object-oriented programming

### Bower
![](https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSqF8x9hAdXchxUADO3Z_-b02lYO-Lgkkx5YJ1x8hxM_0umjaTnQmIZGaNo8w)

Bower is a tool to manage front end dependencies.
Bower can be used to download and install different javascript libraries and css frameworks. Its nice because you can **explicitly** define what versions of things you need; that way in the future, if that code changes when it updates to a new version, your code doesnt break.

### NPM
![](https://www.npmjs.com/static/images/npm-logo.svg)

npm stands for **N**ode **P**ackage **M**anager.
It is a way to manage and install your **Server**-side dependencies. We'll get more into this later in the course because there is some technicalities and overlap but for now, `bower` is for client side, `npm` is for server.

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

The tests for Snake are meant as a way to provide you a definite path through the initial stages of the project, but they do not test all the possible ways one could implement it. It's very possible you'll find a solution that doesn't pass these tests. If you can't pass a test but you think your solution works then just let us know.

##Challenges

### Building Snake

1. Three classes have been provided to you

    - Head
    - Body
    - Apple

These three classes exist in the **global scope**. They are pieces of code that we want to use in our other files: to do this, we declare them without the `var` in their respective files.
It's important that you know what you're doing if you put things in the global scope! It is a bad idea to clutter the global scope up so notice how we explicitly define only 3 things that we want in the global scope

1. Head Class

    - [ ] make the head of the snake be able to turn based on the arrow keys
    - [ ] when the head of the snake reaches a border, end the game

1. Apple Class

    - [ ] the apple should appear randomly on the screen
    - [ ] the apple should appear within the size of the board
    - [ ] remove the apple when the head of the snake reaches the apple
    - [ ] another apple should appear on the screen
    - [ ] the apple should not appear on the snake

##Extension Challenges

1. Head Class
    - [ ] the head of the snake should not be able to move backwards

1. : Body Class
    - [ ] add a segment to the snake when the head of the snake reaches an apple
    - [ ] end the game when the snake runs into its own segment
