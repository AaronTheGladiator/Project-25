var paper, ground, side1, side2, side3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {

	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	
	paper = new Paper();

	ground = new Ground();
	
	side1 = new Trash(600,685,200,10);
	
	side2 = new Trash(505,630,10,100);

	side3 = new Trash(695, 630, 10,100);
	
}

function draw() {

  rectMode(CENTER);

  background(100);
  
  paper.display();
  ground.display();
  side1.display();
  side2.display();
  side3.display(); 

  drawSprites();

}

function keyPressed() {

	if (keyCode ===UP_ARROW) {
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:600,y:-600});
	}
	
}

