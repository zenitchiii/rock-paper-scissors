function getComputerChoice() {
    computer = Math.floor(Math.random() * 3) + 1;

    if (computer === 1) {
        return "rock";
    } else if (computer === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

console.log(getComputerChoice());