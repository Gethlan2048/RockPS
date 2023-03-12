//declare userScore, computerScore
//get and return the computers choice of rock,paper,scissors
function getComputerChoice() {
    let choice = parseInt(Math.random(Math.floor()) * 3);
    if (choice === 0)
        return "rock";
    else if (choice === 1)
        return "paper";
    else if (choice === 2)
        return "scissors";
}
//get the users choice
function playerSelection() {
    let userChoice = prompt("Pick rock paper or scissors")
    return userChoice.toLowerCase();
}

//compare computer choice with player choice
function game(computerChoice, playerSelection) {
    if (playerSelection === computerChoice) {
        console.log(`computer chose ${computerChoice} and player chose ${playerSelection}`);
        return 'tie';
    }
    //conditions for player point
    else if ((playerSelection === 'rock' && computerChoice === 'scissors') || (playerSelection === 'scissors' && computerChoice === 'paper')
        || playerSelection === 'paper' && computerChoice === 'rock') {
        console.log(`${playerSelection} beats ${computerChoice}`);
        return 'playerPoint'
    }
    //conditions for computer point
    else if ((playerSelection === 'rock' && computerChoice === 'paper') || (playerSelection === 'scissors' && computerChoice === 'rock')
        || playerSelection === "paper" && computerChoice === 'scissors') {
        console.log(`${computerChoice} beats ${playerSelection}`);
        return 'computerPoint';
    }
}  
let playerScore = 0;
let computerScore = 0;
//play the game five times
for (let i = 0; i<=5; i++)
{
    let pointTo = game(getComputerChoice(), playerSelection())
    //award player point
    if(pointTo === 'computerPoint')
        computerScore++;
    //award computer point
    else if(pointTo === 'playerPoint')
        playerScore++;
   //display score     
    console.log(`Computer: ${computerScore} Player: ${playerScore}`);
        
}   
