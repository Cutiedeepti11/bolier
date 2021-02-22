const Engine=Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;

var engine ,world;
var ground;

function setup() {
  createCanvas(800,400);
  engine =Engine.create();
  world=engine.world;

 var options={
   isStatic:true
 }
ground=Bodies.rectangle(200,370,1200,20,options);
World.add(world,ground);

console.log(ground)
console.log(ground.position.x);
console.log(ground.position.y);


}

function draw() {
  background(0);  
  Engine.update(engine)
  var pos=ground.position;
  rectMode(CENTER)
  rect(pos.x,pos.y,1200,40);
}