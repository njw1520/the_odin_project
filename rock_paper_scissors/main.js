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
  let userChoice = prompt(
    "Enter 'rock', 'paper', or 'scissors': ",
  ).toLowerCase();

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

function playRound() {
  //Get user and computer choices for the round.
  const userSelection = getUserChoice();
  const computerSelection = getComputerChoice();

  //Game logic
  if (userSelection === "rock" && computerSelection === "scissors") {
    console.log("You win! Rock beats Scissors");
    userScore++;
  } else if (userSelection === "paper" && computerSelection === "rock") {
    console.log("You win! Paper beats Rock");
    userScore++;
  } else if (userSelection === "scissors" && computerSelection === "paper") {
    console.log("You win! Scissors beat Paper");
    userScore++;
  } else if (userSelection === "rock" && computerSelection === "paper") {
    console.log("You lose! Paper beats rock");
    computerScore++;
  } else if (userSelection === "scissors" && computerSelection === "rock") {
    console.log("You lose! Rock beats scissors");
    computerScore++;
  } else if (userSelection === "paper" && computerSelection === "scissors") {
    console.log("You lose! Scissors beats paper");
    computerScore++;
    console.log();
  } else {
    console.log("It's a draw!");
  }
}
