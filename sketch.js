const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    box1= new Box(200,100,50,50);
    box2= new Box(250,100,50,50);
}

function draw(){
    background(0);
    Engine.update(engine);
   box1.display();
   box2.display();
}