
 let input = ["rock","paper","scissors"];

function getComputerChoice() {
let computerSelection = input[Math.floor(Math.random() * input.length)];
//console.log(computerSelection);
return computerSelection;
}


function playerInput(){
   let playerSelection= prompt("Whats ur Choice , ROCK PAPER SCISSORS?",);
   console.log(playerSelection);
return playerSelection;
}
let playerSelection= playerInput();
computerSelection= getComputerChoice(); 
//console.log(playRound(playerSelection,computerSelection));

   
function playRound(playerSelection,computerSelection){
if ( playerSelection == "rock" && computerSelection == "paper"){
return `You Win ${playerSelection} beats ${computerSelection} `;
}if(playerSelection == "paper" && computerSelection == "rock"){
return `You Win! ${playerSelection} beats ${computerSelection}`;
}if (playerSelection == "scissors" && computerSelection == "rock"){
return `You Lose! ${computerSelection} beats ${playerSelection}`;
}if (playerSelection == "rock" && computerSelection == "scissors"){
return `You Win! ${playerSelection} beats ${computerSelection}`;
}if (playerSelection == "paper" && computerSelection == "scissors"){
return `You Lose! ${computerSelection} beats ${playerSelection}`;
}if (playerSelection == "scissors" && computerSelection == "paper"){
return`You Win! ${playerSelection} beats ${computerSelection}`;
}else {
return `${playerSelection} & ${computerSelection} Its a tie `;
}

}


function game (){
for (let i = 0 ;i < 5;i++) {
   let playerSelection= playerInput();
   computerSelection= getComputerChoice(); 
   console.log(playRound(playerSelection,computerSelection));
}
}

game();