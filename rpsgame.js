

let input = prompt("Rock Paper Scissors");
let playerSelection = input;
let choices = ["rock", "paper","scissors"];
function getComputerChoice(){
return(choices[(Math.floor(Math.random()*choices.length))]);
}
let computerSelection = getComputerChoice();

function playRound(playerSelection,computerSelection){
   var victory= "you win";
   var loss = "You lose";
   var tied = "Its a Tie";
if (playerSelection == computerSelection){
return tied;
}else if  (playerSelection == "paper" && computerSelection == "rock"){
   return victory;
} else if ( playerSelection == "rock" &&  computerSelection == "paper"){
   return loss;
} else if (playerSelection == "scissor" && computerSelection == "paper"){
   return victory;
}else if (playerSelection == "paper" && computerSelection == "scissors"){
   return loss;
}else if ( playerSelection == "rock" && computerSelection == " scissors"){
   return victory; 
}else if ( playerSelection == "scissors" && computerSelection == "rock"){
   return loss;
}
}

function game(playRound){
for(var i = 0; i< 5; i++){
   return(playRound(playerSelection, computerSelection));
}
}
console.log(game(playRound));
console.log(game(playRound));
console.log(game(playRound));




 








