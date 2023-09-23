let intro = prompt("hi Wanna Play Rock Paper Scissor", "Your Choice")
let choices = ["rock", "paper","scissors"];
function getComputerChoice(){
return(choices[(Math.floor(Math.random()*choices.length))]);
}

let playerSelection = "rock";
let computerSelection = getComputerChoice();
function playRound(computerSelection,playerSelection){
   if (computerSelection == "paper" && playerSelection == "rock" )
console.log( "You lose ! Paper beats Rock");
}




