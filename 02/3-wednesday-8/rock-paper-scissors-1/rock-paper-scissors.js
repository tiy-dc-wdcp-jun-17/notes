console.log("Lets Play");
const solutions = ["paper", "scissors", "rock"];

const computer = solutions[Math.floor(Math.random() * solutions.length)];
let me = prompt("Lets play rock paper scissors");

if (computer === "rock" && me === "scissors"){
  console.log("Computer Won!");
} else if (computer === "scissors" && me === "rock") {
  console.log("Player Wins!");
} else if (computer === "paper" && me === "rock") {
  console.log("Computer Wins!");
} else if (me === "rock" && computer === "scissors"){
  console.log("Player Wins!");
} else if (me === "scissors" && computer === "rock") {
  console.log("Computer Wins!");
} else if (me === "paper" && computer === "rock") {
  console.log("Player Wins!");
} else if (me === computer) {
  console.log("Tie!");
} else {
  console.log("Please chose rock paper or scissors");
}
