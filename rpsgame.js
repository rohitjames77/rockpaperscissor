 

 let input = ["rock","paper","scissors"];


function getComputerChoice() {
let computerSelection = input[Math.floor(Math.random() * input.length)];

return computerSelection;
}


function playerInput(){
   let playerSelection= prompt("Whats ur Choice , ROCK PAPER SCISSORS?",);
   return playerSelection;
}



function playRound(playerSelection,computerSelection){
if ( playerSelection == "rock" && computerSelection == "paper"){
   return "You Lose";
} else {
   return "you Win";
}

}
let computerSelection= getComputerChoice();
let playerSelection = playerInput();
console.log(playRound(playerSelection,computerSelection));
   
