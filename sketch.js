const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var pinkos=[];
var particles=[];
var divisions=[];
var divisionHeight = 300;
var ground;

function setup() {
  createCanvas(480,800);
  
    engine = Engine.create();
    world = engine.world;
ground = new Ground(width/2,790,500,20);
for(var k = 0; k<=width; k= k+80)
{
  divisions.push(new Division(k, height-150, 10, divisionHeight));
  //divisions.push(new Division(k, 400, 10, 300));
}

for(var k = 40; k<=width; k= k+50)
{
  pinkos.push(new Pinko(k, 70));
}

for(var k = 15; k<=width; k= k+50)
{
  pinkos.push(new Pinko(k, 170));
}

for(var k = 40; k<=width; k= k+50)
{
  pinkos.push(new Pinko(k, 270));
}

for(var k = 15; k<=width; k= k+50)
{
  pinkos.push(new Pinko(k, 370));
}

}

function draw() {
  background(0,0,0);  
  
  ground.display();
  for(var j=0; j<divisions.length;j++)
  {
    divisions[j].display();
  }

  for(var k=0; k<pinkos.length;k++)
  {
    pinkos[k].display();
  }

  for(var m=0; m<particles.length;m++)
  {
    particles[m].display();
  }
  
drawSprites();

}