class Game {
  constructor() {
    this.background = new Image();
    this.background.src = "./images/la playa.jpg";
    this.player = new Player();
    this.orangesArr = [];
    this.gameHeight = 600;
    this.gameWidth = 800;
    this.isGameOn = true;
    this.seconds = 0;
    this.orangeGenerationSpeed = 8000;
    this.levelUpSpeed = 12000;
  }

  removeOrange = (orange) => {
    const index = this.orangesArr.indexOf(orange);
    if (index !== -1) {
      this.orangesArr.splice(index, 1);
    }
  };

  generateOrange = () => {
    this.orangesArr.push(new Orange());
  };

  drawSeconds = () => {
    ctx.font = "30px Arial";
    ctx.fillText(this.seconds, 35, 60);
    ctx.fillStyle = "#ed1667";
    ctx.font = "30px Arial";
    ctx.fillText("TIME", 15, 30);
  };

  drawLives = () => {
    ctx.font = "30px Arial";
    ctx.fillStyle = "#ed1667";
    ctx.fillText(this.player.lives, 740, 60);
    ctx.font = "30px Arial";
    ctx.fillText("LIVES", 705, 30);
  };

  // now for the oranges
  drawOranges = () => {
    this.orangesArr.forEach((orange) => orange.drawOrange());
  };

  gameOverCheck = () => {
    console.log("gameover check", this.player.lives);
    if (this.player.lives < 1) {
      this.isGameOn = false;
      canvas.style.display = "none";
      gameoverScreen.style.display = "block";
      (finalScore.innerText = "TIME BEFORE JUICING: " + this.seconds + "s");
    }
  };

  gameLoop = (
    fixedTimestamp = 0,
    orangesTimestamp = 0,
    levelUpTimestamp = 0
  ) => {
    // 1 clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

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
        this.player.lives--;
        this.gameOverCheck();
      }
    });

    // 3 drawing elements
    ctx.drawImage(this.background, 0, 0, this.gameWidth, this.gameHeight);
    this.player.drawPlayer();
    this.drawSeconds();
    this.drawLives();
    //this.spawnOranges(); //-> will make thousands of oranges
    this.drawOranges();

    // 4 request animation frame
    if (this.isGameOn) {
      requestAnimationFrame((timestamp) => {
        //console.log(this.seconds);
        if (timestamp - fixedTimestamp > 1000) {
          this.seconds++;
          fixedTimestamp = timestamp;
        }
        if (timestamp - orangesTimestamp > this.orangeGenerationSpeed) {
          this.generateOrange();
          orangesTimestamp = timestamp;
        }
        if (timestamp - levelUpTimestamp > this.levelUpSpeed) {
          this.orangeGenerationSpeed *= 0.5;
          levelUpTimestamp = timestamp;
        }
        this.gameLoop(fixedTimestamp, orangesTimestamp, levelUpTimestamp);
      });
    }
  };

  setControls = () => {
    window.addEventListener("keydown", (event) => {
      //console.log(event.code)
      if (
        event.code === "ArrowDown" &&
        this.player.y + (this.player.height + 20) < canvas.height // I don't get how to stop them going off the ege to the right and bottom
      ) {
        this.player.y += 30;
      } else if (event.code === "ArrowUp" && this.player.y > 0) {
        //console.log("arrow up");
        this.player.y -= 30;
      } else if (event.code === "ArrowLeft" && this.player.x > 0) {
        this.player.x -= 30;
      } else if (
        event.code === "ArrowRight" &&
        this.player.x + this.player.width + 10 < canvas.width
      ) {
        this.player.x += 30;
      }
    });
  };
}
