

window.onload = function(){

/* MENU */
function toggleMenu(){
document.querySelector(".nav-links").classList.toggle("active");
}
window.toggleMenu = toggleMenu;

/* RANDOM NUMBER */
window.jouer = function(){
let nombre = Math.floor(Math.random()*10)+1;
document.getElementById("resultat").textContent =
"Le nombre est : " + nombre;
}

/* ------------------ */
/* PONG GAME */
/* ------------------ */

let pongGame;

window.startPong = function(){

const canvas = document.getElementById("pongCanvas");
const ctx = canvas.getContext("2d");
canvas.requestFullscreen();
let ballX = canvas.width/2;
let ballY = canvas.height/2;

let ballDX = 4;
let ballDY = 4;

let paddleY = 150;
const paddleHeight = 80;

canvas.addEventListener("mousemove", function(e){
const rect = canvas.getBoundingClientRect();
paddleY = e.clientY - rect.top - paddleHeight/2;
});

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

/* mur droite */
if(ballX > canvas.width){
ballDX = -ballDX;
}

}

pongGame = setInterval(draw,20);

}

/* ------------------ */
/* SNAKE GAME */
/* ------------------ */
let snakeGame;

window.startSnake = function(){

const canvas = document.getElementById("snake");
const ctx = canvas.getContext("2d");

canvas.requestFullscreen();

let snake = [{x:200,y:200}];
let dx = 20;
let dy = 0;

let score = 0;

let food = {
x: Math.floor(Math.random()*20)*20,
y: Math.floor(Math.random()*20)*20
};

document.addEventListener("keydown", changeDirection);

function changeDirection(e){
if(e.key === "ArrowUp" && dy === 0){dx=0;dy=-20;}
if(e.key === "ArrowDown" && dy === 0){dx=0;dy=20;}
if(e.key === "ArrowLeft" && dx === 0){dx=-20;dy=0;}
if(e.key === "ArrowRight" && dx === 0){dx=20;dy=0;}
}

function drawGame(){

ctx.clearRect(0,0,400,400);

/* mouvement */
let head = {x:snake[0].x+dx,y:snake[0].y+dy};

/* collision mur */
if(head.x<0 || head.x>=400 || head.y<0 || head.y>=400){
clearInterval(snakeGame);
alert("Game Over 🐍 Score: "+score);
return;
}

snake.unshift(head);

/* nourriture */
if(head.x===food.x && head.y===food.y){

score++;

food = {
x: Math.floor(Math.random()*20)*20,
y: Math.floor(Math.random()*20)*20
};

}else{
snake.pop();
}

/* serpent */
ctx.fillStyle="lime";
snake.forEach(part=>{
ctx.fillRect(part.x,part.y,20,20);
});

/* nourriture */
ctx.fillStyle="red";
ctx.fillRect(food.x,food.y,20,20);

/* score */
ctx.fillStyle="white";
ctx.font="20px Arial";
ctx.fillText("Score: "+score,10,20);

}

snakeGame = setInterval(drawGame,100);

}
}
