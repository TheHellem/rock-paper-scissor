const options = {
  0: "rock",
  1: "paper",
  2: "scissor",
};

let scoreObj = {
    playerScore : 0,
    computerScore : 0,
}


const getComputerChoice = () => options[Math.floor(Math.random() * 3)];

function playRound(playerSelectionRaw, computerSelection) {
  let playerSelection = playerSelectionRaw.toLowerCase(); // make case insensitive, could perhaps use locale.compare

  if (!Object.values(options).includes(playerSelection)) return "FAIL!";
  if (playerSelection === computerSelection) return "Tie!";

  return (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
    ? "You win! " + playerSelection + " beats " // could have used template literals
    : "You loose! " + computerSelection + " beats " + playerSelection;
}


function game(){

    while(playerScore <= 5 || computerScore <= 5){
        playRound(prompt("Choose", getComputerChoice))
    }
}

console.log(getComputerChoice());

console.log(playRound("rock", getComputerChoice()));
