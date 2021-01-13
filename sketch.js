const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1350, 600);
    engine = Engine.create();
	world = engine.world;
    var options={

		'isStatic' : true
   
		
	}
	roof = Bodies.rectangle(625, 100, 300, 40, options);
	World.add(world, roof);
	bob1 = new Bob(510, 400, 25, 25);
	bob2 = new Bob(570, 400, 25, 25);
	bob3 = new Bob(630, 400, 25, 25);
	bob4 = new Bob(690, 400, 25, 25);
	bob5 = new Bob(750, 400, 25, 25);
	rope1 = new Rope(bob1.body, roof, -100, 0);
	rope2 = new Rope(bob2.body, roof, -50, 0);
	rope3 = new Rope(bob3.body, roof, 0, 0);
	rope4 = new Rope(bob4.body, roof, 50, 0);
	rope5 = new Rope(bob5.body, roof, 100, 0);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  background("green");
  rectMode(CENTER);
  rect(roof.position.x, roof.position.y, 300, 40);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}
function keyPressed()
{
	if (keyDown === UP_ARROW)
	{
		Body.applyForce(bob1.body, bob1.body.position, {x : -85, y : -85});
    }
}



