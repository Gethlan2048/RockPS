//declare userScore, computerScore
//get and return the computers choice of rock,paper,scissors
function getComputerChoice()
{
    let choice = parseInt(Math.random(Math.floor())*3);
    if (choice === 0)
    {
        return "rock";
    }
    else if (choice === 1)
        return "paper";
    else if (choice === 2)
        return "scissors";
}
console.log(getComputerChoice());
//get the users choice
//compare the computer/user choice
//play until computer or user have 5 points
//if user chooses rock
    //if computer scissors then comp losses 
        //increment player score
    //if computer paper then comp wins
        //increment computer score
    //if comp rock then tie
//if user chooses paper then
    //if computer scissors then comp wins
        //increment computer score
    //if computer rock then comp looses 
        //increment player score
    //if comp paper then tie
//if user chooses scissors then
    //if computer rock then comp wins
        //increment computer score
    //if computer paper then comp looses 
        //increment player score
    //if comp paper then tie
