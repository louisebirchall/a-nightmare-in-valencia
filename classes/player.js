class Player {
  constructor() {
    this.x = 750; // before canvas.width -50
    this.y = 300; // before canvas.height / 2
    this.width = 20;
    this.height = 40;
    this.image = new Image();
    this.image.src = "./images/playerfl.PNG"; // change pic for players?
    this.lives = 3;
    //this.lives.image = new Image()
    //this.lives.image.src = "../images/pngaaa.com-10153.png";
  }

  drawPlayer = () => {
    //console.log(this.x, this.y);
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  };

  playerOrangeCollision = (orange) => {
    if (
      this.x < orange.x + orange.width &&
      this.x + this.width > orange.x &&
      this.y < orange.y + orange.height &&
      this.height + this.y > orange.y
    ) {
      // ¡colision detectada!
      //console.log("collision happens");
      return true; //,this.lives--
    }
    return false;
  };

}
