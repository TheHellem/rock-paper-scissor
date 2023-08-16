const playerOptions = document.querySelectorAll(".options");

let scoreObj = {
  playerScore: 0,
  computerScore: 0,
};

const getComputerChoice = () => {
  const computerOptions = ["rock", "paper", "scissor"];
  const computerChoice =  computerOptions[Math.floor(Math.random() * 3)];
  return computerChoice
};

function game(playerSelection, computerSelection) {
  if (scoreObj.playerScore < 5 && scoreObj.computerScore < 5) {
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
      ? (scoreObj.playerScore += 1)
      : (scoreObj.computerScore += 1);

    document.querySelector("#player-score").textContent = scoreObj.playerScore;
    document.querySelector("#computer-score").textContent =
      scoreObj.computerScore;
  }
  else{
    console.log("finito")
  }
}

playerOptions.forEach((option) => {
  option.addEventListener("click", (e) => {
    game(e.target.id, getComputerChoice());
  });
});
