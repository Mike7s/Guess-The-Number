import { container, guessNumber, write, spanscore, spanchances, spanhighestScore, retry, infoNumberDiv } from "./variables.js";
let score;
let chances;
let highestScore = 50;
let numberMin = 0;
let numberMax = 99;
let randomNumber;

spanhighestScore.textContent = 0;

export function initializing() {
    score = 5;
    chances = 5;
    spanscore.textContent = score;
    spanchances.textContent = chances;
    guessNumber.textContent = '?';
    randomNumber = Math.floor(Math.random() * numberMax)
    console.log(randomNumber)
}

export function restart() {
    initializing();
    write.textContent = 'Good Luck';
    container.style.display = 'block';
    retry.style.display = 'none';
    infoNumberDiv.textContent = 'Between 0 and 99';
    numberMin = 0;
    numberMax = 99;
}

export function playerMove(playerChoiceValue) {
    if (+playerChoiceValue === randomNumber) {
        win();
    } else {
        wrong();
        between(playerChoiceValue);
    }
}

function win() {
    guessNumber.textContent = randomNumber;
    if (highestScore <= score * 10) {
        spanhighestScore.textContent = highestScore;
    }
    write.textContent = 'You Win';
    container.style.display = 'none';
    retry.style.display = 'block';
}

function wrong() {
    chances--;
    spanchances.textContent = chances;
    score--;
    spanscore.textContent = score;
    highestScore -= 10;
    lose();
    write.textContent = 'Try again';
}

function lose(){
    if (chances === 0) {
        container.style.display = 'none';
        retry.style.display = 'block';
        guessNumber.textContent = randomNumber;
    }
}

function between(playerChoiceValue) {
    if (isNaN(playerChoiceValue) || playerChoiceValue < 0 || playerChoiceValue > 99) {
        infoNumberDiv.textContent = 'Per favore, inserisci un numero valido tra 0 e 99.';
    } else if (playerChoiceValue < randomNumber) {
        numberMin = Math.max(numberMin, playerChoiceValue)
        infoNumberDiv.textContent = `Between ${numberMin}  e ${numberMax} `;
    } else if (playerChoiceValue > randomNumber) {
        numberMax = Math.min(numberMax, playerChoiceValue);
        infoNumberDiv.textContent = `Between ${numberMin}  e  ${numberMax}`
    }
}


