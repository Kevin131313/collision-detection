var still_obj , moving_obj;


function setup() {
  createCanvas(800,400);
   still_obj=createSprite(200,200,50,100)
   moving_obj=createSprite(300,200,50,50)
   still_obj.shapeColor="red"
   moving_obj.shapeColor="red"
   
}

function draw() {
  background(255,255,255);  
  moving_obj.y=World.mouseY
  moving_obj.x=World.mouseX

  if(moving_obj.x-still_obj.x < moving_obj.width/2+still_obj.width/2 && still_obj.x-moving_obj.x<moving_obj.width/2+still_obj.width/2 
    &&moving_obj.y-still_obj.y < moving_obj.height/2+still_obj.height/2 && still_obj.y- moving_obj.y< moving_obj.height/2+still_obj.height/2 ){
    moving_obj.shapecolor="green"
    still_obj.shapecolor="green"

  }
  else{
    moving_obj.shapecolor="red"
    still_obj.shapecolor="red"
  }

  drawSprites();
}