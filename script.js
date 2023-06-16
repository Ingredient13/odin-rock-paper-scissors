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
let playerWon = false;
let computerWon = false;

function getComputerChoice(){
    let randomInt = Math.floor(Math.random() * 100);
    if(randomInt > 67){
        return "scissors";
    } 
    else if(randomInt >= 0 && randomInt < 34){
        return "paper";
    }
    else{
        return "rock";
    }
}

function getPlayerChoice(){
    let playerInput = prompt("Rock, paper or scissors?").toLowerCase()
    if (playerInput === "rock" || playerInput === "paper" || playerInput === "scissors"){
        return playerInput
    } else {
        getPlayerChoice();
    }
}

function playRound(playerSelection,computerSelection){
    if(playerSelection === computerSelection){
        console.log("Tie game!");
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        console.log("Paper beats rock! Computer won this round")
        computerPoints++;
        console.log(`Computer has ${computerPoints} points`)
    } else if (playerSelection === "paper" && playerSelection === "scissors"){
        console.log("Scissors beats paper! Computer won this round")
        computerPoints++;
        console.log(`Computer has ${computerPoints} points`)
    } else if (playerSelection === "scissors" && playerSelection === "rock"){
        console.log("Rock beats scissors! Computer won this round")
        computerPoints++;
        console.log(`Computer has ${computerPoints} points`)
    } else if (computerSelection === "rock" && playerSelection === "paper"){
        console.log("Paper beats rock! You won this round")
        ++playerPoints;
        console.log(`You have ${playerPoints} points`)
    } else if (computerSelection === "paper" && playerSelection === "scissors"){
        console.log("Scissors beats paper! You won this round")
        ++playerPoints;
        console.log(`You have ${playerPoints} points`)
    } else if (computerSelection === "scissors" && playerSelection === "rock"){
        console.log("Rock beats scissors! You won this round")
        ++playerPoints;
        console.log(`You have ${playerPoints} points`)
    }
}


function checkPoints(){
    if(playerPoints === 5){
        console.log("You won!")
        return playerWon = true;
    } else if (computerPoints === 5){
        console.log("Computer won!")
        return computerWon = true;
    }
    else{
        playerwon = false;
        computerWon = false;
    }
}

function resetGame(){
    if(confirm("Play again?") == true){
        playerPoints = 0;
        computerPoints = 0;
    } else{
        resetGame()
    }
}


function game(){
    checkPoints();
    if(playerWon || computerWon){
        resetGame()
    }
    playRound(getPlayerChoice(),getComputerChoice());
    game()
}

game();

