var helicopterIMG, helicopter, package,packageIMG;
var packageBody,ground;
var r1,r2,r3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	r1= new Rct(400,660,200,20);
	r2= new Rct(300,620,20,100);
	r3= new Rct(500,620,20,100);



    
	package=createSprite(width/2, 80, 10,10);
	package.addImage(packageIMG)
	package.scale=0.2

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterIMG)
	helicopter.scale=0.6

	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  package.x= packageBody.position.x 
  package.y= packageBody.position.y 
  drawSprites();
 r1.display();
 r2.display();
 r3.display();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



