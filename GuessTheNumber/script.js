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

function clearGuess()
{
    document.querySelector(".guess").value = "";
}

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
        document.querySelector(".message").textContent = "😅 Too high! Try again.";
        clearGuess();

    }
    // user is too low
    else {
        document.querySelector(".message").textContent = "😅 Too low! Try again.";
        clearGuess();
    }
})

