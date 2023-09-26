let greet = "Hi There ! Wanna Play some ROCK PAPER SCISSORS ?"

let input = ["rock", "paper","scissors"];
function getComputerChoice(){
  console.log(input[(Math.floor(Math.random()*input.length))]);
}
 
let playerSelection= "rock";
let computerSelection = getComputerChoice();
function playRound(playerSelection, computerSelection ){   
if (playerSelection == "rock" && computerSelection == getComputerChoice() ){
  true;
}
}














 
  

 

