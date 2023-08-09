const gameHand = ["rock", "paper", "scissors"];

function getRandomNumber() {
	return Math.floor(Math.random() *3);
}

function getComputerChoice() {
	return gameHand[getRandomNumber()];
}



function playRound(playerSelection,computerSelection ){
	let result;
	if(computerSelection === playerSelection) {
		result = "A Draw!"
	}
	if(computerSelection === 'rock' && playerSelection === 'paper') {
		result = "You Win! Paper beats Rock";
	}
	if(computerSelection === 'rock' && playerSelection === 'scissors') {
		result = "You Lose! Rock beats scissors";
	}
	if(computerSelection === 'paper' && playerSelection === 'rock') {
		result = "You Lose! Paper beats Rock";
	}
	if(computerSelection === 'paper' && playerSelection === 'scissors') {
		result = "You Win! scissors beats Paper";
	}
	if(computerSelection === 'scissors' && playerSelection === 'rock') {
		result = "You Win! Rock beats scissors";
	}
	if(computerSelection === 'scissors' && playerSelection === 'paper') {
		result = "You Lose! scissors beats Paper";
	}
	return result;
}


 
const playerSelection = "paper";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
