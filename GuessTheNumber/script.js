'use strict';

/*
// Selecting an element based on a Class

const message = document.querySelector(".message")

const number = document.querySelector(".number")
const score = document.querySelector(".score")


const numberGuess = document.querySelector(".guess").value
*/

// DEFINE RANDOM NUMBER
function getRandomIntInclusive(min = 1, max = 20)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

const correctNumber = getRandomIntInclusive()


function updateScore(s)
{
    // using textContent and not value since it's not an input field
    document.querySelector(".score").textContent = s
}

// Defining score value to have better control over data 
let score = 20;

const checkBtn = document.querySelector(".check")
checkBtn.addEventListener('click', function ()
{
    const numberGuess = Number(document.querySelector(".guess").value);

    // No guess submitted by user
    if (!numberGuess) {
        document.querySelector(".message").textContent = "⛔️ Oops! No number entered! ";
    }
    // user correctly guessed number
    else if (numberGuess == correctNumber) {
        // DISPLAY CORRECT NUMBER ; "RANDOM NUMBER" GENERATED
        function showCorrectNumber()
        {
            const numberBox = document.querySelector(".number");
            numberBox.textContent = correctNumber;
        }
        showCorrectNumber()
        document.querySelector(".message").textContent = "✅ Awesome! You guessed the secret number!";

    }
    // user is too high
    else if (numberGuess > correctNumber) {
        // check user hasn't lost
        if (score > 1) {

            document.querySelector(".message").textContent = "😅 Too high! Try again.";
            score--;
            updateScore(score);

        } else {
            document.querySelector(".message").textContent = "🥴 Oh no!! You lost...";
            updateScore(0);
        }

    }
    // user is too low
    else {
        // check user hasn't lost
        if (score > 1) {
            document.querySelector(".message").textContent = "😅 Too low! Try again.";
            score--;
            updateScore(score);

        } else {
            document.querySelector(".message").textContent = "🥴 Oh no!! You lost...";
            updateScore(0);
        }

    }
})



const againBtn = document.querySelector(".again");
againBtn.addEventListener('click', function ()
{
    // first we update the high score with score 
    highScore = document.querySelector('.high-score').textContent = score;


})