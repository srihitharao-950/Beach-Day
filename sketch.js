var fixSprite1, fixSprite2, fixSprite3, fixSprite4;
var fixSprite1Img, fixSprite2Img, fixSprite3Img, fixSprite4Img;
var movingSprite
var movingSprite1
var bg1,bg1Img
var music;

function preload(){
music=loadSound("music.mp3");
fixSprite1Img = loadImage("girl-1.png")
fixSprite2Img = loadImage("boy-2.png")
fixSprite3Img= loadImage("boy-3.png")
fixSprite4Img = loadImage("girl-4.png")
movingSpriteImg = loadImage("1c-1.png")
bg1Img= loadImage("summer.jpg")

}

function setup(){
    
    createCanvas(800,600);

    bg1=createSprite(400,300,180,30);
    bg1.addImage(bg1Img)
    bg1.scale=4




    movingSprite=createSprite(random(10,750),300,20,20);
    movingSprite.addImage(movingSpriteImg)
    movingSprite.velocityX=3;
    movingSprite.velocityY=3;
    movingSprite.scale=0.3
   
    fixSprite1=createSprite(100,480,180,30);
    fixSprite1.addImage(fixSprite1Img)
    fixSprite1.scale=0.5
    fixSprite1.setCollider("rectangle",0,0,120,400)
    fixSprite1.debug=false;
    

    fixSprite2=createSprite(300,500,180,30);
    fixSprite2.addImage(fixSprite2Img)
    fixSprite2.scale=0.8
    fixSprite2.setCollider("rectangle",0,0,120,200)
    fixSprite2.debug=false;

    fixSprite3=createSprite(500,500,180,30);
    fixSprite3.addImage(fixSprite3Img)
    fixSprite3.scale=0.25
    fixSprite3.setCollider("rectangle",0,0,120,400)
    fixSprite3.debug=false;

    fixSprite4=createSprite(700,480,180,30);
    fixSprite4.addImage(fixSprite4Img)
    fixSprite4.scale=0.5
    fixSprite4.setCollider("rectangle",0,0,120,400)
    fixSprite4.debug=false;

    
    
    

}

function draw() {
    background(rgb(10,10,10))
   
    if(movingSprite.x<0){
      music.stop()
        movingSprite.velocityX=3
    }else if(movingSprite.x>800){
      music.stop()
        movingSprite.velocityX=-3
    }
   
  if(movingSprite.isTouching(fixSprite4) && movingSprite.bounceOff(fixSprite4)){
    music.play()
    movingSprite.shapeColor="yellow";

    
  }
  
  else if(movingSprite.isTouching(fixSprite3)  && movingSprite.bounceOff(fixSprite3)){
    music.play()
    movingSprite.shapeColor="blue";
   
  }
    
  else if(movingSprite.isTouching(fixSprite2) && movingSprite.bounceOff(fixSprite2)){
    music.play()
    movingSprite.shapeColor="green";
    movingSprite.velocityX=0;
    movingSprite.velocityY=0;

  }
  
  else if(movingSprite.isTouching(fixSprite1)  && movingSprite.bounceOff(fixSprite1)){
    music.play()
    movingSprite.shapeColor="red";
  }

  if (movingSprite.y<0){
    music.stop()
    movingSprite.velocityY=3
  }



  
   
    drawSprites()
}
function isTouching(object1,object2)
{

  if(object1.x-object2.x<object2.width/2+object1.width/2&&object2.x-object1.x<object1.width/2+object2.width/2&&object1.y-object2.y<object1.height/2+object2.height/2&&object2.y-object1.y<object1.height/2+object2.height/2){
   return true;  
  }
  else{
    return false;
  }
}

function bounceOff(object1,object2){


if(object1.x-object2.x<object2.width/2+object1.width/2&&object2.x-object1.x<object1.width/2+object2.width/2){
object1.velocityX=object1.velocityX*-1
object2.velocityX=object2.velocityX*-1
}
if(object1.y-object2.y<object1.height/2+object2.height/2&&object2.y-object1.y<object1.height/2+object2.height/2){
  object1.velocityY=object1.velocityY*-1
object2.velocityY=object2.velocityY*-1
}
if(object1.x<0){
    object1.velocityX=3
  }
  else if(object2.x>1200){
    object2.velocityX=-3
  }
}