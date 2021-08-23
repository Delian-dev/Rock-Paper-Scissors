const messageText = document.querySelector(".subtext");
const playerChoice = document.querySelector(".player-choice");
const computerChoice = document.querySelector(".computer-choice");
const choiceBtns = document.querySelectorAll(".choice");
const playerScore = document.querySelector(".player-modify");
const computerScore = document.querySelector(".computer-modify");
const playAgain = document.getElementById("play-again");
document.querySelectorAll(".choice").forEach(item =>{
    item.addEventListener('click', event =>{
        playerChoice.innerText = `You choose ${event.currentTarget.innerText}!`;
        disableBtns();
       setTimeout(function(){
        randomOption();
        checkWin();
        addPoint();
       playAgain.classList.remove("play-again");
       },2500)
       playAgain.addEventListener('click', function(){
        playAgain.classList.add("play-again");
        enableBtns();
        returnDefault();
     })
    })
})

function disableBtns(){
    for(let i=0; i<choiceBtns.length; i++){
        choiceBtns[i].disabled = true;
    }
}

const options = ["Rock", "Paper", "Scissors"];

function randomOption(){
    let option = Math.floor(Math.random() * options.length);
    computerChoice.innerText = `Computer choose ${options[option]}!`;
};

function checkWin(){
    if(playerChoice.innerText.includes("Rock")){
        if(computerChoice.innerText.includes("Rock")){
            messageText.innerText = "DRAW!";
        }
        else if(computerChoice.innerText.includes("Scissors")){
            messageText.innerText = "YOU WIN!";
        }
        else{
            messageText.innerText = "YOU LOSE!";
        }
    }
    else if(playerChoice.innerText.includes("Scissors")){
        if(computerChoice.innerText.includes("Rock")){
            messageText.innerText = "YOU LOSE!";
        }
        else if(computerChoice.innerText.includes("Scissors")){
            messageText.innerText = "DRAW!";
        }
        else{
            messageText.innerText = "YOU WIN!";
        }
    }
    else{
        if(computerChoice.innerText.includes("Rock")){
            messageText.innerText = "YOU WIN!";
        }
        else if(computerChoice.innerText.includes("Scissors")){
            messageText.innerText = "YOU LOSE!";
        }
        else{
            messageText.innerText = "DRAW!";
        }
    }
}

function addPoint(){
    if(messageText.innerText.includes("WIN")){
        playerScore.innerText++;
    }
    else{
        if(messageText.innerText.includes("LOSE")){
            computerScore.innerText++;
        }
       /* else{
            playerScore.innerText++;
            computerScore.innerText++;
        } */
    }
}

function enableBtns(){
    for(let i=0; i<choiceBtns.length; i++){
        choiceBtns[i].disabled = false;
    }
}

function returnDefault(){
    playerChoice.innerText = "You didn't choose yet!";
    computerChoice.innerText = "The computer is waiting for your decision...";
    messageText.innerText = "Waiting for result...";
}
