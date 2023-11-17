
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
rockBtn.classList.add('button');
paperBtn.classList.add('button');
scissorBtn.classList.add('button');
const rockImg = document.createElement('img');
rockImg.src = 'https://www.pngaaa.com/download/3313783';
rockBtn.textContent = '';
paperBtn.textContent = 'PAPER';
scissorBtn.textContent = 'SCISSOR';
rockBtn.value = 'rock';
paperBtn.value = 'paper';
scissorBtn.value = 'scissor';
//images ..............................








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
const computerScoreHead = document.createElement('h1');
const playerScoreHead = document.createElement('h1');
const finalResult = document.createElement('p');
divResult.append(playerScore);
divResult.append(computerScore);
divResult.append(computerScoreHead);
divResult.append(playerScoreHead);
divResult.append(finalResult);
playerScore.innerText = 0;
computerScore.innerText= 0;
playerScoreHead.textContent = 'Player Score';
computerScoreHead.textContent= 'Computer Score';
finalResult.textContent = '';
resultHead.classList= 'roundResult';
playerScore.classList = 'player';
computerScore.classList = 'computer';
finalResult.classList = 'final-result';
body.insertBefore(divResult, body.children[1]);
playerScoreHead.classList= 'pScore';
computerScoreHead.classList= 'compScore';
document.getElementsByClassName('result')
divResult.insertBefore(playerScoreHead,divResult.children[1]);
divResult.insertBefore(computerScoreHead,divResult.children[3]);
divResult.insertBefore(finalResult,divResult.children[0]);
//GAME LOGIC....................................................................


let parentDiv = document.querySelector('.btnDiv');
parentDiv.addEventListener('click',function playRound(event){
  if (event.target && event.target.matches('.button')) {
    console.log(event.target.value);
}    
let playerSelection = event.target.value;
let computerSelection = getComputerChoice();

          if ( playerSelection == "rock" && computerSelection == "paper"){
          resultHead.textContent = `${computerSelection} beats ${playerSelection}`;
           computerScore.innerText++; 
              
          }
           else if(playerSelection == "paper" && computerSelection == "rock"){
              resultHead.textContent = `${playerSelection} beats ${computerSelection}`;
              playerScore.innerText++; 
          }
         else  if (playerSelection == "scissor" && computerSelection == "rock"){
          resultHead.textContent = `${computerSelection} beats ${playerSelection} `;
          computerScore.innerText++; 
          }
         else  if (playerSelection == "rock" && computerSelection == "scissors"){
          resultHead.textContent = `${playerSelection} beats ${computerSelection}\n `;
          playerScore.innerText++; 
          }
          else if (playerSelection == "paper" && computerSelection == "scissors"){
              resultHead.textContent = `${computerSelection} beats ${playerSelection}`;
              computerScore.innerText++; 
          }
        else if (playerSelection == "scissors" && computerSelection == "paper"){
          resultHead.textContent = `${playerSelection} beats ${computerSelection}`;
          playerScore.innerText++; 
          }
          else if(playerSelection == computerSelection) {
              resultHead.textContent = `${computerSelection} Equals ${playerSelection} Its a Tie` ;
              
          }
            
          FinalRoundResult()
         
          
          }
  

)

const input = ["rock","paper","scissors"];

function getComputerChoice() {
let computerInput = input[Math.floor(Math.random() * input.length)];
console.log(computerInput);
return computerInput;
}

function FinalRoundResult(){
console.log(playerScore);
console.log(computerScore);
  if(playerScore.innerText == 5){
    finalResult.textContent = 'PLAYER WIN THE GAME';
  }else if (computerScore.innerText == 5){
    console.log(finalResult.textContent = 'COMPUTER WIN THE GAME');
  }
}
