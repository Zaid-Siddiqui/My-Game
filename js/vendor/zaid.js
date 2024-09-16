
// Zaid level 1 and 2
mapArray[0] = [
  //x , Y , Z , Rx ,Ry , Rz , Width , height , color
  [0, 0, -1000, 0, 0, 0, 2000, 200, "patterns/wall2.avif",1], //front wall
  [0, 0, 1000, 0, 0, 0, 2000, 200, "patterns/wall2.avif",1],  // back wall
  [1000, 0, 0, 0, 90, 0, 2000, 200, "patterns/wall2.avif",1], //Right wall
  [-1000, 0, 0, 0, 90, 0, 2000, 200, "patterns/wall2.avif",1],  //Left Wall
  [0,  100,   0,  90,   0,  0,  2000,  2000, "patterns/ground.jpg",1],  // Floor

  [0, 0, -200, 0, 0, 0, 1000, 200, "patterns/wall2.avif",0.35], //small mid wall
  [0, 0, 800, 0, 0, 0, 1000, 200, "patterns/wall2.avif",0.35],  // back mid wall
  [500, 0, 200, 0, 90, 0, 900, 200, "patterns/wall2.avif",0.35], //Right mid wall
  [-500, 0, 300, 0, 90, 0, 1000, 200, "patterns/wall2.avif",0.35],  //Left mid Wall
  //cube
  [0, 0, -600, 0, 0, 0, 200, 200, "#1868e1",1], // cube blue wall
  [0, 0, -400, 0, 0, 0, 200, 200, "#e1182f",1], //cube red wall
  [100, 0, -500, 0, 90, 0, 200, 200, "#cd18e1",1], // cube purple wall
  [-100, 0, -500, 0, 90, 0, 200, 200, "#020e4e",1],  // cube darkblue Wall
  [0, 100, -500, 90, 0, 0, 200, 200, "#f8d206",1], //cube yellow wall
  [0, -100, -500, 90, 0, 0, 200, 200, "#9c0789",1], //cube pink wall
  //Maze
  [800,0,-600,0,90,0,500,200,"patterns/maze1.avif",1],
  [500,0,-665,0,0,0,600,200,"patterns/maze1.avif",1], //line 1
  [500,0,-595,0,0,0,600,200,"patterns/maze1.avif",1], //line 2
  [200,0,-630,0,-90,0,70,200,"patterns/maze1.avif",1], //small connecting Wall
  [900,0,-600,0,90,0,500,200,"patterns/maze1.avif",1], //base
  [850,0,-850,0,0,0,100,200,"patterns/maze1.avif",1], // base side1
  [850,0,-350,0,0,0,100,200,"patterns/maze1.avif",1],	// base side2
];


squareArray[0] = [
  [-500,50,-800,0,0,0,50,50,"#69265A"],
  [-900,50,50,0,0,0,50,50,"#69265A"],
  [300,50,100,0,0,0,50,50,"#69265A"],
];


startArray[0] = [
  [900, 0, 900, 0, 45,0],
];

finishArray[0] = [
  [400, 100, 400, 90, 0, 0, 250, 250, "patterns/portal2.gif", 1] // Portal
];

coinsArray[0] = [
  [500,30,-300,0,0,0,50,50,"patterns/coin.png",1,50],
  [-200,30,-500,0,0,0,50,50,"patterns/coin.png",1,50],
  [-700,30,400,0,0,0,50,50,"patterns/coin.png",1,50],
];

keysArray[0] = [
  [-500,30,-800,0,0,0,50,50,"patterns/key.png",1,50],

];

diamondsArray[0] = [
  [500,20,-300,0,0,0,50,50,"patterns/diamond1.png",1,50],
  [-900,20,-50,0,0,0,50,50,"patterns/diamond1.png",1,50],
  [-300,20,100,0,0,0,50,50,"patterns/diamond1.png",1,50],
];

//the Second level
mapArray[1] = [
  //x , Y , Z , Rx ,Ry , Rz , Width , height , color,opacity
  [0, 0, -1000, 0, 0, 0, 2000, 200, "patterns/walltexture.avif",1], //front wall
  [0, 0, 1000, 0, 0, 0, 2000, 200, "patterns/walltexture.avif",1],  // back wall
  [1000, 0, 0, 0, 90, 0, 2000, 200, "patterns/walltexture.avif",1], //Right wall
  [-1000, 0, 0, 0, 90, 0, 2000, 200, "patterns/walltexture.avif",1],  //Left Wall
  [0,  100,   0,  90,   0,  0,  2000,  2000, "patterns/ground.jpg",1],  // Floor
  [0, 0, -100, 0, 0, 0, 900, 200, "patterns/walltexture.avif",0.35], //small mid wall
  [0, 0, 800, 0, 0, 0, 1000, 200, "patterns/walltexture.avif",0.35],  // back mid wall
  [500, 0, 300, 0, 90, 0, 1000, 200, "patterns/walltexture.avif",0.35], //Right mid wall
  [-500, 0, 300, 0, 90, 0, 1000, 200, "patterns/walltexture.avif",0.35],  //Left mid Wall
  //cube
  [0, 0, -600, 0, 0, 0, 200, 200, "#1868e1",1], // cube blue wall
  [0, 0, -400, 0, 0, 0, 200, 200, "#e1182f",1], //cube red wall
  [100, 0, -500, 0, 90, 0, 200, 200, "#cd18e1",1], // cube purple wall
  [-100, 0, -500, 0, 90, 0, 200, 200, "#020e4e",1],  // cube darkblue Wall
  [0, 100, -500, 90, 0, 0, 200, 200, "#f8d206",1], //cube yellow wall
  [0, -100, -500, 90, 0, 0, 200, 200, "#9c0789",1], //cube pink wall
  //Maze
  [800,0,-600,0,90,0,500,200,"patterns/maze1.avif",1],
  [500,0,-665,0,0,0,600,200,"patterns/maze1.avif",1], //line 1
  [500,0,-595,0,0,0,600,200,"patterns/maze1.avif",1], //line 2
  [200,0,-630,0,-90,0,70,200,"patterns/maze1.avif",1], //small connecting Wall
  [900,0,-600,0,90,0,500,200,"patterns/maze1.avif",1], //base
  [850,0,-850,0,0,0,100,200,"patterns/maze1.avif",1], // base side1
  [850,0,-350,0,0,0,100,200,"patterns/maze1.avif",1],	// base side2
];


squareArray[1] = [
  [-500,50,-800,0,0,0,50,50,"#69265A"],
  [-900,50,50,0,0,0,50,50,"#69265A"],
  [300,50,100,0,0,0,50,50,"#69265A"],
];


startArray[1] = [
  [900, 0, 900, 0, 180,0],
];

finishArray[1] = [
  [400, 100, 400, 90, 0, 0, 250, 250, "patterns/portal2.gif", 1] // Portal
];

coinsArray[1] = [
  [500,30,-300,0,0,0,50,50,"patterns/coin.png",1,50],
  [-200,30,-500,0,0,0,50,50,"patterns/coin.png",1,50],
  [-700,30,400,0,0,0,50,50,"patterns/coin.png",1,50],
];

keysArray[1] = [
  [-500,30,-800,0,0,0,50,50,"patterns/key.png",1,50],

];

diamondsArray[1] = [
  [500,20,-300,0,0,0,50,50,"patterns/diamond1.png",1,50],
  [-900,20,-50,0,0,0,50,50,"patterns/diamond1.png",1,50],
  [-300,20,100,0,0,0,50,50,"patterns/diamond1.png",1,50],
];
