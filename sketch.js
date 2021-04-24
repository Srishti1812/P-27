
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){}

function setup() {
	createCanvas(360, 400);

	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(100, 350, 30)
	bob2 = new Bob(140, 350, 30)
	bob3 = new Bob(180, 350, 30)
	bob4 = new Bob(210, 350, 30)
	bob5 = new Bob(260, 350, 30)

	roof = new Ground(200, 70, 500, 20)

	rope1 = new Rope(bob1.body, roof.body, -70*2, 0)
	rope2 = new Rope(bob2.body, roof.body, -40*2, 0)
	rope3 = new Rope(bob3.body, roof.body, -10*2, 0)
	rope4 = new Rope(bob4.body, roof.body, 20*2, 0)
	rope5 = new Rope(bob5.body, roof.body, 50*2, 0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();
  
  drawSprites();
 
}





