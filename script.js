/*
Rock paper scissors
____________________

Check points if anyone has 5, end
Ask user to input rock, paper or scissors
Get PC choice
Compare choices
Increase user point if win
Increase PC point if lost
Output result

Restart 


*/
let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice(){
    let randomInt = Math.floor(Math.random() * 100);
    if(randomInt > 67){
        return "Scissors";
    } 
    else if(randomInt >= 0 && randomInt < 34){
        return "Paper";
    }
    else{
        return "Rock";
    }
}

function getPlayerChoice(choice){
    let playerInput = prompt("Rock, paper or scissors?").toLowerCase()
    return playerInput;
}

function playRound(playerSelection,computerSelection){

}