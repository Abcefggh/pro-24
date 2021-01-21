
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;

var hammer;
var stone;
var stone2;
var rubberball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    ground = new Ground(400,height,1000,20);
	hammer = new Hammer(100,70);
    stone = new  Stone(500 , 500 , 100,70);


	var options = {
		restitution:0.3,
		
	}
	
    rubberball = Bodies.circle(700,600,20);
	World.add(world,rubberball);
	



  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  Engine.update(engine);


  hammer.display();
  ground.display();
  stone.display();

  ellipseMode(RADIUS);
    ellipse(rubberball.position.x, rubberball.position.y, 20, 20);
  drawSprites();
 
}



