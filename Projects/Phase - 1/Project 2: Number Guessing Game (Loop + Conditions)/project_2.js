// ==================== NUMBER GUESSING GAME ====================
// Purpose: Practice loops, conditions, and break statement

// Step 1: Define the secret number
let secretNumber = 7;

// Step 2: Try guesses (in real app, you'd use prompt())
let guesses = [3, 5, 7]; // Pretend these are user's attempts

// Step 3: Loop through guesses
for (let i = 0; i < guesses.length; i++) {
    console.log("Attempt " + (i+1) + ": You guessed " + guesses[i]);

    if (guesses[i] === secretNumber) {
        console.log("🎉 Correct! You win!");
        break; // exit loop when guessed correctly
    } else if (guesses[i] < secretNumber) {
        console.log("Too low ⬇️, try again.");
    } else {
        console.log("Too high ⬆️, try again.");
    }
}

// ✅ Loop runs multiple times until correct guess is found
