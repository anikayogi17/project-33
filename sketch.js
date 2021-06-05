const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
var snow = [];


function preload() {
  backgroundImg = loadImage("snow1.jpg");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);

  //if(frameCount%60===0){
 //   snow.push(new Snow(random(width/2-10, width/2+10),10,10))
  //}

}

function draw() {
  background(backgroundImg);  
  drawSprites();
  if(frameCount%60===0){
    snow.push(new Snow(random(100,700),10,10))
  }
  Engine.update(engine)
  for(var i = 0; i < snow.length; i++){
    snow[i].display();
  }
  
}