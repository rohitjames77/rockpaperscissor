 console.log("Hi There ! Wanna Play some ROCK PAPER SCISSORS ?");

 const input = ["rock","paper","scissors"];

function getComputerChoice() {
let computerSelection = input[Math.floor(Math.random() * input.length)];
console.log(computerSelection);
return computerSelection;
}

function playerInput(){  
let playerInput = prompt("ROCK PAPER SCISSORS");

let lowerCaseInput = playerInput.toLowerCase();
if(input.includes(lowerCaseInput)){
  console.log(lowerCaseInput);
  return lowerCaseInput;
}
}

function playRound(playerSelection,computerSelection){
   
if ( playerSelection == "rock" && computerSelection == "paper"){
  return  "computer" ;
}
if(playerSelection == "paper" && computerSelection == "rock"){
  return "player";
}
if (playerSelection == "scissors" && computerSelection == "rock"){
  return  "computer" ;
}
if (playerSelection == "rock" && computerSelection == "scissors"){
  return  "player" ;
}
if (playerSelection == "paper" && computerSelection == "scissors"){
  return  "computer" ;
}
if (playerSelection == "scissors" && computerSelection == "paper"){
  return "player";
}
else if(playerSelection == computerSelection) {
   return "tie";
}

}

function roundWinner(playerSelection,computerSelection){
let  roundResult = playRound(playerSelection,computerSelection); 
if (roundResult == "computer"){
  return `You Lose ${computerSelection} beats ${playerSelection}` ;
}
  else if (roundResult == "player"){
  return `Player Wins ${playerSelection} beats ${computerSelection}`;
}else {
  return `Its a Tie ${playerSelection} Equals ${computerSelection}`;
}


}

// function game (){
//     let playerScore= 1;
//    let computerScore =1;
//   for (let i = 0 ;i < 5; i++) {
//    let playerSelection= playerInput();
//    let computerSelection= getComputerChoice();
//    console.log(roundWinner(playerSelection,computerSelection)); 
//   if(playRound(playerSelection,computerSelection)== "player"){
//     console.log(`"Player Score" ${playerScore++}`);
//   }
//   else if (playRound(playerSelection,computerSelection)=="computer"){
//    console.log(`"Computer Score" ${computerScore++}`);
//   }
//   }
// if (playerScore > computerScore){
//   console.log("Player Win The Game");
// }
// else if (computerScore > playerScore){
//   console.log("Computer Won The Game");
// }
// console.log("Game Over");
//   }   
  
//   game();
const body = document.querySelector('body');
console.log(body); 
const btnDiv = document.createElement('div');
const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorBtn = document.createElement('button');
btnDiv.appendChild(rockBtn);
btnDiv.appendChild(paperBtn);
btnDiv.appendChild(scissorBtn);
body.appendChild(btnDiv);
btnDiv.classList.add('btnDiv');
rockBtn.textContent = 'ROCK';
paperBtn.textContent = 'PAPER';
scissorBtn.textContent = 'SCISSOR';





 
  

 
