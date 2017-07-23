var round1 = 0;
var current1 = document.getElementById("round1");
current1.innerHTML = round1;

var round2 = 0;
var current2 = document.getElementById("round2");
current2.innerHTML = round2;

var global1 = 0;
var pts1 = document.getElementById("global1");
pts1.innerHTML = global1;

var global2 = 0;
var pts2 = document.getElementById("global2");
pts2.innerHTML = global2;

var turnP1 = true;
var turnP2 = false;

function newGame() {
  global1 = 0;
  pts1.innerHTML = global1;
  round1 = 0;
  current1.innerHTML = round1;
  global2 = 0;
  pts2.innerHTML = global2;
  round2 = 0;
  current2.innerHTML = round2;
  turnP1 = true;
  turnP2 = false;
  setTurn();
}

function setTurn() {
  turnP1 === true ? document.getElementById("p1").style.fontWeight = "bold" : document.getElementById("p1").style.fontWeight = "normal";
  turnP2 === true ? document.getElementById("p2").style.fontWeight = "bold" : document.getElementById("p2").style.fontWeight = "normal";
}


function rollDice() {
  var dice = Math.floor(Math.random() * (6 -1 +1)) + 1;
  document.getElementById("dice-img").src = "images/dice-"+dice+".png";
  if(turnP1 === true) {
    if(dice != 1) {
      round1 += dice;
      current1.innerHTML = round1;
    } else {
      round1 = 0;
      current1.innerHTML = round1;
      turnP1 = false;
      turnP2 = true;
    }
  } else {
    if(dice != 1) {
      round2 += dice;
      current2.innerHTML = round2;
    } else {
      round2 = 0;
      current2.innerHTML = round2;
      turnP2 = false;
      turnP1 = true;
    }
  }
  setTurn();
}

function hold() {
  if(turnP1 === true) {
    global1 += round1;
    pts1.innerHTML = global1;
    round1 = 0;
    current1.innerHTML = round1;
    if(global1 >= 100) {
      alert("Bravo Joueur 1, vous avez gagné !");
      newGame();
    } else {
      turnP1 = false;
      turnP2 = true;
    }
  } else {
    global2 += round2;
    pts2.innerHTML = global2;
    round2 = 0;
    current2.innerHTML = round2;
    if(global2 >= 100) {
      alert("Bravo Joueur 2, vous avez gagné !");
      newGame();
    } else {
      turnP2 = false;
      turnP1 = true;
    }
  }
  setTurn();
}
