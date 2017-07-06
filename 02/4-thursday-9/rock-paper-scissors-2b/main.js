function printChoices(player, computer) {
  console.log("Player vs Computer");
  console.log(player + " vs " + computer);
}

function promptPlayer() {
  let choice = prompt("rock, paper, or scissors?");
  return choice;
}

function randomChoice(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

// return {bool}
function isTie(playerAChoice, playerBChoice) {
  return playerAChoice === playerBChoice;
}

// return {bool}
function hasPlayerAWon(playerAChoice, playerBChoice) {
  return (playerAChoice === "rock" && playerBChoice === "scissors") ||
         (playerAChoice === "scissors" && playerBChoice === "paper") ||
         (playerAChoice === "paper" && playerBChoice === "rock")
}

function play(playerChoice, computerChoice) {
  let result;

  // Paper > Rock > Scissors > Paper
  if (isTie(playerChoice, computerChoice)) {
    result = "Tie!";
  } else if (hasPlayerAWon(playerChoice, computerChoice)) {
    result = "You Win!";
  } else {
    result = "Computer Wins.";
  }

  return result;
}

function playRPS() {
  const choices = ["rock", "paper", "scissors"];
  let playerChoice = promptPlayer();
  let computerChoice = randomChoice(choices);

  printChoices(playerChoice, computerChoice);

  let result = play(playerChoice, computerChoice);
  console.log(result);
}

playRPS();
