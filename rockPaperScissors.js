// rockPaperScissors.js
function run() {
  // Player's move from the command line
  const player = process.argv[2]?.toLowerCase();

  // Define valid moves
  const moves = ["rock", "paper", "scissors"];

  // Check for valid input
  if (!moves.includes(player)) {
    console.error(
      "❌ Invalid choice. rock/Rock, paper/Paper, or scissors/Scissors:"
    );
    console.error("Example: node rockPaperScissors.js rock");
    return;
  }

  // Randomly generate computer move
  const computer = moves[Math.floor(Math.random() * moves.length)];

  // Output moves
  console.log(`🧍 You chose: ${player}`);
  console.log(`💻 Computer chose: ${computer}`);

  // Determine winner
  if (player === computer) {
    console.log("It's a draw!");
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    console.log("You win!");
  } else {
    console.log("You lose!");
  }
}

// Run the game
run();
