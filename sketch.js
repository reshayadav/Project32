const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;
var polygon, polygonImg, slingshot;
var ground, ground1, ground2;
var box1, box2, box3, box4, box5, box6, box7;
var box8, box9, box10, box11, box12;
var box13, box14, box15, box16;
var box17, box18, box19, box20, box21,box22, box23, box24, box25;
var score = 0;
var backgroundImg;


function preload(){
  backgroundImg = loadImage("bg1.jpg");

polygonImg = loadImage("polygon.png");

getBackgroundImg();
}
function setup() {
 var canvas = createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,390,800,20);
  ground1 = new Ground(340,325,260,10);
  ground2 = new Ground(630,200,200,10);
  // Level 1
  box1 = new Box(250,300,30,40);
  box2 = new Box(280,300,30,40);
  box3 = new Box(310,300,30,40);
  box4 = new Box(340,300,30,40);
  box5 = new Box(370,300,30,40);
  box6 = new Box(400,300,30,40);
  box7 = new Box(430,300,30,40);

  //Level 2
  box8 = new Box(280,260,30,40);
  box9 = new Box(310,260,30,40);
  box10 =new Box(340,260,30,40);
  box11 =new Box(370,260,30,40);
  box12 =new Box(400,260,30,40);

  //Level 3
  box13 =new Box(310,220,30,40);
  box14 =new Box(340,220,30,40);
  box15 =new Box(370,220,30,40);

  //Top
  box16 =new Box(340,180,30,40);

  box17 =new Box(570,170,30,40);
  box18 =new Box(600,170,30,40);
  box19 =new Box(630,170,30,40);
  box20 =new Box(660,170,30,40);
  box21 =new Box(690,170,30,40);
  box22 =new Box(600,130,30,40);
  box23 =new Box(630,130,30,40);
  box24 =new Box(660,130,30,40);
  box25 =new Box(630,90,30,40);
  
  
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  polygon.density = 1.2;

  slingshot = new Slingshot(polygon,{x:100, y:200});

  var canvasMouse = Mouse.create(canvas.elt);
    var options={
        mouse: canvasMouse
    }
    mConstraint= MouseConstraint.create(engine,options);
	World.add(world,mConstraint);
	
	
  Engine.run(engine);
}

function draw() {
 
   background(backgroundImg);
 

  
  fill(255);
  text("SCORE : "+score,700,40);

  imageMode (CENTER);
  image (polygonImg,polygon.position.x,polygon.position.y,50,50);

 

//polygon.display();
  slingshot.display();
  ground1.display();
  ground2.display();
 
 
  
  
  
  

 
  
  fill(138,204,235);
  box1.display();
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();
  box5.score();
  box6.display();
  box6.score();
  box7.display();
  box7.score();
  box17.display();
  box17.score();
  box18.display();
  box18.score();
  box19.display();
  box19.score();
  box20.display();
  box20.score();
  box21.display();
  box21.score();

  fill(253,192,203);
  box8.display();
  box8.score();
  box9.display();
  box9.score();
  box10.display();
  box10.score();
  box11.display();
  box11.score();
  box12.display();
  box12.score();
  box22.display();
  box22.score();
  box23.display();
  box23.score();
  box24.display();
  box24.score();

  fill(64,223,205);
  box13.display();
  box13.score();
  box14.display();
  box14.score();
  box15.display();
  box15.score();
  box25.display();
  box25.score();

  fill(56,0,0);
  box16.display(); 
  box16.score();
  
  ground.display();

  
 

 
}


function mouseReleased(){
  setTimeout(function(){
    slingshot.fly();
  },100);
  }

  function keyPressed(){
    if(keyCode === 32){
      Body.setPosition(polygon, {x:100, y:100});
        slingshot.attach(polygon);
    }
  }

  async function getBackgroundImg(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJson = await response.json();
    console.log(responseJson);
    var dayTime =responseJson.datetime;
    console.log(dayTime);
    var hour = dayTime.slice(11,13);
    console.log(hour);
    if(hour>=6 && hour<=18){
        bg = "bg1.jpg";
    }
    else{
        bg = "bg2.jpg";
    }
    backgroundImg = loadImage(bg);
  }