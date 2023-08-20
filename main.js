const weapon = ["rock","paper","scissors"];
const btn = document.querySelectorAll("button")
const resultDisplay = document.querySelector(".result");
const scoreDisplay = document.querySelector(".score")
const userDisplay = document.querySelector(".user");
const computerDisplay = document.querySelector(".computer");
let computerChoice ="";
let userChoice = "";
let comScore = 0;
let userScore = 0;
// Computer makes a choice randomly
const getRandomNumber = () => Math.floor(Math.random() * weapon.length);

const getComputerChoice =() => weapon[getRandomNumber()];

// when a user makes a choice



btn.forEach(x => {
	x.addEventListener('click', (e)=> {
	userChoice = e.target.dataset.value;
	computerChoice = getComputerChoice();

	let resultOfComparison = compareChoice();
	userDisplay.textContent = `User Choice: ${userChoice} `;
	computerDisplay.textContent = `Computer Choice: ${computerChoice} `;
	resultDisplay.textContent = `Result: ${resultOfComparison} `;
	scoreDisplay.textContent = `Score: comp*(${comScore}) || user(${userScore})`;
	checkWinner();

	})
});

function checkWinner() {
// body...
	if(userScore < comScore && comScore == 5) {
		scoreDisplay.textContent = "Computer Wins!";
		comScore =0;
		userScore = 0;
	}
	else if(comScore <userScore  && userScore == 5) {
		scoreDisplay.textContent = "Congrats! You Win"
		comScore =0;
		userScore = 0;
	}
	
}


const compareChoice = () => {
	// When choice are the same
	if(userChoice === computerChoice) {
		result = "A Draw";
	}

	//Computer wins
	else if(computerChoice === 'rock' && userChoice ==='scissors') {
		comScore++;
		result = "You Lose! Rock beats scissors"
	}
	else if(computerChoice === 'paper' && userChoice ==='rock') {
		comScore++;
		result = "You Lose! Paper beats Rock"
	}
	else if(computerChoice === 'scissors' && userChoice ==='paper') {
		comScore++;
		result = "You Lose! Scissors beats Paper"
	}
	//user wins
	else if(userChoice === 'rock' && computerChoice ==='scissors') {
		userScore++;
		result = "You Win! Rock beats scissors";
	}
	else if(userChoice === 'paper' && computerChoice =='rock') {
		userScore++;
		result = "You Win! Paper beats Rock";
	}
	else if(userChoice === 'scissors' && computerChoice ==='paper') {
		userScore++;
		result = "You Win! Scissors beats Paper";
	}
	
	return result;
}


