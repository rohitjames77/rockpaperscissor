let greet = "Hi There ! Wanna Play some ROCK PAPER SCISSORS ?"
console.log(greet);

let choices = ["rock", "paper","scissors"];
function getComputerChoice(){
console.log(choices[(Math.floor(Math.random()*choices.length))]);
}

  let win = "You Win!"
  let lose = "You lose"
  let tie = "That a Tie"
  function gameplay(playerSelection,computerSelection){
    if(playerSelection == choices[1] && computerSelection == getComputerChoice()){
     console.log(lose);   

    }
}
    gameplay(1,2)