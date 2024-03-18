function pongStart() {
  print("Pong is starting");
  rectMode(CORNER);
  fill(white);
  resizeCanvas(996,516);
  textFont('ariel',100)
  // Start the game loop
  gameLoop();
}  
/*************
(will add slider in game later)
Difficulty changer!!!!!
1 = Easy
2 = Mediem
3 = Hard
**************/
let diff = /*change it here*/ 1.3;
let highScore = 0;
// Define the paddle's properties
let paddleY = 150; // Initial vertical position
let paddleHeight = 100; // Height of the paddle
let paddleWidth = 20; // Width of paddle
let paddleSpeed = 2; // Speed of the paddle
//points and speed stuff
let side;
let speedInc = 0.5;
let gameTimer = 0;
var playerPoints = 0;
var AIpoints = 0;
//game stuff
let ball = { x: 498, y: 257, radius: 10, dx: -4, dy: 2 };
let paddle1 = { x: 50, y: 257, pWidth: 10, pHeight: 100 ,speed:0.5 + diff};
let paddle2 = { x: 950, y: 257, pWidth: -10, pHeight: 100};
function midLine(){
  // Draw a dotted line
  strokeWeight(2);
  for (let x = 0; x < width - 20; x += 10) {
    line(498, x, 498, x + 5); // Draw a short line segment
  }
}
// Collision detection
function collisionDetection(paddle) {
  if (abs(ball.x -(paddle.x + paddle.pWidth)) < ball.radius && ball.y > paddle.y && ball.y < paddle.y + 100) {
    print("Collision");
    return true; // Collision detected!
  }
  return false; // No collision
}
// Function to move the paddle up
function movePaddleUp() {
  if (paddle1.speed > 10){
    paddle1.speed = 10; 
  }
  paddle1.y -= paddle1.speed;
}
// Function to move the paddle down
function movePaddleDown() {
  if (paddle1.speed > 10){
    paddle1.speed = 10; 
  }
  paddle1.y += paddle1.speed;
}
// Function to draw the paddle
function drawPaddle(x) {
  noStroke();
  fill(255,255,255)
  if(x === "AI"){
    rect(paddle1.x, paddle1.y, paddle1.pWidth, paddle1.pHeight);
  }else{
    if(mouseY < 0){
      paddle2.y = 0;
    }else if(mouseY > height){
      paddle2.y = height;
    }else{
      paddle2.y = mouseY;
    }
    rect(paddle2.x, paddle2.y, paddle2.pWidth, paddle2.pHeight);
  }
}
// Function to draw the ball
function drawBall() {
  stroke("#FFFFFF");
  strokeWeight(10);
  point(ball.x, ball.y);
}
// Function to update the AI's paddle
function updateAI() {
  // If the center of the paddle is above the ball, move down
  if (paddle1.y + paddle1.pHeight / 2 < ball.y) {
      movePaddleDown();
  // If the center of the paddle is below the ball, move up
  }else if (paddle1.y + paddle1.pHeight / 2 > ball.y) {
      movePaddleUp();
  }
}
// Function to update the ball's position
function updateBall() {
  ball.x += ball.dx;
  ball.y += ball.dy;
  // Check for collision with top or bottom of the screen
  if (ball.y < 0 || ball.y > height) {
    ball.dy = -ball.dy; 
  }
  //collison with paddles
  if (collisionDetection(paddle1)){
    ball.dx = -ball.dx;
    let changeY = random(['yes1','no','no','yes2','no']);
    if(changeY === 'yes1'){
      ball.dy = -ball.dy;
    }else if(changeY === 'yes2'){
      ball.dy = -ball.dy+ diff*2;
    }
  }
  if (collisionDetection(paddle2)){
    ball.dx = -ball.dx;
    let changeY = random(['yes1','no','no','yes2','no']);
    if(changeY === 'yes1'){
      ball.dy = -ball.dy;
    }else if(changeY === 'yes2'){
      ball.dy = -ball.dy+ diff*2;
    }
    playerPoints++;
  }
  if (ball.x === 498) {
    side = "middle";
  }else if (ball.x < 498){
    side = "left";
  }else if (ball.x > 498){
    side = "right";
  }
  if (ball.x < 0 || ball.x > width){
   gamePoint();
  }
}
function gamePoint(){
  if (side === "right"){
    AIpoints++;
  }else if(side === "left"){
    playerPoints++;
  }
  ball.x = 498;
}
function drawPoints(){
  text("vollyed",100,100);
  text(playerPoints,550,100);
}
function gameOver(){
  text("Game Over!!!",width/2,height/2);
}
function drawHighScore(){
  //draw a high score
}

// Game loop
function gameLoop() {
  gameTimer++;
  // Clear the canvas and make line in middle
  background(0,0,0);
  midLine();
  // Update the AI's paddle
  updateAI();
  if(gameTimer > 60){
    updateBall();
  }
  // Draw the paddle and ball
  drawPaddle("AI");
  drawPaddle("Human");
  drawBall();
  drawPoints();
  drawHighScore();
  if (AIpoints === 1){
    gameOver();
    ball.dx = -4;
    ball.x = 498;
    ball.y = height/2;
    gameTimer = 0;
    AIpoints = 0;
    if (playerPoints > highScore){
      highScore = playerPoints;
    }
    playerPoints = 0;
    requestAnimationFrame(gameLoop);
  }else{
  // Call the game loop again on the next frame
  requestAnimationFrame(gameLoop);
  }
}