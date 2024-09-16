
//Create variables
var menu1 = document.getElementById("menu1");
var menu2 = document.getElementById("menu2");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");


//Create navigation

button1.onclick = function(){
  //copy Arrays
  map = makeCopy(mapArray[level]);
  coins = makeCopy(coinsArray[level]);
  keys = makeCopy(keysArray[level]);
  diamonds = makeCopy(diamondsArray[level]);
  squares = makeCopy(squareArray[level]);
  start = makeCopy(startArray[level]);
  finish = makeCopy(finishArray[level]);






  menu1.style.display = "none";

  CreateNewWorld(map);
  pawn.x = start[0][0];
  pawn.y = start[0][1];
  pawn.z = start[0][2];
  pawn.rx = start[0][3];
  pawn.ry = start[0][4];

  CreateSquares(finish, "finish");
  CreateSquares(coins, "coins");
  CreateSquares(keys, "keys");
  CreateSquares(diamonds, "diamonds");
  CreateSquares(finish,"finish")
  CreateSquares(squares, "squares");



// Set an interval to update the game state
   TimerGame = setInterval(repeatFunction, 10);

  canlock =true;
  clickSound.play()
}

button2.onclick = function(){
  menu1.style.display = "none";
  menu2.style.display = "block";
  clickSound.play()
}

button3.onclick = function(){
  menu1.style.display = "block";
  menu2.style.display = "none";
  clickSound.play()
}
