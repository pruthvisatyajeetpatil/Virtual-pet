var dog, database;
var position;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  dog = createSprite(250,250,10,10);
  var dog = loadImage("images/dog.png");


  var dogPosition = database.ref('dog/position');
  dogPosition.on("value", readPosition, showError);
}

function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
        var dog = loadImage("images/happydog.png");
    }
   
    drawSprites();
  
}

function writePosition(x,y){
  database.ref('dog/position').set({
    'x': position.x + x ,
    'y': position.y + y
  })
}

function readPosition(data){
  position = data.val();
  console.log(position.x);
  dog.x = position.x;
  dog.y = position.y;
}

function showError(){
  console.log("Error in writing to the database");
}


