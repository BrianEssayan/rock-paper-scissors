// options array
const options = ["rock", "paper", "scissors"];

// getComputerChoice(): randomly return "rock", "paper" or "scissors".
function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

