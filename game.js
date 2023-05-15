function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomChoice = choices[Math.floor(Math.random() * 3)];
  return randomChoice;
}

function playRound(playerSelction, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if(playerSelection === computerSelection.toLowerCase()) {
    return "It's a tie!";
  }
    else if(playerSelction === 'Rock' && computerSelection === 'Scissors') || (playerSelction === 'Paper' && computerSelection === 'Rock') ||  (playerSelction === 'Scissors' && computerSelection === 'Paper') {
    return `You win ${playerSelection} beats ${computerSelction}.`;
    }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for(let i = 0;i < 5; i++) {
    const playerSelection = prompt('Rock,paper or scissors?');
    const computerSelection = computerPlay();
    const roundResult= const playRound(playerSelection, computerSelection);
    if(roundResult.startsWith(`You win`))
    {
      playerScore++;
    } 
    else if(roundResults.startsWith(`You lose!`)){
      compurtScore++
    }
    console.log(`Round ${i + 1}: ${roundResult}`);
  }
  if(playerScore > computerScore) {
    console.log(`You win the game! ${playerScore} to ${computerScore}.`);
  }
  else if(computerScore > playerScore) {
    consloe.log(`You lose the game! ${computerScore} to ${playerScore}.`);
  }
  else {console.log(`It's a tie game! ${playerScore} to ${computerScore}`.);
       }
  }
    