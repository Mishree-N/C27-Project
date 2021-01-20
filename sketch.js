//constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;


//variables
var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	//create canvas
	createCanvas(500, 400);
	//make engine and world
	engine = Engine.create();
	world = engine.world;

	var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
          width: 1200,
          height: 700,
          wireframes: false
        }
      });


	//create roof
	roof=new Roof();

	//create bobs
	bob1=new Bob(120,270);
	bob2=new Bob(175,270);
	bob3=new Bob(230,270);
	bob4=new Bob(285,270);
	bob5=new Bob(340,270);

	//create ropes
	var bobDiameter = 55;
	rope1=new Rope(bob1.body, roof.body, -bobDiameter*2.2, 0);
	rope2=new Rope(bob2.body, roof.body, -bobDiameter*1.2, 0);
	rope3=new Rope(bob3.body, roof.body, -bobDiameter*0.2, 0);
	rope4=new Rope(bob4.body, roof.body, bobDiameter*0.8, 0);
	rope5=new Rope(bob5.body, roof.body, bobDiameter*1.8, 0);

	//run the engine
	Engine.run(engine);
	Render.run(render);

}


function draw() {
	//make rectmode center 
	rectMode(CENTER);
	//make background grey
	background("white");

	//display all bodies
	roof.display();

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

}

function keyPressed() {

	//when up arrow jey is pressed,
	if (keyCode === UP_ARROW) {

		//move bob1 like newton's cradle
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

	}
}


