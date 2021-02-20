var canvas,box,box3,box2,box3,body,body_options;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
  //  createEdgeSprites()

    //create 4 different surfaces
    box=createSprite(0,600,300,20)
    box.shapeColor="yellow"
    
    box2=createSprite(260,600,200,20)
    box2.shapeColor="red"
    box3=createSprite(480,600,200,20)
    box3.shapeColor="purple"
    box4=createSprite(750,600,300,20)
    box4.shapeColor="green"
    //create box sprite and give velocity

   //  var  body_options={
    //    restitution=1.0 

   //  } 

   body=createSprite(Math.round(random(20,750)),300,30,30,body_options)
   body.velocityY=4
   body.velocityX=4

   




}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
 //   body.bounceOff("edges")
 music.play()

if(box.isTouching(body)){
body.velocityX=0;body.velocityY=0
body.shapeColor="yellow"
    music.stop()
}
if(box2.isTouching(body)){
    body.velocityX=0;body.velocityY=0
    body.shapeColor="red"
        music.stop()
    }
    if(box3.isTouching(body)){
body.velocityX=0;body.velocityY=0
body.shapeColor="purple"
    music.stop()
}
if(box4.isTouching(body)){
body.velocityX=0;body.velocityY=0
body.shapeColor="green"
    music.stop()
}





  drawSprites()
    //add condition to check if box touching surface and make it box
}
