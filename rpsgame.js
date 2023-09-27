 

 prompt("Rock Paper Scissors", );
//console.log("hi "+ playerselection);
let choices = ["rock", "paper","scissors"];
 function getComputerChoice(){
return(choices[(Math.floor(Math.random()*choices.length))]);
}
let playerSelection = "rock";
let computerSelection = getComputerChoice();
function playRound(playerSelection,computerSelection){
   if ( playerSelection === "paper" && computerSelection === "rock" || 
        playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors"&& computerSelection ==="paper"
   ){
  console.log("win");
   }
   else if (playerSelection === "rock" && computerSelection === "paper" ||
             playerSelection === "paper" && computerSelection === "scissors" ||
             playerSelection === "scissors" && computerSelection === "rock"
   ){
console.log("lose");
   }else if(playerSelection == computerSelection ){
console.log("tie");
}
 
}
playRound();
playRound();
playRound();