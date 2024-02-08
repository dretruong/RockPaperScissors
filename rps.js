let winCount = 0
let lossCount = 0
let tieCount = 0 
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
function playRound(playerChoices){
    let playerChoice = playerChoices;
    console.log(playerChoice)
    playerChoice = playerChoice.toLowerCase()
    let computerChoice = getComputerChoice()
    console.log(computerChoice)
    computerChoice = computerChoice.toLowerCase()

    if(playerChoice == computerChoice){
        tieCount += 1
        return "TIE"
    }
    //rock results
    if(playerChoice == "rock" && computerChoice == "scissors"){
        winCount += 1
        return "You win! Rock beats Scissors"
    }
    if(playerChoice == "rock" && computerChoice == "paper"){
        lossCount += 1
        return "You lose! Paper beats Rock"
    }
    //paper results
    if(playerChoice == "paper" && computerChoice == "rock"){
        winCount += 1
        return "You win! Paper beats rock"
    }
    if(playerChoice == "paper" && computerChoice == "scissors"){
        lossCount += 1

        return "You lose! Scissors beats Paper"
    }
    //scissor results
    if(playerChoice == "scissors" && computerChoice == "rock"){
        lossCount += 1
        return "You lose! Rock beats Scissors"
    }
    if(playerChoice == "scissors" && computerChoice == "paper"){
        winCount += 1
        return "You win! Scissors beats Paper"
    }
}
function createButton(name) {
    let newButton = document.createElement('button');
    newButton.textContent = name;
    return newButton;
}

let btn = document.getElementsByTagName('button');
let div = document.createElement('div')
let ul = document.createElement('ul')
let li = document.createElement('li')
let li2 = document.createElement('li')
let ties = document.createElement('li')
let finalResult = document.createElement('li')

div.appendChild(ul)
document.body.appendChild(div)
for(let i = 0; i < 3; i++){
    btn[i].addEventListener('click',function(){
        playRound(btn[i].textContent)
        li.textContent = "Your Score: " + winCount
        li2.textContent = "CPU Score: " + lossCount
        ties.textContent = "Ties: " + tieCount
        ul.appendChild(li)
        ul.appendChild(li2)
        ul.appendChild(ties)
        if(winCount == 5){
            finalResult.textContent = "You scored 5 points, you win!"
            ul.appendChild(finalResult)
        }
        if(lossCount == 5){
            finalResult.textContent = "CPU scored 5 points, you lose!"
            ul.appendChild(finalResult)
        }
    })
}
console.log(li.textContent)

//btn.addEventListener('click',console.log(btn.textContent));

function playGame(){
    resultStr = ""
    winCount = 0
    loseCount = 0

    resultStr = playRound()
    if(resultStr.includes("win")){
        winCount += 1
    }
    if(resultStr.includes("lose")){
        loseCount += 1
    }

    if(winCount > loseCount){
        console.log("You won ",winCount," rounds out of 5 rounds") 
    }
    if(winCount < loseCount){
        console.log("You lost ",loseCount," rounds out of 5 rounds")
    }
    if(winCount == loseCount){
        console.log("You tied!")
    }
}

//playGame()