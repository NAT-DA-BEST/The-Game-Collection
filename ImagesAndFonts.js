function preload(){
  print("preloading")
  solitareTitle = loadImage("assets/title-screen/NatsSolitare.jpeg",success, failure);
  pongTitle = loadImage("assets/title-screen/pong.jpg",success, failure);
  snakeTitle = loadImage("assets/title-screen/snake.png",success, failure);
  twistyArrowTitle = loadImage("assets/title-screen/twistyArrow.jpeg",success, failure);
  //Clubs
  clubsAce = loadImage("assets/solitareCards/Clubs/Ace.png",success, failure);
  clubs2 = loadImage("assets/solitareCards/Clubs/2.png",success, failure);
  clubs3 = loadImage("assets/solitareCards/Clubs/3.png",success, failure);
  clubs4 = loadImage("assets/solitareCards/Clubs/4.png",success, failure);
  clubs5 = loadImage("assets/solitareCards/Clubs/5.png",success, failure);
  clubs6 = loadImage("assets/solitareCards/Clubs/6.png",success, failure);
  clubs7 = loadImage("assets/solitareCards/Clubs/7.png",success, failure);
  clubs8 = loadImage("assets/solitareCards/Clubs/8.png",success, failure);
  clubs9 = loadImage("assets/solitareCards/Clubs/9.png",success, failure);
  clubs10 = loadImage("assets/solitareCards/Clubs/10.png",success, failure);
  clubsJack = loadImage("assets/solitareCards/Clubs/Jack.png",success, failure);
  clubsQueen = loadImage("assets/solitareCards/Clubs/Queen.png",success, failure);
  clubsKing = loadImage("assets/solitareCards/Clubs/King.png",success, failure);
  //Diamonds
  diamondsAce = loadImage("assets/solitareCards/Diamonds/Ace.png",success, failure);
  diamonds2 = loadImage("assets/solitareCards/Diamonds/2.png",success, failure);
  diamonds3 = loadImage("assets/solitareCards/Diamonds/3.png",success, failure);
  diamonds4 = loadImage("assets/solitareCards/Diamonds/4.png",success, failure);
  diamonds5 = loadImage("assets/solitareCards/Diamonds/5.png",success, failure);
  diamonds6 = loadImage("assets/solitareCards/Diamonds/6.png",success, failure);
  diamonds7 = loadImage("assets/solitareCards/Diamonds/7.png",success, failure);
  diamonds8 = loadImage("assets/solitareCards/Diamonds/8.png",success, failure);
  diamonds9 = loadImage("assets/solitareCards/Diamonds/9.png",success, failure);
  diamonds10 = loadImage("assets/solitareCards/Diamonds/10.png",success, failure);
  diamondsJack = loadImage("assets/solitareCards/Diamonds/Jack.png",success, failure);
  diamondsQueen = loadImage("assets/solitareCards/Diamonds/Queen.png",success, failure);
  diamondsKing = loadImage("assets/solitareCards/Diamonds/King.png",success, failure);
  //Hearts
  heartsAce = loadImage("assets/solitareCards/Hearts/Ace.png",success, failure);
  hearts2 = loadImage("assets/solitareCards/Hearts/2.png",success, failure);
  hearts3 = loadImage("assets/solitareCards/Hearts/3.png",success, failure);
  hearts4 = loadImage("assets/solitareCards/Hearts/4.png",success, failure);
  hearts5 = loadImage("assets/solitareCards/Hearts/5.png",success, failure);
  hearts6 = loadImage("assets/solitareCards/Hearts/6.png",success, failure);
  hearts7 = loadImage("assets/solitareCards/Hearts/7.png",success, failure);
  hearts8 = loadImage("assets/solitareCards/Hearts/8.png",success, failure);
  hearts9 = loadImage("assets/solitareCards/Hearts/9.png",success, failure);
  hearts10 = loadImage("assets/solitareCards/Hearts/10.png",success, failure);
  heartsJack = loadImage("assets/solitareCards/Hearts/Jack.png",success, failure);
  heartsQueen = loadImage("assets/solitareCards/Hearts/Queen.png",success, failure);
  heartsKing = loadImage("assets/solitareCards/Hearts/King.png",success, failure);
  //Spades
  spadesAce = loadImage("assets/solitareCards/Spades/Ace.png",success, failure);
  spades2 = loadImage("assets/solitareCards/Spades/2.png",success, failure);
  spades3 = loadImage("assets/solitareCards/Spades/3.png",success, failure);
  spades4 = loadImage("assets/solitareCards/Spades/4.png",success, failure);
  spades5 = loadImage("assets/solitareCards/Spades/5.png",success, failure);
  spades6 = loadImage("assets/solitareCards/Spades/6.png",success, failure);
  spades7 = loadImage("assets/solitareCards/Spades/7.png",success, failure);
  spades8 = loadImage("assets/solitareCards/Spades/8.png",success, failure);
  spades9 = loadImage("assets/solitareCards/Spades/9.png",success, failure);
  spades10 = loadImage("assets/solitareCards/Spades/10.png",success, failure);
  spadesJack = loadImage("assets/solitareCards/Spades/Jack.png",success, failure);
  spadesQueen = loadImage("assets/solitareCards/Spades/Queen.png",success, failure);
  spadesKing = loadImage("assets/solitareCards/Spades/King.png",success, failure);
}
function failure(event){
  console.error("Oopsies," + event);
}
function success(){
  console.log("Loaded")
}