var bgImg,bg;
var sleepImg,sleep;
var brushImg,brush;
var gymImg,gym;
var eatImg,eat;
var drinkImg,drink;
var moveImg,move;
var bathImg,bath;

var astronaut;


function preload(){
  
  bgImg = loadImage("iss.png");
  sleepImg = loadAnimation("sleep.png");
  brushImg = loadAnimation("brush.png");
  gymImg = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  eatImg = loadAnimation("eat1.png","eat2.png");
  drinlImg = loadAnimation("drink1.png","drink2.png");
  moveimg =  loadAnimation("move.png","move1.png");
  bathImg = loadAnimation("bath1.png","bath2.png");
  
}


function setup() {
  createCanvas(600, 400);
  
  bg = createSprite(300,200);
  bg.addImage("bg",bgImg);
  bg.scale=0.12;
  
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleepImg);
  astronaut.scale=0.1;
  
  
  brush = createSprite(300,230);
  brush.addAnimation("brushing",brushImg);
  brush.scale=0.1;
  brush.visible=false;
  
  gym = createSprite(300,230);
  gym.addAnimation("gyming",gymImg);
  gym.scale=0.1;
  gym.visible=false;
  
  eat = createSprite(300,230);
  eat.addAnimation("eating",eatImg);
  eat.scale=0.1;
  eat.visible=false;
  
  bath = createSprite(300,230);
  bath.addAnimation("bathing",bathImg);
  bath.scale=0.1;
  bath.visible=false;
  

  
}

function draw() {
  background("lightblue");
  
 if(keyDown(UP_ARROW)){
    brush.visible=true;
    astronaut.visible=false;
    gym.visible=false;
    eat.visible=false;
   bath.visible=false;
  }
  if(keyDown(DOWN_ARROW)){
    gym.visible=true;
    brush.visible=false;
    astronaut.visible=false;
    eat.visible=false;
    bath.visible=false;
  }
  if(keyDown(LEFT_ARROW)){
    eat.visible=true;
    gym.visible=false;
    brush.visible=false;
    astronaut.visible=false;
    bath.visible=false;
    
  }
  if(keyDown(RIGHT_ARROW)){
    bath.visible=true;
    gym.visible=false;
    brush.visible=false;
    eat.visible=false;
    astronaut.visible=false;
  }
 
  drawSprites();
  
}
