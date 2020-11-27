/*// types of data

// numerical data 
var num = 6554;
console.log("num = "+num);

//string data
var str = "Hello, I am a string."
console.log("str = "+str);

//boolean data 
var bool = true;
console.log("bool = "+bool);

//undefined data
var object;
console.log("object = "+object);

//reassigning undefined data type to null
object = null;
console.log("object = "+object);

var arr = [1, "hdfhuwafhwgkfha", object, str, num]
console.log("arr = "+arr)
console.log("arr = "+arr[2])
// multiple values
// array-[]
//store multiple types of data
var arr1 =  [[10,998],[num,0988,227],32,"Saketh is Awesome",[12,766,"helloo"],arr]
console.log("arr1 = "+arr1)
console.log("arr1[4][2] = "+arr1[4][2]);

arr1.push("test");
console.log(arr1);

arr1.pop();
console.log(arr1);

console.log(arr1.length);
*/
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var slingshot
var gameState = 0
var bg;

function preload() {
    getBGI()
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform=new Ground(200,312.5, 400, 175)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(210,20);
    
    slingshot = new Slingshot(bird.body,{x:210,y:60})
}

function draw(){
    
    if(backgroundImg){
        background(backgroundImg)
    }
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();

    slingshot.display()
}
function mouseDragged(){
   if(gameState!==1){ 
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
   }
}
function mouseReleased(){
    slingshot.fly() 
    gameState=1
}
function keyPressed(){
    if(keyCode===32){
        slingshot.attach(bird.body)
        gameState=0
    }
    
}
async function getBGI(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/America/Los_Angeles")
    //console.log(response)
    var responseJson = await response.json();
    var dateTime = responseJson.datetime;
    var hour = dateTime.slice(11,13)
    console.log(hour);
    if(hour>=6&&hour<=16){
        bg = "sprites/bg.png"
    } else{
        bg = "sprites/bg2.jpg"
    }
    backgroundImg=loadImage(bg)
}