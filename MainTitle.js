var gameSelect = 1;
let white = 255;
let black = 0;
var numOfGames = 4;
var gameStarted = false;
function setup() {
  createCanvas(1000, 800);
  background(black);
  fill(white);
  textSize(50);
  imageMode(CENTER);
  rectMode(CENTER);
 // image(solitareTitle, 10,10);
}
/*************************
 *This is the game selector
 **************************/
/*
this is just a place holder 
(Music?)
*/
function keyPressed() {
  if (keyCode === DOWN_ARROW && gameStarted === false) {
    print("down");
    gameSelect = gameSelect - 1;
    if (gameSelect < 1) {
      gameSelect = numOfGames;
      print("Back to start")
    }
  }
  if (keyCode === UP_ARROW && gameStarted === false) {
    print("up");
    gameSelect += 1;
    if (gameSelect > 4) {
      gameSelect = 1;
    }
  }
  if (keyCode === ENTER && gameStarted === false) {
    print("enter");
    bootGame();
  }
  if (key === 'f' && gameStarted === true){
    fullscreen(true);
  }
}
function bootGame() {
  print("Starting");
  background(black);
  gameStarted = true;
  if (gameSelect === 1) {
    pongStart();
  } else if (gameSelect === 2) {
    snakeStart();
  } else if (gameSelect === 3) {
    solitareStart();
  } else if (gameSelect === 4) {
    twistyArrowStart();
  }
}
function draw(){
  if(gameStarted === false){
    background(black);
    textSize(50);
    if (gameSelect == 1){
      rect(500,400,700,500);
      image(pongTitle, 500,400);
      text("Pong",500,700);
    }else if(gameSelect == 2){
      rect(500,400,700,500);
      image(solitareTitle, 500,400);
      text("Solitare",500,700);
    }else if(gameSelect == 3){
      image(snakeTitle, 500,400);
      text("Snake",500,700);
    }else if(gameSelect == 4){
      image(twistyArrowTitle, 500,400);
      text("Twisty Arrow",500,700);
    }
    textSize(10);
    text("Press Up & Down Arrow to scroll thru games and enter to select, F to fullscreen in games",10,10);
  }
  //text("game = " + gameSelect,10,10);
}