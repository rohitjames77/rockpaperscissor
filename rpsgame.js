const body = document.querySelector('body');
const btnDiv = document.createElement('div');
const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorBtn = document.createElement('button');
btnDiv.appendChild(rockBtn);
btnDiv.appendChild(paperBtn);
btnDiv.appendChild(scissorBtn);
body.appendChild(btnDiv);
btnDiv.classList.add('btnDiv');
rockBtn.classList.add('rock');
paperBtn.classList.add('paper');
scissorBtn.classList.add('scissor');
rockBtn.textContent = 'ROCK';
paperBtn.textContent = 'PAPER';
scissorBtn.textContent = 'SCISSOR';
rockBtn.value = 'rock';
paperBtn.value = 'paper';
scissorBtn.value = 'scissor';

let btns = document.querySelectorAll('button');

btns.forEach(function (i){
    i.addEventListener('click', function playerInput() {     
let playerSelection = i.value;
 console.log(playerSelection);
 return playerSelection;
    })
})

function getComputerChoice() {
const input = ["rock","paper","scissors"];
let computerSelection = input[Math.floor(Math.random() * input.length)];
console.log(computerSelection);
return computerSelection;
}

function playRound(playerSelection,computerSelection){
if (playerSelection == 'rock' && computerSelection == 'paper'){
    console.log( "you Win");
    
}else if (playerSelection == 'rock' && computerSelection == 'scissor'){
    console.log('you lose');

} else if (playerSelection == 'paper' && computerSelection == 'rock'){
    console.log('you win');
}else if ( playerSelection == 'paper' && computerSelection == 'scissor'){
    console.log( 'you lose');
}else if (playerSelection == 'scissor' && computerSelection == 'rock'){
    console.log('you lose');
   
} else if (playerSelection == 'scissor' && computerSelection == 'paper'){
    console.log('you win');

}
}
playRound();








 
  

 
