const playerChoice = document.querySelectorAll(".options");
const computerScoreDisplay = document.querySelector("#computer-score");

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

function playRound(playerSelection, computerSelection) {
  // Er map en dårlig ide, hjelpefunksjon i stedet? Skal ikke printe noe på skjerm.
  const resultMap = new Map();

  console.log("player: " + playerSelection);
  console.log("computer: " + computerSelection);

  if (playerSelection === computerSelection)
    resultMap.set("tie", `It is a tie! You both chose ${playerSelection}!`);
  else {
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
      ? resultMap.set("winner", `You won this round!  `)
      : (scoreObj.computerScore += 1);
  }
  return resultMap;
}

const getPlayerChoice = (e) => {
  console.log(playRound(e.target.id, getComputerChoice()));
};
playerChoice.forEach((item) => {
  item.addEventListener("click", getPlayerChoice);
});

/*


  (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
    ? (scoreObj.playerScore += 1)
    : (scoreObj.computerScore += 1);
}

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
console.log(playerChoice);
