class Orange {
  constructor() {
    this.x = 25;
    this.y = Math.floor(Math.random() * 600);
    this.width = 50;
    this.height = 50;
    this.image = new Image();
    this.image.src = "./images/orange.png";
    this.speed = 1.2;
    this.directionX = Math.floor(Math.random() * 8) - 4;
    this.directionY = Math.floor(Math.random() * 8) - 4;
  }

  // draw orange
  drawOrange = () => {
    // console.log("orange"); // not logging
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  };

  // move oranges

  moveOrange = () => {
    this.x += this.speed * this.directionX;
    this.y += this.speed * this.directionY;
  };

  // - base for collisions
  orangeWallCollision = () => {
    // console.log("boing"); //-> logging
    if (this.x > canvas.width - this.width) {
      // > is better than === in case of skipping pixels/numbers etc
      this.directionX = -1;
    } // else is uneccesary
    if (this.y > canvas.height - this.height) {
      // 0 + ballSize works but just ballSize looks better
      this.directionY = -1;
    }
    if (this.x < this.width - 50) {
      this.directionX = 1; // direction x is not defined
    }
    if (this.y < this.height - 50) {
      this.directionY = 1;
    }
  };

  // remove orange -> in game
  /*removeOrange = () => {
      if (this.orangeWallCollision = true) {
          
      }
  }*/
}
