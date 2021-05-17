var boy,boy_animation
var background1,road_image,leftboundary,rightboundary,bottomboundary
function preload(){
  //pre-load images
  boy_animation=loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
  road_image=loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  leftboundary=createSprite(32.5,200,25,600);
  rightboundary=createSprite(400-32.5,200,25,600);
  boy=createSprite(200,300);
  background1=createSprite(200,300,200,200);
  
  //setting animations
  boy.addAnimation("running",boy_animation);
  background1.addAnimation("background",road_image);


}

function draw() {
  background(0);
  
  //fixing bug where boy is not visible since he is           underneath the road
  background1.depth=boy.depth-1
  // background1.depth=rightboundary.depth-1

  
  //setting the invisible boundary's invisible
  leftboundary.visible=false;
  rightboundary.visible=false;
  
  //making boy collide with boundary's
   mouseX=constrain(mouseX,60,400-60)
  
  //making the boy seem like hes moving
  background1.velocityY=3
  
  //changing backgrounds scale
  background1.scale=1.2
  
  //reseting the x position of the background so it seems like it goes on forever
  if(background1.y>400){
     background1.y=height/3.7;
  }
  
  //giving the character controls
  boy.x=mouseX
  
  drawSprites();
}
