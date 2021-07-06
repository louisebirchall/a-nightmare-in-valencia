M1 Project - A Nightmare In Valencia.

Description

This is the game I'm planning to create for the M1 project.

Against the background of a lovely Valencian beach, a player is suddenly attacked by a giant orange, followed by more giant oranges.
The player has to run around escaping the errant citrus for as long as possible.


MVP (DOM, Canvas)

- The game has a player who moves in two (four?) directions
- An orange appears from the sides and bounces off the walls
- More oranges appear over time
- Each orange is on screen for x(to be decided) number of seconds
- The player has to avoid the oranges for as long as possible
- Game over in three collisions


Backlog

Everything bar initial setup at time of writing


Data structure

main.js
buildSplashScreen () {}
buildGameScreen () {}
buildGameOverScreen () {}

game.js
Game () {}
checkCollisions () {}
addOrange () {}
clearCanvas () {}
updateCanvas () {}
drawCanvas () {}
GameOver () {}

player.js
Player () { this.x; this.y; this.direction; this.size }
draw () {}
move () {}
checkScreenCollision () {}

orange.js
Oranges () { this.x; this.y; this.direction; this.size }
draw () {}
move () {}
checkCollisionButton () {}

// if possible chioce of player, add lives, add timer, add score, add high score screen to game over screen


States y States Transitions
Definition of the different states and their transition (transition functions)

splashScreen
gameScreen
gameOverScreen

Task

main - buildDom
main - buildSplashScreen
main - addEventListener
main - buildGameScreen
main - buildGameOverScreen
game - startLoop
game - buildCanvas
game - updateCanvas
game - drawCanvas
orange - draw
orange - move
game - addOrange
player - draw
player - move
game - addPlayer
game - checkCollision
game - GameOver
game - addEventListener

Additional Links
Trello
Link url

Slides
Link Slides.com