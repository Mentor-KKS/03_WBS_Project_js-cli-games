# 🚀 Node.js CLI Tools – Project 03

This is a **solo project** created as part of the WBS Coding School SE-01 curriculum. It includes three interactive command-line applications built with **Node.js**.

---

## 📚 Table of Contents

- About the Project
- Project Details & Requirements
- How to Run
- File Structure
- Technologies Used
- License

---

## 🌟 About the Project

This project introduces core Node.js skills by building three small command-line tools:

1. **Rock Paper Scissors** – a simple game played in the terminal
2. **Pig Latin Translator** – transforms phrases into Pig Latin
3. **Caesar Cipher** – encrypts phrases using letter shifting logic

The focus is on string manipulation, logic, argument handling and clean code.

---

## 📋 Project Details & Requirements

| ID    | Requirement                     | Description                                                           |
| ----- | ------------------------------- | --------------------------------------------------------------------- |
| FR001 | Solo Project                    | Work independently. Collaboration is not allowed.                     |
| FR002 | Public GitHub Repository        | Keep your repository public. Do not add instructors as collaborators. |
| FR003 | Incremental Development via PRs | All updates must be made through Pull Requests only.                  |
| FR004 | Code Presentation               | Present your code and explain it line-by-line.                        |
| FR005 | Rock Paper Scissors Game        | Playable in terminal. Output: win, lose or draw.                      |
| FR006 | Pig Latin Translator            | Converts input phrases based on linguistic rules.                     |
| FR007 | Caesar Cipher                   | Encrypts with shift logic (supports positive and negative values).    |

**Duration:** 5 Days

---

## 🧪 How to Run

### Rock Paper Scissors

Run the file with a move (rock, paper, or scissors).  
The computer will respond randomly and output the result.  
Example:  
`node rockPaperScissors.js rock`  
→ Output: You chose rock. Computer chose paper. You lose!

---

### Pig Latin Translator

Takes an English phrase as input and converts each word to Pig Latin using these rules:

- Starts with a vowel → add `way`
- Starts with consonant + vowel → move 1st letter to the end + `ay`
- Starts with two consonants → move both to the end + `ay`  
  Example:  
  `node pigLatin.js "Pig Latin is fun"`  
  → Output: `igPay atinLay isway unfay`

---

### Caesar Cipher

Takes a phrase and a shift value, encrypts it letter-by-letter using the Caesar method.  
Supports negative and positive shifts.  
Example:  
`node caesarCipher.js "hello world" 3`  
→ Output: `khoor zruog`

---

## 📂 File Structure

js-cli-games
├── rockPaperScissors.js → Game logic
├── pigLatin.js → Translation tool
├── caesarCipher.js → Encryption tool
└── README.md → Project overview

---

## 🛠️ Technologies Used

- JavaScript (Node.js)
- process.argv for command-line input
- Arrow functions and modular logic
- Input validation and string transformation

---

## 📄 License

This project was created as part of the  
**WBS Coding School Full-Stack Web & App Development Bootcamp**.

Use it for educational purposes only.

---

Built with ☕ and curiosity during the WBS SE-01 Solo Project Week.
