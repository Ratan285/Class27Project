
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof, rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700); 

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(415,150,700,70);

    bobObject1 = new Bob(140,600);
	bobObject2 = new Bob(280,600);
	bobObject3 = new Bob(420,600);
	bobObject4 = new Bob(560,600);
	bobObject5 = new Bob(700,600);

	rope1 = new Rope(bobObject1.body, roof.body, -280, 0);
	rope2 = new Rope(bobObject2.body, roof.body, -140, 0);
	rope3 = new Rope(bobObject3.body, roof.body, 0, 0);
	rope4 = new Rope(bobObject4.body, roof.body, 140,0, 0);
	rope5 = new Rope(bobObject5.body, roof.body, 280, 0);

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(255);

  push();
  textSize(30);
  text(mouseX+","+" "+ mouseY, 100,100);
  pop();

  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
}
function keyPressed(){
if(keyCode = 38){
Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:200,y:-200})
}




}


