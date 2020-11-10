const Engine=Matter.Engine;
const World=Matter.World;
const Body=Matter.Bodies;


var engine,world,body,body2

var backdrop
function preload(){
  backdrop=loadImage("sprites/bg.png")
}
function setup() {
  createCanvas(1200,400);
  engine=Engine.create()
  world=engine.world;
  
 var or={
   isStatic:true
 }
 body2=Body.rectangle(600,390,1200,20,or)
World.add(world,body2);
 console.log(body2)

 box=new Box(700,320,70,70)
 box2=new Box(920,320,70,70)
 box3=new Box(700,240,70,70)
 box4=new Box(920,240,70,70)
 box5=new Box(810,160,70,70)
 
bird=new Bird(100,1100,50,50)

 pig=new Pig(810,350,50,50)
 pig2=new Pig(810,210,50,50)

 log=new Log(810,260,20,300,PI/2)
 log2=new Log(810,180,20,300,PI/2)
 log3=new Log(760,120,20,150,PI/6.5)
 log4=new Log(870,120,20,150,-PI/6.5)
}
function draw() {
  background(backdrop);
  Engine.update(engine),

  box.object()
  box2.object()
  box3.object()
  box4.object()
  box5.object()

  log.object()
  log2.object()
  log3.object()
  log4.object()
  bird.object()

  fill ("green")
  pig.object()
  pig2.object()

  rectMode(CENTER)
  rect (body2.position.x,body2.position.y,1600,20)
}