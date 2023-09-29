 

 let input = ["rock","paper","scissors"];


function getComputerChoice() {
let computerSelection = input[Math.floor(Math.random() * input.length)];
console.log(computerSelection);
return computerSelection;
}


function playerInput(){
   let playerSelection= prompt("Whats ur Choice , ROCK PAPER SCISSORS?",);
   console.log(playerSelection);
   return playerSelection;
}



function playRound(playerSelection,computerSelection){
if ( playerSelection == "rock" && computerSelection == "paper"){

   return "computer";
}if(playerSelection == "paper" && computerSelection == "rock"){
return "player";
}
if (playerSelection == "scissors" && computerSelection == "rock"){
return "computer";
}if (playerSelection == "rock" && computerSelection == "scissors"){
return "player";
}
if (playerSelection == "paper" && computerSelection == "scissors"){
return "computer";
}
if (playerSelection == "scissors" && computerSelection == "paper"){
return 
}else {
   return "tied";
}

}

let playerSelection= playerInput();
computerSelection= getComputerChoice(); 
console.log(playRound(playerSelection,computerSelection));

function game(){
   let result = score(playerSelection,computerSelection)
      if(result == "player"){
      return "Player Wins";
   } 
   else if (result == "computer"){
      return "Computer Wins";
   }else { return " Its tied";

   }
   }

game();