const weapon = ["rock","paper","scissors"];
let count = 0;
// when a user makes a choice
const userChoice =prompt("Enter rock, paper.scissors").toLocaleLowerCase();

// Computer makes a choice randomly
const getRandomNumber = () => Math.floor(Math.random() * weapon.length);

const getComputerChoice =() => weapon[getRandomNumber()];
let computerChoice = getComputerChoice()

const compareChoice = () => {
	// When choice are the same
	if(userChoice === computerChoice) {
		result = "A Draw"
	}

	//Computer wins
	else if(computerChoice === 'rock' && userChoice ==='scissors') {
		result = "You Lose! Rock beats scissors"
	}
	else if(computerChoice === 'paper' && userChoice ==='rock') {
		result = "You Lose! Paper beats Rock"
	}
	else if(computerChoice === 'scissors' && userChoice ==='paper') {
		result = "You Lose! Scissors beats Paper"
	}
	//user wins
	else if(userChoice === 'rock' && computerChoice ==='scissors') {
		result = "You Win! Rock beats scissors";
	}
	else if(userChoice === 'paper' && computerChoice =='rock') {
		result = "You Win! Paper beats Rock";
	}
	else if(userChoice === 'scissors' && computerChoice ==='paper') {
		result = "You Win! Scissors beats Paper"	
	}
	
	return result;
}


function playGround(userChoice, computerChoice) {
	return (
		"User Choice: "+userChoice+"\nComputer Choice: " + computerChoice+"\n"+
		compareChoice()
)
}

function game() {
	let playedArr =[];
	for(let i =0;i< 5;i++) {
		let userSelect =userChoice;
		computerChoice = getComputerChoice()

		playedArr.push(playGround(userSelect,computerChoice));
	}
	return playedArr.toString().replace(/,/g,'\n\n');
}

console.log(game())
