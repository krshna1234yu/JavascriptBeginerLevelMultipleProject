// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;
let attemptsDisplay = document.getElementById('attempts');

function checkGuess() {
    let guess = parseInt(document.getElementById('guessField').value);
    let message = document.getElementById('message');

    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
    } else {
        attempts--;
        attemptsDisplay.textContent = attempts;

        if (guess === randomNumber) {
            message.textContent = `Congratulations! You guessed the correct number (${randomNumber})`;
            disableInputAndButton();
        } else if (guess < randomNumber) {
            message.textContent = 'Too low. Try again!';
        } else {
            message.textContent = 'Too high. Try again!';
        }

        if (attempts === 0) {
            message.textContent = `Game over! The correct number was ${randomNumber}.`;
            disableInputAndButton();
        }
    }
}

function resetGame() {
    attempts = 10;
    attemptsDisplay.textContent = attempts;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('guessField').value = '';
    document.getElementById('message').textContent = '';
    enableInputAndButton();
}

function disableInputAndButton() {
    document.getElementById('guessField').disabled = true;
    document.querySelector('button').disabled = true;
}

function enableInputAndButton() {
    document.getElementById('guessField').disabled = false;
    document.querySelector('button').disabled = false;
}
