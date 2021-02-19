class Paper{
    constructor(x,radius){
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density:1.2,
      }
      this.body=Bodies.circle(x,100,radius,options);
      this.radius=radius;
      World.add(world,this.body);
      this.image=loadImage("paper.png");

    }
    display(){
      var pos =this.body.position;
      imageMode(RADIUS);
      push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        image( this.image,0, 0, this.radius, this.radius);
        pop();
    }
}