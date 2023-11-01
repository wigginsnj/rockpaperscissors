// rock paper scissors game


function rockPaperScissors () {

    let userInput = prompt("Make your choice: Rock, Paper or Scissors?");
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || 
        userInput === 'paper' || 
        userInput === 'bomb' || 
        userInput === 'scissors') {
        return (userInput);
    }
    else { 
        return('disqualified!');
    }
}


function getComputerChoice () {

    let computerRandomChoice = Math.floor(Math.random() * 3);
    console.log(computerRandomChoice);

    if (computerRandomChoice === 0 ) {
        return ('rock') 
    } else     if (computerRandomChoice === 1 ) {
        return ('paper') 
    } else     if (computerRandomChoice === 2 ) {
        return ('scissors') 
    } 
}

function determineWinner (userChoice, computerChoice) {

    console.log('determine winner...');
    console.log('your choice: ' + userChoice);
    console.log('computer choice: ' + computerChoice);

    if (userChoice === computerChoice) {
        return ('Game is a tie')
    }

    if (userChoice ='bomb') {
        return ('user won')
    }

    if (userChoice ='rock') {
        if (computerChoice === 'paper') {
            return ('computer won')
        } else 
        {
            return ('user won')
        }
    }


    if (userChoice ='paper') {
        if (computerChoice === 'scissors') {
            return ('computer won')
        } else 
        {
            return ('user won')
        }
    }


    if (userChoice ='scissors') {
        if (computerChoice === 'rock') {
            return ('computer won')
        } else 
        {
            return ('user won')
        }
    }
}

function playGame() {

    let userChoice = rockPaperScissors();
    let computerChoice = getComputerChoice();
    
    
    let winner = determineWinner(userChoice, computerChoice);
    
    console.log(winner);
    
    }

    playGame();
