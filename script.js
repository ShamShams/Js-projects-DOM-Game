var round1 = 0;
var current1 = document.getElementById("round1");
current1.innerHTML = round1;
//Affecte la valeur de la var round1 à mon paragraphe "round1" pour qu'elle s'affiche.

var round2 = 0;
var current2 = document.getElementById("round2");
current2.innerHTML = round2;

var global1 = 0;
var pts1 = document.getElementById("global1");
pts1.innerHTML = global1;

var global2 = 0;
var pts2 = document.getElementById("global2");
pts2.innerHTML = global2;

//A chaque début de partie c'est au player 1 (p1) de commencer.
var turnP1 = true;
var turnP2 = false;
turn();

//Cette fonction change le style du texte, l'icone et le fond d'écran à chaque tour.
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

//A chaque nouvelle partie les points sont remis à 0, le tour repasse au player 1 et le dé disparait.
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

function rollDice() {  //fonction lorsqu'on clique sur le <p> ROLL DICE.
  var dice = Math.floor(Math.random() * (6 -1 +1)) + 1;  //Définit un nombre entier aléatoire entre 1 et 6.
  document.getElementById("dice-img").src = "images/dice-"+dice+".png";  //L'image du dé change selon la valeur de dice.
  if(turnP1 === true) {  //lorsque c'est au tour du player 1...
    if(dice != 1) { //Si la valeur du dé est différente de 1.
      round1 += dice;  //La valeur du dé s'ajoute au score round (current) du player 2
      current1.innerHTML = round1;  //et elle s'ajoute dans le HTML et remplace l'ancienne valeur (si il y a)
    } else {
      round1 = 0; //Si le dé = 1, le player perd son score round.
      current1.innerHTML = round1;
      turnP1 = false;  //le tour passe au player 2.
      turnP2 = true;
    }
  } else {  // même chose lorsque c'est le tour du player 2.
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
  turn();  //On redéfinit les styles, icones et background à chaque changement de tour.
}

function hold() { //fonction lorsqu'on clique sur le <p> HOLD.
  if(turnP1 === true) {
    global1 += round1;  //On ajoute le score Round au score global du player 1.
    pts1.innerHTML = global1;
    round1 = 0;  //Le score round retombe à 0.
    current1.innerHTML = round1;
    if(global1 >= 100) {  //Si le score global du player 1 atteint 100...
      alert("PLAYER 1 WINS !");
      newGame();  //...une nouvelle partie commence.
    } else {
      document.getElementById("dice-img").src = ""; //l'image du dé disparait.
      turnP1 = false; //sinon le tour passe au player 2.
      turnP2 = true;
    }
  } else {  //même chose lorsque c'est au player 2 de jouer.
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
