const throws = document.querySelectorAll('button');
const score = document.querySelector('div');

var playerScore = 0;
var computerScore = 0;


throws.forEach((button) => {
    button.addEventListener('click', () => {
        var scorekeeper = document.createElement('div');
        scorekeeper.innerHTML = playRound(button.id, computerPlay());
        score.appendChild(scorekeeper);
    });
});


function computerPlay(){
    var computerValue = ['Rock', 'Paper', 'Scissors'];
    var computerChoice = Math.floor(Math.random() * computerValue.length);

    return(computerValue[computerChoice]);
}


function playRound(playerSelection, computerSelection) {   
    var computerSelection = computerPlay();

    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    playerWin = 'Player Wins! Score is Player: '+ playerScore + ' Computer: ' + computerScore;
    computerWin = 'Computer Wins! Score is Player: '+ playerScore + ' Computer: ' + computerScore;
    draw = 'Draw! Score is Player: '+ playerScore + ' Computer: ' + computerScore;

    if (playerSelection == 'ROCK'){
        if (computerSelection == 'PAPER'){
            computerScore++;
                                                console.log(computerScore);
            return computerWin;
        }
        else if(computerSelection == 'SCISSORS'){
            playerScore++;
                                                console.log(playerScore);
            return playerWin;
        }
        else{
            return draw;
        }
    }

    if (playerSelection == 'PAPER'){
        if (computerSelection == 'SCISSORS'){
            computerScore++;
                                                 console.log(computerScore);
            return computerWin;
        }
        else if (computerSelection == "ROCK"){
            ++playerScore;
                                                    console.log(playerScore);
            return playerWin;
        }
        else{
            return draw;
        }

    }

    if (playerSelection == 'SCISSORS'){
        if(computerSelection == 'PAPER'){
            playerScore++;
                                                        console.log(playerScore);
            return playerWin;
        }
        else if(computerSelection == 'ROCK'){
            computerScore++;
                                                    console.log(computerScore);
            return computerWin;
        }
        else{
            return draw;
        }
    }
    
}
/*
function game(){
    var computerScore=0;
    var playerScore=0;
    var round=0;
    var currentRound = playRound(playerSelection, computerSelection)
    
    console.log('*computer score is', computerScore);
    console.log('*player score is', playerScore);
    console.log('*round number is', round);

    for (round = 1; round < 5; round = round + 1){ 
        
        currentRound = playRound(playerSelection, computerSelection)
        
        if (currentRound == 'Computer Wins!'){
            computerScore ++;
            console.log('Computer Victory!');
            computerSelection = computerPlay();
            playerSelection = window.prompt('EnteryorChoice');

            console.log('*computer score is', computerScore);
            console.log('*player score is', playerScore);
            console.log('*round number is', round);
        
        }else if (currentRound == 'Player Wins!'){
            playerScore ++;
            console.log('Player Victory!');
            computerSelection = computerPlay();
            playerSelection = window.prompt('EnteryorChoice');

            console.log('*computer score is', computerScore);
            console.log('*player score is', playerScore);
            console.log('*round number is', round);
        
        }else if (currentRound == 'Draw!'){
            console.log('Draw, Throw Again!');
            computerSelection = computerPlay();
            playerSelection = window.prompt('EnteryorChoice');

            console.log('*computer score is', computerScore);
            console.log('*player score is', playerScore);
            console.log('*round number is', round);

        }
        
        if (round >= 4){
            
            if (playerScore > computerScore) {
                
                return 'Player wins the round!';
            
            }

            else if (computerScore > playerScore){
            
                return 'Computer wins the round!';
        
            }else{
        
                return 'The whole round was a Draw.';

            }
        }
    }
}

console.log(game());
*/
