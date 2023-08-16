const playerOptions = document.querySelectorAll(".options");
let computerScreen = document.getElementById("computer-screen") 

let scoreObj = {
  playerScore: 0,
  computerScore: 0,
};

const getComputerChoice = () => {
  // One cool idea here is to link to unsplash api to get different images
  const computerOptions = ["rock", "paper", "scissor"];
  const computerChoice =  computerOptions[Math.floor(Math.random() * 3)];
  computerScreen.src = `/public/screen_${computerChoice}.jpg`
  return computerChoice
};

function gameEnd(winner){
 playerOptions.forEach((item) => item.style.visibility = "hidden")
 document.querySelector("#reset").style.visibility = "visible"
 switch(winner){
  case "computer":
    computerScreen.style.width = "9rem" // ad-hoc fix
    computerScreen.src = "/public/happy.png";
    break;
  case "player":
    computerScreen.src = "/public/sad.png"
 }
}

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
    (scoreObj.playerScore > scoreObj.computerScore) ? gameEnd("player") : gameEnd("computer")
  }
}

const playAgain = () => location.reload()

playerOptions.forEach((option) => {
  option.addEventListener("click", (e) => {
    game(e.target.id, getComputerChoice());
  });
});