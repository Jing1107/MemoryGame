console.log("Up and running!");

/*var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);*/



cards = ['queen', 'queen', 'king', 'king'];
cardsInPlay = [];

var cardOne = cards [0];
var cardTwo = cards [2];
cardsInPlay.push (cardOne);
cardsInPlay.push (cardTwo);
console.log(" User flipped " + cardOne);
console.log(" User flipped " + cardTwo);


if (cardsInPlay[0] === cardsInPlay[2]){
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
}
