const canvas = document.querySelector("#my-canvas");

const ctx = canvas.getContext("2d");

let startButton = document.querySelector("#start-btn");
let restartButton = document.querySelector("#restart-btn");
let splashScreen = document.querySelector("#splash-screen");
let gameoverScreen = document.querySelector("#gameover-screen");
let timer = document.querySelector("#timer");
let gameObj;

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
  gameObj.gameLoop();
});

// practicing down here
//a timer
// declare timer
/*
let timerInterval = 0;
let timeString = "";

// the timer itself
startTimer = () => {
  clearInterval(timerInterval);
  let second = 0,
    minute = 0,
    odd = false;

  timerInterval = setInterval(() => {
    odd = !odd;
    if (odd) {
      timer.classList.add("odd");
    } else {
      timer.classList.remove("odd");
    }

    if (minute < 10) {
      timeString += "0" + minute;
    } else {
      timeString += minute;
    }
    if (second < 10) {
      timeString += ":0" + second;
    } else {
      timeString += ":" + second;
    }
    timer.innerHTML = timeString;

    second++;

    if (second == 60) {
      minute++;
      second = 0;
    }
  }, 1000);
};
*/