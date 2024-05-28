import { initializing,restart,playerMove } from "./functions.js";
import { retry,container,playerChoice } from "./variables.js";
retry.addEventListener('click', restart);

initializing();

container.addEventListener('submit', (e) => {
    e.preventDefault();
    let playerChoiceValue = playerChoice.value;
    playerMove(playerChoiceValue);
})