function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

function getHumanChoice() {
    let pick = prompt("Enter your play");

    if (pick.toLowerCase() === "rock") {
        return 1;
    } else if (pick.toLowerCase() === "paper") {
        return 2;
    } else if (pick.toLowerCase() === "scissors") {
        return 3;
    }
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let roundCount = 0;

    function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }

    if (humanChoice === 1 && computerChoice === 3) {
        humanScore++;
        return "Rock beats Scissors — You win!";
    }
    if (computerChoice === 1 && humanChoice === 3) {
        computerScore++;
        return "Rock beats Scissors — Computer wins!";
    }

    if (humanChoice === 2 && computerChoice === 1) {
        humanScore++;
        return "Paper beats Rock — You win!";
    }
    if (computerChoice === 2 && humanChoice === 1) {
        computerScore++;
        return "Paper beats Rock — Computer wins!";
    }

    if (humanChoice === 3 && computerChoice === 2) {
        humanScore++;
        return "Scissors beats Paper — You win!";
    }
    if (computerChoice === 3 && humanChoice === 2) {
        computerScore++;
        return "Scissors beats Paper — Computer wins!";
    }
    }

    const btns = document.querySelectorAll("button");
    btns.forEach((button) => {
        button.addEventListener("click", () => {
            if (roundCount >= 5) return;

            let humanChoice;
            if (button.id === "rock") {
                humanChoice = 1;
            }

            if (button.id === "paper") {
                humanChoice = 2;
            }

            if (button.id === "scissors") {
                humanChoice = 3;
            }

            let computerChoice = getComputerChoice();
            let result = playRound(humanChoice, computerChoice);

            roundCount++;

            const container = document.querySelector("#container");
            const content = document.createElement("div");
            content.classList.add("score");
            content.textContent = `Round ${roundCount} | ${result} | You: ${humanScore} - ${computerScore} Computer`;
            container.appendChild(content);

            if (roundCount === 5) {
                const final = document.createElement("div");
                final.classList.add("final");
                if (humanScore > computerScore) {
                    final.textContent = "You Win";
                } else if (humanScore < computerScore) {
                    final.textContent = "You Lose";
                } else {
                    final.textContent = "TIE";
                }
                container.appendChild(final);
            }
        });
    });
}

playGame();