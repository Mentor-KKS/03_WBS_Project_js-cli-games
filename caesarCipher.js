/* BEGIN CaesarCipher

1. Lese die Eingabe aus process.argv:
   - Den Text (z. B. "hello world")
   - Die Verschiebungszahl (Shift)

2. PRÜFE:
   - Ob ein Text vorhanden ist
   - Ob der Shift eine gültige Zahl ist
   - Falls nicht → zeige Fehlermeldung und beende das Programm

3. Erstelle eine Funktion "encrypt(text, shift)":
   - Wandle den Text in Kleinbuchstaben um
   - Gehe jeden Buchstaben im Text durch:

     FÜR jeden Buchstaben im Text:
       - WENN Buchstabe zwischen 'a' und 'z':
           - Berechne den Unicode-Wert des Buchstabens
           - Ziehe den Code von 'a' ab → ergibt Position im Alphabet (0–25)
           - Addiere den Shift
           - Wende Modulo 26 an (damit es bei 'z' wieder bei 'a' weitergeht)
           - Wandle zurück in einen Buchstaben
       - SONST (Leerzeichen, Satzzeichen etc.):
           - Lasse den Buchstaben unverändert

4. Gib den verschlüsselten Text aus

END */

// CaesarCipher.js
function run() {
  const inputText = process.argv.slice(2, -1).join(" ");
  const shift = parseInt(process.argv.pop());

  if (!Number.isInteger(shift)) {
    console.error("❌ Shift must be an integer.");
    console.error('Example: node caesarCipher.js "hello world" 3');
    return;
  }

  const encrypt = (text, shift) => {
    const alphabetSize = 26;
    const aCode = "a".charCodeAt(0);

    return text
      .toLowerCase()
      .split("")
      .map((char) => {
        if (/[a-z]/.test(char)) {
          const shifted =
            ((char.charCodeAt(0) - aCode + shift + alphabetSize) %
              alphabetSize) +
            aCode;
          return String.fromCharCode(shifted);
        } else {
          return char;
        }
      })
      .join("");
  };

  const encryptedText = encrypt(inputText, shift);
  console.log(encryptedText);
}

// Run the Caesar Cipher game
run();
