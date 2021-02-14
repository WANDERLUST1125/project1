const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
    
}

function setup(){
    createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;


    rain = new drops(200,300,20)




   
    Engine.run(engine);
  
}

function draw(){


    background(0);
  
    rain.display();








    drawSprites();



    
}   

function rain(){

var maxdrops=100;

for(var i=0, i < maxdrops; i++){



    
}


}
