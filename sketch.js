var database;
var back_img;

var gameState =0;
var playerCount = 0;
var score =0;

var allPlayers;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var player1score =0;
var player2score =0;

var xVelocity,yVelocity;



function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(windowWidth - 25, 676);
  console.log(windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  form = new Form();
  
}

function draw() {
  background(back_img);
  
  

  // Add conditions for gameStates and playerCount
  if(playerCount === 2){
    clear();
    game.update(1);
  }
  if(gameState === 1){
    game.play();
    fill(255);
    textSize(15);
    textAlign(CENTER);
    text("Score 15 Points to win the Game",width/2,20);
  }
  if(player.score > 14){
    game.end();
  }

  
  

}

