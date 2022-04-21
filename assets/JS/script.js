/*
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
 */

const playBtn = document.getElementById("play");
const numberList = [];

playBtn.addEventListener("click", init);

function init(){
  
}

function getSquaresQuantity(){
  const diffSel = document.getElementById("difficulty").value;
  let quantity;
  switch(diffSel){
    case "1":
      quantity = 100;
      break;
    case "2":
      quantity = 81;
      break;
    case "3":
      quantity = 49;
      break;
    default:
      quantity = 0;
      break;
  }
  return quantity;
}

function getUniqueRandomNumber(min, max){
  let number = null;
  let valid = false;
  while(!valid){
    number = getRandomNumber(min, max);
    if(!numberList.includes(number)){
      valid = true;
      numberList.push(number);
    }
  }
  return number;
}

function getRandomNumber(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}