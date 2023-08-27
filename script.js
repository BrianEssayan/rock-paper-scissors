// options array
const options = ["rock", "paper", "scissors"];

// getComputerChoice(): randomly return "rock", "paper" or "scissors".
function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

// checkWinner(): Function that checks the result.
function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
      return "Tie";
    } else if (
      (playerSelection == "rock" && computerSelection == "scissors") ||
      (playerSelection == "scissors" && computerSelection == "paper") ||
      (playerSelection == "paper" && computerSelection == "rock")
    ) {
      return "Player";
    } else {
      return "Computer";
    }
  }