var backgroundImage;
var gameState=0
var playerCount,database;
var player,game,form;

function setup(){
    database=firebase.database();
    createCanvas(400,400);

    game=new Game();
    game.getState();
    game.start();
}                                                       

function draw(){

}

