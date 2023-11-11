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
const divResult = document.createElement('div');
body.appendChild(divResult);

divResult.classList = 'result';
divResult.value = 'result';

let btns = document.querySelectorAll('button');

btns.forEach(function (i){
    i.addEventListener('click',playerInput)
    
})
    function playerInput() {     
let playerCall = i.value;
 console.log(playerCall);
 return playerCall;
    }

function getComputerChoice() {
const input = ["rock","paper","scissors"];
let computerInput = input[Math.floor(Math.random() * input.length)];
console.log(computerInput);
return computerInput;
}




function playRound(){
    let playerSelection = playerInput()
    let computerSelection = getComputerChoice();
if ( computerSelection == "rock" && playerSelection == 'paper' ){
    console.log( 'its rock');
}else if (computerSelection == 'paper'){
    console.log('its paper');
}else if (computerSelection == 'scissors'){
    console.log('its scissors');
}
}



playRound();









 
  

 
