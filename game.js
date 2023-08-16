const playerOptions = document.querySelectorAll(".options");

let scoreObj = {
  playerScore: 0,
  computerScore: 0,
};

const getComputerChoice = () => {
  // One cool idea here is to link to unsplash api to get different images
  const computerOptions = ["rock", "paper", "scissor"];
  const computerChoice =  computerOptions[Math.floor(Math.random() * 3)];
  document.getElementById("computer-screen").src = `/public/screen_${computerChoice}.jpg`
  return computerChoice
};

function game(playerSelection, computerSelection) {
  playerOptions.forEach(item => item.style.background = "white")
  document.getElementById(`${playerSelection}`).style.background = "#0000ff"
  if (scoreObj.playerScore < 5 && scoreObj.computerScore < 5) {
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
      ? (scoreObj.playerScore += 1)
      : (scoreObj.computerScore += 1);

    document.querySelector("#player-score").textContent = scoreObj.playerScore;
    document.querySelector("#computer-score").textContent = scoreObj.computerScore;
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