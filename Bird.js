class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage=loadImage("sprites/Smoke.png")
    this.trajectory = []
    // this.body.position.x, this.body.position.y [[13,398],[76,988],[77,133]]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    // vel >10, 200
    //var pos
    if(this.body.velocity.x>10&&this.body.position.x>200){
      var pos = [this.body.position.x, this.body.position.y]
      this.trajectory.push(pos)
    }

    
    //console.log("wow"+this.trajectory)
    for(var i=0; i<this.trajectory.length; i++){
      {image(this.smokeImage, this.trajectory[i][0],this.trajectory[i][1])}
    }
  }
}
