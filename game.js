const options = {
  0: "rock",
  1: "paper",
  2: "scissor",
};

let scoreObj = {
  playerScore: 0,
  computerScore: 0,
};
const getComputerChoice = () => options[Math.floor(Math.random() * 3)];

function playRound(playerSelectionRaw, computerSelection) {
  let playerSelection = playerSelectionRaw.toLowerCase(); // make case insensitive, could perhaps use locale.compare
  console.log(`computerSelection ${computerSelection}`);
  console.log(`playerSelection ${playerSelection}`);


  if (!Object.values(options).includes(playerSelection)) return "FAIL!";
  if (playerSelection === computerSelection) return "Tie!";

  return (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
    ? (scoreObj.playerScore += 1)
    : (scoreObj.computerScore += 1);
}
/*
function game() {
  while (scoreObj.playerScore <= 5 && scoreObj.computerScore <= 5) {
    playRound(prompt("Choose"), getComputerChoice());
    console.log(`playerScore ${scoreObj.playerScore}`);
    console.log(`computerScore ${scoreObj.computerScore}`);
  }
  return 
}
*/
//console.log(getComputerChoice());
console.log(game());
