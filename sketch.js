
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	groundSprite=createSprite(width/2,height=35,width=10);
	groundSprite.shapeColour ="yellow";

	Engine.run(engine);

	fill("yellow");
	rectMode(CENTER);
	ground = Bodies.rectangle(width/2, 500, width, 10 , {isStatic:true} );

 	World.add(world, ground);

	 ground = new Ground(400,500,800,20);
	 paper=new Paper(300,70);
	 box1 = new Dustbin(700,450,140,100);
	 
	 
}


function draw() {
  rectMode(CENTER);
  background("pink");
  paper.display();
  ground.display();
  box1.display();
  
  drawSprites();
  
 
}

function keyPressed(){
     if (keyCode===UP_ARROW){
		 Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	 }

}




