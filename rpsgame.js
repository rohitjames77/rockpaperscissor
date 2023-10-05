
 const input = ["rock","paper","scissors"];

function getComputerChoice() {
let computerSelection = input[Math.floor(Math.random() * input.length)];
//console.log(computerSelection);
return computerSelection;
}


function playerInput(){
   let playerSelection= prompt("Whats ur Choice , ROCK PAPER SCISSORS?",);
   //console.log(playerSelection);
return playerSelection;
}


let playerSelection= playerInput();
let computerSelection= getComputerChoice(); 
let scoreArr = [];
let player = 0;
let computer = 0 ;
let tie = 0;
function playRound(playerSelection,computerSelection){

if ( playerSelection == "rock" && computerSelection == "paper"){
console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
  return scoreArr.push(computer);
}if(playerSelection == "paper" && computerSelection == "rock"){
console.log(`You Win ${playerSelection} beats ${computerSelection} `);
  return scoreArr.push(player);
}if (playerSelection == "scissors" && computerSelection == "rock"){
console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
  return scoreArr.push(computer) ;
}if (playerSelection == "rock" && computerSelection == "scissors"){
console.log(`You Win ${playerSelection} beats ${computerSelection} `);
  return scoreArr.push(player) ;
}if (playerSelection == "paper" && computerSelection == "scissors"){
console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
  return scoreArr.push(computer) ;
}if (playerSelection == "scissors" && computerSelection == "paper"){
console.log(`You Win ${playerSelection} beats ${computerSelection} `);
  return scoreArr.push(computer) ;
}else{
  console.log("its a tie");
  return scoreArr.push(tie);
}

}


function game (){
   for (let i = 0 ;i < 5; i++) {
   let playerSelection= playerInput();
   let computerSelection= getComputerChoice(); 
   console.log(playRound(playerSelection,computerSelection));
   if (playerSelection == null){
    continue;
   }
  
   }
  }
   game();

