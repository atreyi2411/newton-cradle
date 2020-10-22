
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
var pendulumRoof;

//function preload()
//{
	
//}

function setup() {
	createCanvas(1100, 600);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	pendulumRoof = new Roof(500,50,500,20);
	
	bobObject1 = new Bob(400, 400, 30);
	bobObject2 = new Bob(430, 400, 30);
	bobObject3 = new Bob(460, 400, 30);
	bobObject4 = new Bob(490, 400, 30);
	bobObject5 = new Bob(520, 400, 30);

	ropeObject1 = new rope(bobObject1.body, pendulumRoof.body, 60, 0);
	ropeObject2 = new rope(bobObject2.body, pendulumRoof.body, 60, 0);
	ropeObject3 = new rope(bobObject3.body, pendulumRoof.body, 60, 0);
	ropeObject4 = new rope(bobObject4.body, pendulumRoof.body, 60, 0);
	ropeObject5 = new rope(bobObject5.body, pendulumRoof.body, 60, 0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
  //drawSprites();
  pendulumRoof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  ropeObject1.display();
  ropeObject2.display();
  ropeObject3.display();
  ropeObject4.display();
  ropeObject5.display();

}



