
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Dustbinwall1,Dustbinwall2,Dustbinwall3;
var ground;
var Paperball;

function preload()
{
	
}

function setup() {
	var canvas =createCanvas(1200,400);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	ground=new Ground(600,390,1200,20);

	Paperball=new Paper(300,200,30,30);

	Dustbinwall1=new Dustbin(781,330,20,100);
	Dustbinwall2=new Dustbin(1000,330,20,100);
	Dustbinwall3=new Dustbin(890.2,370,200,20);


	Engine.run(engine);
  
}


function draw() {

	background(0);  
	Engine.update(engine);
  
  	ground.display();
	Paperball.display();
	Dustbinwall1.display();
	Dustbinwall2.display();
	Dustbinwall3.display();
  	drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
	   Matter.Body.applyForce(Paperball.body,Paperball.body.position,{x:35,y:-35});
	}

}


