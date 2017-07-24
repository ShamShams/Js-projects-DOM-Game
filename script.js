// TODO: Ajouter RÈGLES DU JEU :\n\nVous êtes 2 joueurs qui jouez chacun votre tour.\n\nÀ chaque tour, vous pouvez lancer le dé autant de fois que vous voulez en cliquant sur ROLL DICE. Chaque résultat est ajouté à votre score CURRENT. \n\nMais si vous obtenez 1, votre score CURRENT se perd et c'est à votre adversaire de jouer.\n\nVous pouvez choisir d'ajouter votre score CURRENT à votre score total (en rouge) en cliquant sur HOLD. Après cela, votre score CURRENT retombe à 0 et c'est à votre adversaire de jouer.\n\nLe premier à atteindre un score total de 100 remporte la partie.\n\nÀ VOUS DE JOUER!")

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
turn();

function turn() {
  if(turnP1 === true) {
    document.getElementById("p1").style.fontWeight = "bold";
    document.getElementById("global1").style.fontWeight = "bold";
    document.getElementById("p1").innerHTML = "PLAYER 1  <i class='icon ion-record'>";
    document.querySelector(".playground").style.backgroundImage = "url(images/backgroundP1.png)";
  } else {
    document.getElementById("p1").style.fontWeight = "normal";
    document.getElementById("global1").style.fontWeight = "normal";
    document.getElementById("p1").innerHTML = "PLAYER 1";
    document.querySelector(".playground").style.backgroundImage = "url(images/backgroundP2.png)";
  };
  if(turnP2 === true) {
   document.getElementById("p2").style.fontWeight = "bold";
   document.getElementById("global2").style.fontWeight = "bold";
   document.getElementById("p2").innerHTML = "PLAYER 2  <i class='icon ion-record'>";
   document.querySelector(".playground").style.backgroundImage = "url(images/backgroundP2.png)";
 } else {
   document.getElementById("p2").style.fontWeight = "normal";
   document.getElementById("global2").style.fontWeight = "normal";
   document.getElementById("p2").innerHTML = "PLAYER 2";
   document.querySelector(".playground").style.backgroundImage = "url(images/backgroundP1.png)";
 }
}

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
  turn();
  document.getElementById("dice-img").src = "";
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
  turn();
}

function hold() {
  if(turnP1 === true) {
    global1 += round1;
    pts1.innerHTML = global1;
    round1 = 0;
    current1.innerHTML = round1;
    if(global1 >= 100) {
      alert("PLAYER 1 WINS !");
      newGame();
    } else {
      document.getElementById("dice-img").src = "";
      turnP1 = false;
      turnP2 = true;
    }
  } else {
    global2 += round2;
    pts2.innerHTML = global2;
    round2 = 0;
    current2.innerHTML = round2;
    if(global2 >= 100) {
      alert("PLAYER 2 WINS !");
      newGame();
    } else {
      document.getElementById("dice-img").src = "";
      turnP2 = false;
      turnP1 = true;
    }
  }
  turn();
}
