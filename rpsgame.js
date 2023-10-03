
 const input = ["rock","paper","scissors"];

function getComputerChoice() {
let computerSelection = input[Math.floor(Math.random() * input.length)];
//console.log(computerSelection);
return computerSelection;
}


function playerInput(){
   let playerSelection= prompt("Whats ur Choice , ROCK PAPER SCISSORS?",);
   console.log(playerSelection);
return playerSelection.toLowerCase().trim();
}
let playerSelection= playerInput();
let computerSelection= getComputerChoice(); 
console.log(playRound(playerSelection,computerSelection));

   
function playRound(playerSelection,computerSelection){

let player = `You Win ${playerSelection} beats ${computerSelection} `;
let computer = `You Lose! ${computerSelection} beats ${playerSelection}`;
let tie = `${playerSelection} & ${computerSelection} Its a tie `;  
if ( playerSelection == "rock" && computerSelection == "paper"){
return computer;
}if(playerSelection == "paper" && computerSelection == "rock"){
return player;
}if (playerSelection == "scissors" && computerSelection == "rock"){
return computer;
}if (playerSelection == "rock" && computerSelection == "scissors"){
return player;
}if (playerSelection == "paper" && computerSelection == "scissors"){
return computer;
}if (playerSelection == "scissors" && computerSelection == "paper"){
return player;
}else {
return tie;
}

}

function game (){
   for (let i = 0 ;i < 5; i++) {
   let playerSelection= playerInput();
   let computerSelection= getComputerChoice(); 
   console.log(playRound(playerSelection,computerSelection));
 if (player> computer){
console.log("player");
 } else if (computer > player){
   console.log('computer');
 }else {
   return tie;
 }
}   
}
// function highScore(){
//    
//    let player = `You Win ${playerSelection} beats ${computerSelection} `;
//    let computer = `You Lose! ${computerSelection} beats ${playerSelection}`;
//    if (player > computer){
//       return playerScore++; 
      
//    }else if (computer> player){
//       computerScore++;
//    }else {
//       gameTie++;
   


game();

