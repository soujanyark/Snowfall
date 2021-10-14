const Engine = Matter.Engine; 
const World= Matter.World; 
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;
var bgImage
var snow=[]
var newsnow=[]
function preload(){
  bgImage=loadImage("snow1.jpg")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
   world = engine.world;
}

function draw() {
  background(bgImage);  
  Engine.update(engine)
  for(r=0;r <snow.length;r++){
    snow[r].display()
    
    
  }
  fall()
  drawSprites();
}
function fall(){ 
  if(frameCount%5===0){ 
    snow.push(new Snow(random(0,800),0,50,50))
   }
   }