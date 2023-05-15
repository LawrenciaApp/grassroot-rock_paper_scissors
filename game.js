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