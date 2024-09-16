// World constant
deg = Math.PI / 180;

// Player object constructor
function player(x, y, z, rx, ry) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.rx = rx;
  this.ry = ry;
}

var mapArray = new Array();
var coinsArray = new Array();
var squareArray = new Array();
var keysArray = new Array();
var diamondsArray = new Array();
var startArray = new Array();
var finishArray = new Array();


// Variables for movement
var pressLeft = 0;
var pressRight = 0;
var pressForward = 0;
var pressBack = 0;
var pressUp = 0;
var mouseX = 0;
var mouseY = 0;


var map = new Array();
var coins = new Array();
var keys = new Array();
var diamonds = new Array();
var start = new Array();
var finish = new Array();
var squares = new Array();
//var keys = new Array();


//sound for the game
var clickSound = new Audio;
clickSound.src = "sounds/clicksound.mp3";

var coinSound = new Audio;
coinSound.src = "sounds/coinsound.mp3";

var keySound = new Audio;
keySound.src = "sounds/keysound.mp3";

var diamondSound = new Audio;
diamondSound.src = "sounds/diamond.mp3";

var finishSound = new Audio;
finishSound.src = "sounds/finishsound.wav";

// Variable for locked mouse
var lock = false;
var canlock = false;
var C = [0];
var K = [0];
var D = [0];
var score = 0;
var level =0;






var container = document.getElementById("container");

// Handle pointer lock changes
document.addEventListener("pointerlockchange", (event) => {
  lock = !lock;
});

// Mouse click event to request pointer lock
container.onclick = function () {
  clickSound.play();
  container.requestPointerLock();
};

// Mouse movement event listener
document.addEventListener("mousemove", (event) => {
  mouseX = event.movementX;
  mouseY = event.movementY;
});

// Keydown event listener
document.addEventListener("keydown", (event) => {
  if (event.key === "a") pressLeft = 5;
  if (event.key === "d") pressRight = 5;
  if (event.key === "w") pressForward = 5;
  if (event.key === "s") pressBack = 5;
  if (event.keyCode === 32) pressUp = 5; // Space key for upward movement
});

// Keyup event listener
document.addEventListener("keyup", (event) => {
  if (event.key === "a") pressLeft = 0;
  if (event.key === "d") pressRight = 0;
  if (event.key === "w") pressForward = 0;
  if (event.key === "s") pressBack = 0;
  if (event.keyCode === 32) pressUp = 0;
});

// Initialize player
var pawn = new player(0, 0, 0, 0, 0);
var world = document.getElementById("world");

var rotationSpeed = 0.0001; // Smaller value for slower rotation

// Update function for movement and camera
function update() {
  // Calculate the movement
   dx = Math.cos(pawn.ry * deg) * (pressRight - pressLeft) - Math.sin(pawn.ry * deg) * (pressForward - pressBack);
   dz = -(Math.sin(pawn.ry * deg) * (pressRight - pressLeft) + Math.cos(pawn.ry * deg) * (pressForward - pressBack));
   dy = -pressUp;
   drx = mouseY;
   dry = -mouseX;

  //check collisions with the rectangles
  collision();

  mouseX = mouseY = 0;
  // Update the player's position
  pawn.x += dx;
  pawn.y += dy;
  pawn.z += dz;

  if (lock) {
    pawn.rx += drx;
    pawn.ry += dry;
  }

  // Move the world
  world.style.transform =
    "translateZ(600px)" +
    "rotateX(" + -pawn.rx + "deg) " +
    "rotateY(" + -pawn.ry + "deg)" +
    "translate3d(" + -pawn.x + "px," + -pawn.y + "px," + -pawn.z + "px)";

  // Rotate coins, keys, and diamonds
  rotateElements("coins", coins);
  rotateElements("keys", keys);
  rotateElements("diamonds", diamonds);
  rotateElements("squares", squares);
  //rotateElements("keywall", keywall);
}

function collision(){
  for(i=0; i <map.length;i++){
    x0 = pawn.x - map[i][0];
    y0 = pawn.y - map[i][1];
    z0 = pawn.z - map[i][2];

    x1 = x0 + dx;
    y1 = y0 + dy;
    z1 = z0 + dz;

    //transform to the rectangle coordinate system
    point0 = coorTransform(x0,y0,z0,map[i][3],map[i][4],map[i][5]);
    point1 = coorTransform(x1,y1,z1,map[i][3],map[i][4],map[i][5]);

    console.log("cordinates : " + point1[0],+ point1[1],+ point1[1]);

    if(Math.abs(point1[0]) < map[i][6]/2 && Math.abs(point1[1]) < map[i][7]/2 && Math.abs(point1[2]) < 50 )
      {
        point1[2] = Math.sign(point0[2]) *50 ;
        point2 = coorReTransform(point1[0],point1[1],point1[2],
          map[i][3],map[i][4],map[i][5]);

        dx = point2[0] - x0;
        dy = point2[1] - y0;
        dz = point2[2] - z0;
      }
  }
}

function coorTransform(x0,y0,z0,rxc,ryc,rzc){
  let x1 =  x0;
  let y1 =  y0*Math.cos(rxc*deg) + z0*Math.sin(rxc*deg);
  let z1 = -y0*Math.sin(rxc*deg) + z0*Math.cos(rxc*deg);
  let x2 =  x1*Math.cos(ryc*deg) - z1*Math.sin(ryc*deg);
  let y2 =  y1;
  let z2 =  x1*Math.sin(ryc*deg) + z1*Math.cos(ryc*deg);
  let x3 =  x2*Math.cos(rzc*deg) + y2*Math.sin(rzc*deg);
  let y3 = -x2*Math.sin(rzc*deg) + y2*Math.cos(rzc*deg);
  let z3 =  z2;
  return [x3,y3,z3];
}

function coorReTransform (x3,y3,z3,rxc,ryc,rzc){
  let x2 =  x3*Math.cos(rzc*deg) - y3*Math.sin(rzc*deg);
  let y2 =  x3*Math.sin(rzc*deg) + y3*Math.cos(rzc*deg);
  let z2 =  z3
  let x1 =  x2*Math.cos(ryc*deg) + z2*Math.sin(ryc*deg);
  let y1 =  y2;
  let z1 = -x2*Math.sin(ryc*deg) + z2*Math.cos(ryc*deg);
  let x0 =  x1;
  let y0 =  y1*Math.cos(rxc*deg) - z1*Math.sin(rxc*deg);
  let z0 =  y1*Math.sin(rxc*deg) + z1*Math.cos(rxc*deg);
  return [x0,y0,z0];
}

function rotateElements(className, objects) {
  let elements = document.getElementsByClassName(className);
  for (let i = 0; i < elements.length; i++) {
    let distanceSquared = (objects[i][0] - pawn.x) ** 2 + (objects[i][1] - pawn.y) ** 2 + (objects[i][2] - pawn.z) ** 2;
    let thresholdDistanceSquared = (5 * objects[i][6]) ** 2;

    if (distanceSquared < thresholdDistanceSquared) {
      let angle = performance.now() * rotationSpeed;
      elements[i].style.transform += "rotateY(" + angle + "deg)";
    } else {
      elements[i].style.transform = elements[i].style.transform.replace(/rotateY\([^\)]+\)/g, "");
    }
  }
}

// Create the 3D world
function CreateNewWorld(map) {
  CreateSquares(map, "map");

  updateHUD();
}

function clearWorld(){
  world.innerHTML = "Score : " ;
}



function CreateSquares(objects, string) {
  for (let i = 0; i < objects.length; i++) {
    // Create squares and styles
    let newElement = document.createElement("div");
    newElement.className = string + " square";
    newElement.id = string + i;
    newElement.style.width = objects[i][6] + "px";
    newElement.style.height = objects[i][7] + "px";
    newElement.style.backgroundImage = "url(" + objects[i][8] + ")";
    newElement.style.backgroundColor = objects[i][8];
    newElement.style.opacity = objects[i][9];
    newElement.style.borderRadius = objects[i][10] + "%";

    // Apply glowing box-shadow for coins, keys, and diamonds
    if (string === "coins") {
      newElement.style.boxShadow = "0 0 20px 10px rgba(255, 233, 61, 0.6)"; // yellow glow for coins
    } else if (string === "keys") {
      newElement.style.boxShadow = "0 0 20px 10px rgba(255, 233, 61, 0.6)"; //  glow for keys
    } else if (string === "diamonds") {
      newElement.style.boxShadow = "0 0 20px 10px rgba(255, 233, 61, 0.6)"; //  glow for diamonds
    } else {
      newElement.style.boxShadow = "none"; // No glow for other elements
    }


    newElement.style.transform =
      "translate3d(" +
      (600 - objects[i][6] / 2 + objects[i][0]) +
      "px," +
      (400 - objects[i][7] / 2 + objects[i][1]) +
      "px," +
      objects[i][2] +
      "px)" +
      "rotateX(" +
      objects[i][3] +
      "deg) " +
      "rotateY(" +
      objects[i][4] +
      "deg) " +
      "rotateZ(" +
      objects[i][5] +
      "deg)";

    // Insert the square into the world
    world.append(newElement);
  }
}


function interact(objects, string, sound,num) {
  for (let i = 0; i < objects.length; i++) {
    let d = (objects[i][0] - pawn.x) ** 2 + (objects[i][1] - pawn.y) ** 2 + (objects[i][2] - pawn.z) ** 2;
    let objsize = objects[i][6] ** 2;
    if (d < objsize) {
      document.getElementById(string + i).style.display = "none";
      objects[i][0] = 10000000;
      objects[i][1] = 10000000;
      objects[i][2] = 10000000;
      if (sound) {
        sound.play(); // Play the sound when the object is collected
      }
      num[0]++;

      updateHUD();
    }
  }
}

function updateHUD() {
  document.getElementById("hud").innerHTML =
    "coins: " + C + " | keys: " + K + " | diamonds: " + D + "| score: " + score;
}

function updateScore() {
  document.getElementById("score").innerHTML =
    "Score: " + score ;
}

// Define the repeat function
function repeatFunction() {
  update();
  interact(coins, "coins",coinSound,C);
  interact(keys, "keys",keySound,K);
  interact(diamonds, "diamonds",diamondSound,D);

  finishInteract();


}

function  finishInteract(){
  df = (finish[0][0] - pawn.x)**2 + (finish[0][1] - pawn.y)**2 + (finish[0][2] - pawn.z)**2;
  finsize = finish[0][6]**2;

  if(df < finsize) {
  if(K[0]==0){
  console.log("Please find the key for the portal");

  }else  {
    clearWorld();
    clearInterval(TimerGame);
    document.exitPointerLock();
    score = score + C[0] + (D[0]*2);

    console.log("Your Score is = " + score);
    C[0] = 0;
    K[0] = 0;
    D[0] = 0;

    menu1.style.display = "block";
    finishSound.play()

    level++;
    if (level>=5){
      level=0;
      score=0;
    }

    }
  }
}

function makeCopy(array){
  let NewArray = new Array();
  for (let i = 0; i < array.length; i++){
    NewArray[i] = new Array();
    for (let j = 0; j < array[i].length; j++){
      NewArray[i][j] = array[i][j];
    }
  }
  return NewArray;
}




