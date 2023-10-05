 console.log("Hi There ! Wanna Play some ROCK PAPER SCISSORS ?");

 const input = ["rock","paper","scissors"];

function getComputerChoice() {
let computerSelection = input[Math.floor(Math.random() * input.length)];
//console.log(computerSelection);
return computerSelection;
}


function playerInput(){
let rightInput = false;
let inputChoice = prompt("Whats ur Choice , ROCK PAPER SCISSORS?",);
  while (rightInput = false){
   inputChoice = prompt("Whats ur Choice , ROCK PAPER SCISSORS?",);
  if (playerSelection == null){
    continue;
     }
} 
lowerInput = inputChoice.toLowerCase();
if (input.includes(lowerInput)){
   rightInput = true;
  return lowerInput;
}

}




let playerSelection= playerInput();
   let computerSelection= getComputerChoice(); 

function playRound(playerSelection,computerSelection){

if ( playerSelection == "rock" && computerSelection == "paper"){
console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
  return  "computer" ;
}
if(playerSelection == "paper" && computerSelection == "rock"){
console.log(`You Win ${playerSelection} beats ${computerSelection} `);
  return "player";
}
if (playerSelection == "scissors" && computerSelection == "rock"){
console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
  return  "computer" ;
}
if (playerSelection == "rock" && computerSelection == "scissors"){
  console.log(`You Win ${playerSelection} beats ${computerSelection} `);
  return  "player" ;
}
if (playerSelection == "paper" && computerSelection == "scissors"){
console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
  return  "computer" ;
}
if (playerSelection == "scissors" && computerSelection == "paper"){
    console.log(`You Win ${playerSelection} beats ${computerSelection} `);
  return "player";
}
else {
   return "tie";
}

}
playRound();
 

function game (){

  let playerScore=0;
  let computerScore =0;
   for (let i = 0 ;i < 5; i++) {
   let playerSelection= playerInput();
   let computerSelection= getComputerChoice(); 
   console.log(playRound(playerSelection,computerSelection));
   if (playRound(playerSelection,computerScore)== "player"){
    playerScore++ ;
   }else if (playRound(playerSelection.computerSelection)=="computer"){
    computerScore++ ; 
  }
   if (playerScore > computerScore) {
    console.log("Player Win's the Game");
   }
   else if (playerScore < computerScore){
 console.log("Computer Win's the Game");
  }
   else {
    console.log("We have a Tie"); 
  
  }

   }
  }
   game();












 
  

 
