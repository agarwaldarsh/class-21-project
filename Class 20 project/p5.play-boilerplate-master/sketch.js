var astranaut;

function preload(){
bg=loadImage("images/iss.png")
sleep=loadAnimation("images/sleep.png")
brush=loadAnimation("images/brush.png")
gym=loadAnimation("images/gym1.png,images/gym2.png,images/gym11.png,images/gym12.png")
eat=loadAnimation("images/eat1.png,images/eat2.png")
drink=loadAnimation("images/drink1.png,images/drink2.png")
move=loadAnimation("images/move1.png,images/move.png")
bath=loadAnimation("images/bath1.png,images/bath2.png")
}


function setup() {
  createCanvas(800,400);
  
var astranaut_options={
  isStatic=true
}
  astranaut=Bodies.rectangle(200,200,20,40,astranaut_options);
  World.add(world,astranaut)
  astranaut.addAnimation("sleeping",sleep);
  astranaut.scale=0.1;



}

function draw() {
  background(255,255,255);  
  rect(astranaut.position.x,astranaut.position.y,20,40);
  
  if(keyDown("UP_ARROW")){
    astranaut.addAnimation("brushing",brush);
    astranaut.changeAnimation("brushing");
    astranaut.y=350;
  }
  if(keyDown("DOWN_ARROW")){
    astranaut.addAnimation("gyming",gym);
    astranaut.changeAnimation("gyming");
  }
  if(keyDown("RIGHT_ARROW")){
    astranaut.addAnimation("bathing",bath);
    astranaut.changeAnimation("bathing");
  }
  if(keyDown("LEFT_ARROW")){
    astranaut.addAnimation("eating",eat);
    astranaut.changeAnimation("eating");
  }
  if(keyDown("M")){
    astranaut.addAnimation("moving",move);
    astranaut.changeAnimation("moving");
  }
  
  drawSprites();

}