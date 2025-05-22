let attempts = 0;
let maxAttempts = 10;
let targetNumber;

function generateTargetNumber() {
    targetNumber = Math.floor(Math.random() * 20) + 1;
    console.log(targetNumber);
}

generateTargetNumber();

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const messageElement = document.getElementById('message');
    const userGuess = parseInt(guessInput.value);
    
    if (attempts < maxAttempts) {
        attempts++;
        
        if (!userGuess || userGuess < 1 || userGuess > 20) {
            messageElement.textContent = 'Enter a valid number between 1 and 20';
        }
        else if (userGuess === targetNumber) {
            messageElement.textContent = 'Congratulations! You guessed the number in ' + attempts + ' attempts';
            setTimeout(resetGame, 5000);
        } else if (userGuess < targetNumber) {
            messageElement.textContent = 'Too low! Try again. Attempts remaining: ' + (maxAttempts - attempts);
        } else {
            messageElement.textContent = 'Too high! Try again. Attempts remaining: ' + (maxAttempts - attempts);
        }
    } else {
        messageElement.textContent = 'Game over! The number was ' + targetNumber;
        setTimeout(resetGame, 5000);
    }
}

function resetGame() {
    generateTargetNumber();
    attempts = 0;
    document.getElementById('guessInput').value = '';
    document.getElementById('message').textContent = 'Guess a number between 1 and 20';
}