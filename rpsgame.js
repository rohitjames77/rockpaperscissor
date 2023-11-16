
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
// let parentDiv = document.querySelector('.btnDiv');
// parentDiv.addEventListener('click', function(event) {
//   if (event.target && event.target.matches('.button')) {
//      let playerSelection = event.target.value;
//         console.log(playerSelection);
//     // You can perform other actions with playerSelection here
//   }
// });


let parentDiv = document.querySelector('.btnDiv');
parentDiv.addEventListener('click',function playRound(event){
  if (event.target && event.target.matches('.button')) {
    console.log(event.target.value);
}    
let playerSelection = event.target.value;
let computerSelection = getComputerChoice();
          if ( playerSelection == "rock" && computerSelection == "paper"){
          resultHead.textContent = `${computerSelection} beats ${playerSelection}`;
           computerScore.textContent += 1; 
              
          }
           else if(playerSelection == "paper" && computerSelection == "rock"){
              resultHead.textContent = `${playerSelection} beats ${computerSelection}`;
              playerScore.textContent += 1; 
          }
         else  if (playerSelection == "scissor" && computerSelection == "rock"){
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
  

)

const input = ["rock","paper","scissors"];

function getComputerChoice() {
let computerInput = input[Math.floor(Math.random() * input.length)];
console.log(computerInput);
return computerInput;
}