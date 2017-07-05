// Variables
const choices = ["rock", "paper", "scissors"];
let myChoice = prompt("rock, paper, or scissors?");
let computerChoice = choices[Math.floor(Math.random() * choices.length)];

// Print Choices
console.log("Player vs Computer")
console.log(myChoice + " vs " + computerChoice);

// Paper > Rock > Scissors > Paper
if (myChoice === computerChoice) {
  console.log("Tie!");
} else if ((myChoice === "rock" && computerChoice === "scissors") ||
           (myChoice === "scissors" && computerChoice === "paper") ||
           (myChoice === "paper" && computerChoice === "rock")) {
  console.log("You Win!");
} else {
  console.log("Computer Wins.");
}
