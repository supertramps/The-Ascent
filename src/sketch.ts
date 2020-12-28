//---- GLOBAL VARIABLES ----//
let gameFrame: GameFrame;
//let mainMenu: MainMenu;
let subImage: p5.Image | p5.Element;
let bg: p5.Image | p5.Element;
let icebergImage: p5.Image | p5.Element;
let mine: p5.Image | p5.Element;

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
  subImage = loadImage("./assets/images/sub.png");
  bg = loadImage("./assets/images/Background.png");
  icebergImage = loadImage("./assets/images/iceberg5.png");
  mine = loadImage("./assets/images/mine.png");
  // sound = (window as any).loadSound('../assets/mySound.wav');
}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */
function setup() {
  gameFrame = new GameFrame();
  createCanvas(960, 720);
  frameRate(30);

  // game = new Game();
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
  //mainMenu.draw();
  
  gameFrame.draw();
  gameFrame.update();
}

//create circle with collision detector where if circle border overlaps
//with object border, objects become visible.

/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
  resizeCanvas(800, windowHeight);
}
