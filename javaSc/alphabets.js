// alphabets.js

const alphaQuestArr = [
    {
        question: "What is the first letter in the alphabet?",
        answer: "A",
        options: ["A", "B", "C"]
    },
    {
        question: 'What word starts with the letter "A"?',
        answer: "Apple",
        options: ["Melon", "Apple", "Banana"]
    },
    {
        question: "Which letter comes after C?",
        answer: "D",
        options: ["D", "E", "F"]
    },
    {
        question: "What is the last letter in the alphabet?",
        answer: "Z",
        options: ["X", "Y", "Z"]
    },
    {
        question: "Which letter comes before G?",
        answer: "F",
        options: ["E", "F", "H"]
    }
];

// Tell the quiz engine which questions to use
game.currentQuest = alphaQuestArr;

// Start the game
startGame();