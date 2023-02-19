'use strict';

// DEFINE RANDOM NUMBER
function getRandomIntInclusive(min = 1, max = 20) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

let correctNumber = getRandomIntInclusive();
let highScore = 0;
let score = 20;
const tooHigh = "😅 Too high! Try again.";
const tooLow = "😅 Too low! Try again.";
const correctGuess = "✅ Awesome! You guessed the secret number!";
const emptyGuess = "⛔️ Oops! No number entered! ";
const lost = "🥴 Oh no!! You lost...";
const default_msg = "Start guessing...";

function updateScore(s) {
    // using textContent and not value since it's not an input field
    document.querySelector(".score").textContent = s
}

function updateHighScore(i) {
    document.querySelector('.high-score').textContent = i;
}

function clearNumberInput() {
    document.querySelector(".guess").value = "";
}

function resetBackground() {
    document.querySelector("body").style.backgroundColor = '#222'

}

function greenBackGround() {
    document.querySelector("body").style.backgroundColor = '#60b347'
}

function redBackGround() {
    document.querySelector("body").style.backgroundColor = '#f03e3e'

}

function updateMessage(messageTemplate) {
    document.querySelector(".message").textContent = messageTemplate;
}

function growNumberBox() {
    document.querySelector(".number").style.width = "30rem";
}

function resetNumberBox() {
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?";
}

function displayHighscore(s) {
    document.querySelector(".high-score").textContent = s
}

const checkBtn = document.querySelector(".check")
checkBtn.addEventListener('click', function () {
    const numberGuess = Number(document.querySelector(".guess").value);

    // No guess submitted by user
    if (!numberGuess) {
        updateMessage(emptyGuess);
    }
    // user correctly guessed number
    else if (numberGuess == correctNumber) {
        // DISPLAY CORRECT NUMBER ; "RANDOM NUMBER" GENERATED
        function showCorrectNumber() {
            const numberBox = document.querySelector(".number");
            numberBox.textContent = correctNumber;
        }
        showCorrectNumber();
        greenBackGround();
        growNumberBox();
        updateMessage(correctGuess);
        //  Update high score once player wins and only if the score is greater than last high score value
        if (score > highScore) {
            highScore = score;
            displayHighscore(highScore);
        }

    }
    // user is too high
    else if (numberGuess > correctNumber) {
        // check user hasn't lost
        if (score > 1) {
            updateMessage(tooHigh);
            score--;
            updateScore(score);

        } else {
            redBackGround();
            updateMessage(lost);
            updateScore(0);
        }

    }
    // user is too low
    else {
        // check user hasn't lost
        if (score > 1) {
            updateMessage(tooLow);
            score--;
            updateScore(score);

        } else {
            redBackGround();
            updateMessage(lost);
            updateScore(0);
        }

    }
})


const againBtn = document.querySelector(".again");
againBtn.addEventListener('click', function () {
    // reset 
    score = 20;
    updateScore(20);
    correctNumber = getRandomIntInclusive();
    clearNumberInput();
    updateMessage(default_msg);
    resetBackground();
    resetNumberBox();
})