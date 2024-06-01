function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3);
  switch (compChoice) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
}

function getUserChoice() {
  let userChoice = selection;

  switch (userChoice) {
    case "rock":
    case "paper":
    case "scissors":
      return userChoice;
      break;
    default:
      return "Invalid selection!";
      break;
  }
}

let userScore = 0;
let computerScore = 0;

function playRound(userClick) {
  //Get user and computer choices for the round.
  const userSelection = userClick;
  const computerSelection = getComputerChoice();

  //Game logic
  if (userSelection === "rock" && computerSelection === "scissors") {
    userScore++;
    document.querySelector(".winner").innerText =
      "You win! Rock beats Scissors";
  } else if (userSelection === "paper" && computerSelection === "rock") {
    userScore++;
    document.querySelector(".winner").innerText = "You win! Paper beats Rock";
  } else if (userSelection === "scissors" && computerSelection === "paper") {
    userScore++;
    document.querySelector(".winner").innerText =
      "You win! Scissors beat Paper";
  } else if (userSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    document.querySelector(".winner").innerText = "You lose! Paper beats rock";
  } else if (userSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    document.querySelector(".winner").innerText =
      "You lose! Rock beats scissors";
  } else if (userSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    document.querySelector(".winner").innerText =
      "You lose! Scissors beats paper";
  } else {
    document.querySelector(".winner").innerText = "It's a draw!";
  }

  document.querySelector("#player").innerText = `${userScore}`;
  document.querySelector("#computer").innerText = `${computerScore}`;
}

function finalScore(userScore, computerScore) {
  if (userScore > computerScore) {
    document.querySelector(".winner").innerText = "Game Over: User wins!";
  } else if (computerScore > userScore) {
    document.querySelector(".winner").innterText = "Game Over: Computer wins!";
  }
}

function playGame(clickChoice) {
  playRound(clickChoice);
  if (userScore === 5 || computerScore === 5) {
    finalScore(userScore, computerScore);
    computerScore = 0;
    userScore = 0;
  }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let clickChoice = button.id;
    playGame(clickChoice);
  });
});
