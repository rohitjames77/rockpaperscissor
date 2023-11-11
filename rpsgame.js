
// DIV FOR PLAYER INPUT & THREE INPUT BUTTONS.............
const body = document.querySelector('body');
const btnDiv = document.createElement('div');
const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorBtn = document.createElement('button');
const outerHtmlDiv = document.documentElement.outerHTML;
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
playerScore.textContent = '0';
computerScore.textContent= '0';
resultHead.classList= 'roundResult';
playerScore.classList = 'player';
computerScore.classList= 'computer';
















//GAME LOGIC....................................................................

let btns = document.querySelectorAll('button');
let playerCall;
btns.forEach(function btnLoop (i){
    i.addEventListener('click', function playerInput() {     
let playerCall = i.value;
 console.log(playerCall);
 playRound()
}
)})
    

function getComputerChoice() {
const input = ["rock","paper","scissors"];
let computerInput = input[Math.floor(Math.random() * input.length)];
console.log(computerInput);
return computerInput;
}

let playerSelection = btnLoop();
console.log(playerSelection);

function playRound(playerSelection, computerSelection){

       
        if ( playerSelection == "rock" && computerSelection == "paper"){
        resultHead.textContent = `${computerSelection} beats ${playerSelection}`;
         computerScore.textContent += 1; 
            
        }
         else if(playerSelection == "paper" && computerSelection == "rock"){
            resultHead.textContent = `${playerSelection} beats ${computerSelection}`;
            playerScore.textContent += 1; 
        }
       else  if (playerSelection == "scissors" && computerSelection == "rock"){
        resultHead.textContent = `${computerSelection} beats ${playerSelection}`;
        computerScore.textContent += 1; 
        }
       else  if (playerSelection == "rock" && computerSelection == "scissors"){
        resultHead.textContent = `${playerSelection} beats ${computerSelection}`;
        playerScore.textContent += 1; 
        }
        else if (playerSelection == "paper" && computerSelection == "scissors"){
            resultHead.textContent = `${computerSelection} beats ${playerSelection}`;
            computerScore.textContent += 1; 
        }
      else if (playerSelection == "scissors" && computerSelection == "paper"){
        resultHead.textContent = `${playerSelection} beats ${computerSelection}`;
        playerScore.textContent += 1; 
        }
        else if(playerSelection == computerSelection) {
            resultHead.textContent = `${computerSelection} Equals ${playerSelection} Its a Tie` ;
            
        }
        
        }
        












 
  

 
