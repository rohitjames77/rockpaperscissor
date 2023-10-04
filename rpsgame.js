
 const input = ["rock","paper","scissors"];

function getComputerChoice() {
let computerSelection = input[Math.floor(Math.random() * input.length)];
//console.log(computerSelection);
return computerSelection;
}


function playerInput(){
   let playerSelection= prompt("Whats ur Choice , ROCK PAPER SCISSORS?",);
   //console.log(playerSelection);
return playerSelection.toLowerCase().trim();
}


let playerSelection= playerInput();
let computerSelection= getComputerChoice(); 
let checkWinner = (playerSelection, computerSelection);
function playRound(playerSelection,computerSelection){

let player = 0;
let computer = 0;
let tie = 0; 
if ( playerSelection == "rock" && computerSelection == "paper"){
console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
  return computer;
}if(playerSelection == "paper" && computerSelection == "rock"){
console.log(`You Win ${playerSelection} beats ${computerSelection} `);
  return player;
}if (playerSelection == "scissors" && computerSelection == "rock"){
console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
  return computer;
}if (playerSelection == "rock" && computerSelection == "scissors"){
console.log(`You Win ${playerSelection} beats ${computerSelection} `);
  return player;
}if (playerSelection == "paper" && computerSelection == "scissors"){
console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
  return computer;
}if (playerSelection == "scissors" && computerSelection == "paper"){
console.log(`You Win ${playerSelection} beats ${computerSelection} `);
  return player;
}else {
  console.log("its a Tie");
return tie;
}


}


function game (){
   for (let i = 0 ;i < 5; i++) {
   let playerSelection= playerInput();
   let computerSelection= getComputerChoice(); 
   console.log(playRound(playerSelection,computerSelection));
   if (checkWinner(playerSelection,computerSelection)== player){
       player++;
  }
  else if (checkWinner(playerSelection,computerSelection)== computer){
 computer++;
   }  else {
    tie++;
   }
}
}
game();
