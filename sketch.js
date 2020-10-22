var fixedrec 
var movingrect
 
function setup() {
  createCanvas(800,400);
 movingrect= createSprite(400, 200, 50, 50);
 fixedrec = createSprite (100,200,50,50);
 movingrect.velocityX=-5
 fixedrec.velocityX=+5
}

function draw() {
  background(0,0,0);  
if (movingrect.x-fixedrec.x<movingrect.width/2+fixedrec.width/2 && 
 fixedrec.x-movingrect.x<movingrect.width/2+fixedrec.width/2 ) {
  movingrect.velocityX=movingrect.velocityX*(-1);
  fixedrec.velocityX=fixedrec.velocityX*(-1);
}

  drawSprites();
}