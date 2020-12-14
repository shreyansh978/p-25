
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Ground1;
var dustbin1,dustbin2,dustbin3;
var paper1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    Ground1 = new Ground(600,600,1200,20);
	
	
	paper1= new Paper(50,540,20,100,5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Ground1.display();
  
  
  paper1.display();
  jump();
  drawSprites();
 
}

function jump(){

     if(keyCode === UP_ARROW){
      
      Matter.Body.applyForce(paper1.body,paper1.body.position,{x:1,y:-1});
       
	 }	
}

