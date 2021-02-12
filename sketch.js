//Creating an world, engine, and bodies.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    hammer = new Hammer(100,1000,70,100);
    plane = new Plane(600,height,1200,20);
    stone = new Stone(500,800,300,450);
	
  
}


function draw() {
  background("lightBlue");
  
  hammer.display();
  plane.display();
  stone.display();
}



