

window.onload = function(){

function toggleMenu(){
document.querySelector(".nav-links").classList.toggle("active");
}
window.toggleMenu = toggleMenu;

window.jouer = function(){
let nombre = Math.floor(Math.random()*10)+1;
document.getElementById("resultat").textContent =
"Le nombre est : " + nombre;
}

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let x = 250;
let y = 150;
let dx = 3;
let dy = 3;

let game;

window.pong = function(){
if(!game){
game = setInterval(updatePong,20);
}
}

function updatePong(){
ctx.clearRect(0,0,500,300);

ctx.fillStyle="white";
ctx.fillRect(x,y,10,10);

x+=dx;
y+=dy;

if(x<0 || x>490) dx=-dx;
if(y<0 || y>290) dy=-dy;
}
  
let snakeGame;

function startSnake(){

const canvas = document.getElementById("snake");
const ctx = canvas.getContext("2d");

let snake = [{x:200,y:200}];
let dx = 20;
let dy = 0;

document.addEventListener("keydown", changeDirection);

function changeDirection(e){
if(e.key === "ArrowUp"){dx=0;dy=-20;}
if(e.key === "ArrowDown"){dx=0;dy=20;}
if(e.key === "ArrowLeft"){dx=-20;dy=0;}
if(e.key === "ArrowRight"){dx=20;dy=0;}
}

function drawGame(){

ctx.clearRect(0,0,400,400);

snake.unshift({x:snake[0].x+dx,y:snake[0].y+dy});
snake.pop();

ctx.fillStyle="lime";

snake.forEach(part=>{
ctx.fillRect(part.x,part.y,20,20);
});

}

snakeGame = setInterval(drawGame,100);

}
  let pongGame;

function startPong(){

const canvas = document.getElementById("pongCanvas");
const ctx = canvas.getContext("2d");

let ballX = canvas.width/2;
let ballY = canvas.height/2;

let ballDX = 4;
let ballDY = 4;

let paddleY = 150;
const paddleHeight = 80;

canvas.addEventListener("mousemove", movePaddle);

function movePaddle(e){
const rect = canvas.getBoundingClientRect();
paddleY = e.clientY - rect.top - paddleHeight/2;
}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="white";

/* balle */
ctx.beginPath();
ctx.arc(ballX,ballY,8,0,Math.PI*2);
ctx.fill();

/* raquette */
ctx.fillRect(10,paddleY,10,paddleHeight);

ballX += ballDX;
ballY += ballDY;

/* rebond haut bas */
if(ballY < 0 || ballY > canvas.height){
ballDY = -ballDY;
}

/* rebond raquette */
if(ballX < 20 && ballY > paddleY && ballY < paddleY+paddleHeight){
ballDX = -ballDX;
}

/* rebond mur droite */
if(ballX > canvas.width){
ballDX = -ballDX;
}

}

pongGame = setInterval(draw,20);

}
}
