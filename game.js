const options = {
    0: "rock",
    1: "paper",
    2: "scissor"
}


const getComputerChoice = () => options[Math.floor(Math.random() * 3)];

function playRound(playerSelectionRaw, computerSelection){
    let playerSelection = playerSelectionRaw.toLowerCase() // make case insensitive
    if (  playerSelection === computerSelection){
        return "Tie!"
    }
    if( (playerSelection === "rock" && computerSelection === "scissor") || (playerSelection === "scissor" ))
        
    }

}




console.log(getComputerChoice())

console.log(playRound("Rock", getComputerChoice()))