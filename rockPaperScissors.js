const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    userInput = 'Invalid';
    return userInput;
    }
};

function getComputerChoice(){
let choice = Math.floor(Math.random() * 3);
switch (choice) {
  case 0:
    return 'paper';
    case 1:
    return 'scissors';
  default:
    return 'rock';
    }
};

function determineWinner(userChoice, computerChoice){
  if (userChoice === computerChoice) {
    return 'It was a Tie';
   } 
  else if (userChoice === 'rock' && computerChoice === 'scissors') {
    return 'You won';
 } else if (userChoice === 'paper' && computerChoice === 'rock') {
    return 'You won';
  } else if (userChoice === 'scissors' && computerChoice === 'paper') {
    return 'You won';
   } 
   else if 
   (userChoice === 'bomb') {
     return 'you won';
   } 
   else {
     return 'You Lost'
   } 
};

/*console.log(determineWinner('scissors','rock'));
console.log(determineWinner('paper','rock'));
console.log(determineWinner('rock','scissors'));*/

const playGame = () => {
const myChoices = getUserChoice('scissors');
const compChoices = getComputerChoice();
  
  if (myChoices === 'Invalid') {
   console.log('Invalid select rock, paper or scissors');
  } else {
      console.log(`You threw the ${myChoices}`);
      console.log(`The computer threw ${compChoices}`);
      console.log(determineWinner(myChoices,compChoices));
      }
};

playGame();