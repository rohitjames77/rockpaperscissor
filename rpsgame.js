 console.log("Hi There ! Wanna Play some ROCK PAPER SCISSORS ?");

 const input = ["rock","paper","scissors"];

function getComputerChoice() {
let computerSelection = input[Math.floor(Math.random() * input.length)];
//console.log(computerSelection);
return computerSelection;
}


function playerInput(){
let playerInput = prompt("Whats ur Choice , ROCK PAPER SCISSORS?",);   
//console.log(playerInput);
let lowerCaseInput =playerInput.toLowerCase().trim();
return lowerCaseInput;  
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
else if(playerSelection == computerSelection) {
  console.log('its a tie');
   return "tie";
}

}

function game (){
    let playerScore = "player" ;
    let computerScore = "computer";
   for (let i = 0 ;i < 5; i++) {
   let playerSelection= playerInput();
   let computerSelection= getComputerChoice(); 
   let roundScore= playRound(playerSelection,computerSelection);
   if (roundScore == playerScore) {
     let roundPlayer = playerScore++;
     console.log(roundPlayer);  
      }
      else if ( roundScore == computerScore){
        let roundComputer = computerScore++;
       console.log(roundComputer);
      
      }
  }   
  }
   game();


   
   








 
  

 
