

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
  function startSnake(){
alert("Snake arrivera bientôt 🐍");
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
}
