const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint

var myworld,myengine,block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16
var ground1,ground2,block17,block18,ball,polygonImage;
var slingshot,defaultbgImg,backgroundImg,score=0;
function preload(){
   polygonImage=loadImage("polygon.png")
   defaultbgImg=loadImage("lightimage.jpg")
    getBackgroundImg();
}

function setup(){
    createCanvas(1200,600)
    myengine=Engine.create();
    myworld=myengine.world

    ball=Bodies.circle(200,100,40)
    World.add(myworld,ball)
    block1=new Block(900,535,30,40)
    block2=new Block(930,535,30,40)
    block3=new Block(960,535,30,40)
    block4=new Block(990,535,30,40)
    block5=new Block(1020,535,30,40)
    block6=new Block(930,495,30,40)
    block7=new Block(960,495,30,40)
    block17=new Block(990,495,30,40)
    block18=new Block(960,455,30,40)
    ground2=new Ground(960,550,200,15)

    block8=new Block(630,335,30,40)
    block9=new Block(660,335,30,40)
    block10=new Block(690,335,30,40)
    block11=new Block(720,335,30,40)
    block12=new Block(750,335,30,40)
    block13=new Block(660,295,30,40)
    block14=new Block(690,295,30,40)
    block15=new Block(720,295,30,40)
    block16=new Block(690,255,30,40)
    ground1=new Ground(690,350,200,15)
    slingshot=new Slingshot(this.ball,{x:180,y:100})
}

function draw(){
    if(backgroundImg){
        background(backgroundImg); 
    }
    else{
        background(defaultbgImg)
    }
    textSize(35)
    fill("yellow")
    text("SCORE: "+score,600,50)
    Engine.update(myengine)

    ground1.display();
    ground2.display();
    slingshot.display();
    fill("orange")
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
   /*  block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score(); */
    fill("lightgreen")
    block6.display();
    block7.display();
    block17.display();
   /*  block6.score();
    block7.score();
    block17.score(); */
    fill("purple")
    block18.display();
   // block18.score();
    fill("yellow")
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    /* block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score() */
    fill("blue")
    block13.display();
    block14.display();
    block15.display();
   /*  block13.score();
    block14.score();
    block15.score(); */
    fill("pink")
    block16.display();
   // block16.score();
    //ball.position.x=mouseX
    //ball.position.y=mouseY
    imageMode(CENTER);
    image(polygonImage,ball.position.x,ball.position.y,40,40);

}
function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode===32){
        slingshot.attach(this.ball)
    }
}
async function getBackgroundImg(){
    var info=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var infoJs=await info.json();
    console.log(infoJs)
    var dateTime=infoJs.datetime;
    var hour=dateTime.slice(11,13)
    if(hour>=06 && hour<=18){
        backgroundImg = loadImage("lightimage.jpg");
    }
    else{
        backgroundImg = loadImage("darkimage.jpg");
    }
}