
// DIV FOR PLAYER INPUT & THREE INPUT BUTTONS.............
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
document.body.style.backgroundColor = 'yellow';


// DIV FOR RESULT AND ROUND SCORE............. 
const divResult = document.createElement('div');
divResult.classList = 'result';
divResult.value = 'result';
body.append(divResult);
const resultHead = document.createElement('h1');
divResult.append(resultHead);
resultHead.textContent='';
const playerScore = document.createElement('p');
const computerScore = document.createElement('p');
divResult.append(playerScore);
divResult.append(computerScore);
playerScore.textContent = '';
computerScore.textContent= '';



















let btns = document.querySelectorAll('button');
let playerCall;
btns.forEach(function (i){
    i.addEventListener('click', function playerInput() {     
let playerCall = i.value;
 console.log(playerCall);

    }
)})

function getComputerChoice() {
const input = ["rock","paper","scissors"];
let computerInput = input[Math.floor(Math.random() * input.length)];
console.log(computerInput);
return computerInput;
}




function playRound(){
    let playerSelection = playerCall;
    let computerSelection = getComputerChoice();
       
        if ( playerSelection == "rock" && computerSelection == "paper"){
          
        }
         else if(playerSelection == "paper" && computerSelection == "rock"){
          
        }
       else  if (playerSelection == "scissors" && computerSelection == "rock"){
          
        }
       else  if (playerSelection == "rock" && computerSelection == "scissors"){
          
        }
        else if (playerSelection == "paper" && computerSelection == "scissors"){
        
        }
      else if (playerSelection == "scissors" && computerSelection == "paper"){
          
        }
        else if(playerSelection == computerSelection) {
    
        }
        
        }
        
playRound()











 
  

 
