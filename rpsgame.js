 

let input = ["rock","paper","scissors"];

function getComputerChoice() {
let choice = input[Math.floor(Math.random() * input.length)];
return choice;
 }
 

function playRound(playerSelection,computerSelection){
if (computerSelection == computerSelection){
   return "tie"
}
else if (playerSelection == "rock" && computerSelection == "scissors" ||
playerSelection == "scissors" && computerSelection == "paper" ||
playerSelection == "paper" && computerSelection == "rock"){
   return "player";

}else{
   return "computer";
} 

}
function game (){
   let result = playRound(playerSelection, computerSelection);
   if (result == "tie"){
      return "its a tie ";
   }else if ( result == "player" ){
      return "you Won ";

     }else {
      return "you Lose";
     }
     

     

}
   let playerSelection = "rock";
   let computerSelection = getComputerChoice();
   console.log(playRound(playerSelection, computerSelection));
