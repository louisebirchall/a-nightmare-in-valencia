class Game {
  constructor() {
    this.background = new Image();
    this.background.src = "../images/la playa.jpg";
    this.player = new Player();
    this.orangesArr = [new Orange(), new Orange(), new Orange()];
    this.gameHeight = 600;
    this.gameWidth = 800;
    this.isGameOn = true;
    this.timerInterval;
  }

  removeOrange = (orange) => {
    const index = this.orangesArr.indexOf(orange);
    if (index !== -1) {
      this.orangesArr.splice(index, 1);
    }
  };

  lifeLost = () => {
    if (this.playerOrangeCollision === true) {
      this.player.lives -= 1; // or -1? I think -- may be better
      console.log("lives -1");
    }
  };

  // now for the oranges
  drawOranges = () => {
    //let orangeAppear = new Orange();
    //console.log("new orange"); // -> logging

    //this.orangeArr.push(orangeAppear);
    //console.log("push orange"); //-> logging

    this.orangesArr.forEach((orange) => orange.drawOrange());
  };

  spawnOranges = () => {
    // *** if the array is empty

    if (
      !this.orangesArr.length ||
      this.orangesArr[this.orangesArr.length - 1].y === canvas.width / 2
    ) {
    }

    // 1 create an orange - done above in draw oranges

    // 2 add to the array - done above in draw oranges

    // 3 put it in a random position -> in orange

    // 5* make it dissapear after x seconds
  };

  gameOverCheck = () => {
    if (this.player.lives < 1) {
      console.log("gameover check");
      this.isGameOn = false;
      canvas.style.display = "none";
      gameoverScreen.style.display = "flex";
    }
  };

  startTimer = () => {
    clearInterval(this.timerInterval);
    
    let timeString = "";
    let second = 0,
      minute = 0,
      odd = false;

    this.timerInterval = setInterval(() => {
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

  gameLoop = () => {
    // 1 clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //console.log("boo!")

    // 2 movement of elements or other actions
    this.orangesArr.forEach((eachOrange) => {
      eachOrange.moveOrange();
    });
    this.orangesArr.forEach((eachOrange) => {
      eachOrange.orangeWallCollision();
    });
    this.orangesArr.forEach((eachOrange) => {
      if (this.player.playerOrangeCollision(eachOrange)) {
        // this orange, so 'eachOrange' must be removed from the array
        this.removeOrange(eachOrange);
      }
    });
    this.lifeLost();
    this.gameOverCheck();
    this.startTimer();

    // filter out oranges

    // 3 drawing elements
    ctx.drawImage(this.background, 0, 0, this.gameWidth, this.gameHeight);
    this.player.drawPlayer();
    //this.spawnOranges(); //-> will make thousands of oranges
    this.drawOranges();
    // 4 request animation frame
    if (this.isGameOn) {
      requestAnimationFrame(this.gameLoop);
    }
  };

  setControls = () => {
    window.addEventListener("keydown", (event) => {
      //console.log(event.code)
      if (
        event.code === "ArrowDown" &&
        this.player.y + this.player.height < canvas.height
      ) {
        this.player.y += 25;
      } else if (event.code === "ArrowUp" && this.player.y > 0) {
        //console.log("arrow up");
        this.player.y -= 25;
      } else if (event.code === "ArrowLeft" && this.player.x > 0) {
        this.player.x -= 25;
      } else if (
        event.code === "ArrowRight" &&
        this.player.x + this.player.width < canvas.width
      ) {
        this.player.x += 25;
      }
    });
  };
}
