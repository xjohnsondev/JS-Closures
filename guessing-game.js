function guessingGame() {
  let num = Math.floor(Math.random() * 101);
  let result;
  let guessCount = 0;
  let gameOver = false;
  return function generate(guess) {
    if (gameOver) return "The game is over, you already won!";
    guessCount++;
    if (guess === num) {
        gameOver = true;
        result = `You win! You found ${num} in ${guessCount} guesses.`;
    }
    if (guess < num) result = `${guess} is too low!`;
    if (guess > num) result = `${guess} is too high!`;
    
    return result;
  };
}

module.exports = { guessingGame };
