function getComputerChoice(){
    result = Math.floor(Math.random() * 3) + 1;
    resultStr = "";
    if(result == 1){
        resultStr = "Rock";
    }
    if(result == 2){
        resultStr = "Paper";
    }
    if(result == 3){
        resultStr = "Scissors";
    }
    return resultStr;
}
function playRound(playerChoice, computerChoice){
    playerChoice = prompt("Rock, Paper, or Scissors?")
    playerChoice = playerChoice.toLowerCase()
    computerChoice = getComputerChoice()
    computerChoice = computerChoice.toLowerCase()
    console.log("player: ", playerChoice)
    console.log("computer: ", computerChoice)
    if(playerChoice == computerChoice){
        return "TIE"
    }
    //rock results
    if(playerChoice == "rock" && computerChoice == "scissors"){
        return "You win! Rock beats Scissors"
    }
    if(playerChoice == "rock" && computerChoice == "paper"){
        return "You lose! Paper beats Rock"
    }
    //paper results
    if(playerChoice == "paper" && computerChoice == "rock"){
        return "You win! Paper beats rock"
    }
    if(playerChoice == "paper" && computerChoice == "scissors"){
        return "You lose! Scissors beats Paper"
    }
    //scissor results
    if(playerChoice == "scissors" && computerChoice == "rock"){
        return "You lose! Rock beats Scissors"
    }
    if(playerChoice == "scissors" && computerChoice == "paper"){
        return "You win! Scissors beats Paper"
    }
}
console.log(playRound())