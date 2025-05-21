// pigLatin.js
function run() {
  const input = process.argv.slice(2).join(" ");

  // Check if a letter is a vowel
  const isVowel = (char) => "aeiouAEIOU".includes(char);

  // Main translation logic
  const translateWord = (word) => {
    if (!word) return "";

    // Starts with a vowel
    if (isVowel(word[0])) {
      return word + "way";
    }
    // Starts with 2 consonants
    else if (!isVowel(word[0]) && !isVowel(word[1])) {
      return word.slice(2) + word.slice(0, 2) + "ay";
    }
    // Starts with 1 consonant + 1 vowel
    else {
      return word.slice(1) + word[0] + "ay";
    }
  };

  // Split input, translate each word, and join result
  const pigLatin = input.split(" ").map(translateWord).join(" ");

  console.log(pigLatin);
}

// Run pigLatin game
run();
