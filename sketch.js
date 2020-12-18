const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies; 
const Body=Matter.Body;
const Constraint=Matter.Constraint;
const Mouse=Matter.Mouse;
const MouseConstraint=Matter.MouseConstraint;

var pendulum1,pendulum2;
var pendulum3,pendulum4;
var pendulum5;
var sling1,sling2;
var sling3,sling4;
var sling5;

function setup() {
 canvas=createCanvas(windowWidth/2,windowHeight/1.5);
 engine = Engine.create();
 world = engine.world;
 pendulum1 = new Pendulum(50,300,"black");
 pendulum2 = new Pendulum(120,300,"black");
 pendulum3 = new Pendulum(190,300,"black");
 pendulum4 = new Pendulum(260,300,"black");
 pendulum5 = new Pendulum(330,300,"black");
 sling1 = new Sling(pendulum1.body,{x:50,y:100});
 sling2 = new Sling(pendulum2.body,{x:120,y:100});
 sling3 = new Sling(pendulum3.body,{x:190,y:100});
 sling4 = new Sling(pendulum4.body,{x:260,y:100});
 sling5 = new Sling(pendulum5.body,{x:330,y:100}); 

 let canvasmouse = Mouse.create(canvas.elt);
 canvasmouse.pixelRatio = pixelDensity();
 let options = {
   mouse: canvasmouse
 };
 mConstraint = MouseConstraint.create(engine,options);
 World.add(world, mConstraint);
}

function draw() {
  background("silver");
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
 drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(pendulum1.body,{x:mouseX,y:mouseY});
 // Body.applyForce(pendulum1.body,pendulum5.body.position,{x:-115,y:-115});
}

