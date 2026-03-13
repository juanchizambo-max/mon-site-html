

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
}
