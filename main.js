const canvas = document.querySelector("#my-canvas");

const ctx = canvas.getContext("2d");

let startButton = document.querySelector("#start-btn");
let restartButton = document.querySelector("#restart-btn");
let splashScreen = document.querySelector("#splash-screen");
let gameoverScreen = document.querySelector("#gameover-screen");
let finalScore = document.querySelector("#final-score");

// Event listeners
startButton.addEventListener("click", () => {
  canvas.style.display = "block";
  splashScreen.style.display = "none";
  gameObj = new Game();
  gameObj.setControls();
  gameObj.gameLoop();
});

restartButton.addEventListener("click", () => {
  canvas.style.display = "block";
  gameoverScreen.style.display = "none";
  gameObj = new Game();
  gameObj.setControls();
  gameObj.gameLoop();
});
