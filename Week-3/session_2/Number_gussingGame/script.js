function playGuessingGame(num, guess) {
  let attempt = 1;
  var guessingPrompt = prompt("Enter a number between 1 and 100", 10);
  for (let i = guess-1; i > 0; i--) {
    console.log("guessing", i, guess);
    if(guessingPrompt == "" || isNaN(guessingPrompt)) {
        guessingPrompt = prompt( "Please enter a number.");
        continue;
    } 
   else{
    if (guessingPrompt == num) {
      console.log(attempt, "guess");
      break;
    }
    if (guessingPrompt < num) {
      guessingPrompt = prompt(
        guessingPrompt + " is too small. Guess large number."
      );
      attempt = attempt + 1;
    }
    if (guessingPrompt > num) {
      guessingPrompt = prompt(
        guessingPrompt + " is too large. Guess small number."
      );
      attempt = attempt + 1;
    }
   }
  }
  if (attempt > guess) {
    console.log(0);
    return 0;
  }
}
