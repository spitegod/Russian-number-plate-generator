let firstLetter = document.getElementById('firstLetter');
let firstNumber = document.getElementById('firstNumber');
let secondNumber = document.getElementById('secondNumber');
let thirdNumber = document.getElementById('thirdNumber');
let secondLetter = document.getElementById('secondLetter');
let thirdLetter = document.getElementById('thirdLetter');
let button = document.getElementById('buttonGenerate');
let radioButton = document.getElementById('rogueChecker');

button.addEventListener('click', function generateLicensePlate() {
    var letters = ['A', 'B', 'E', 'K', 'M', 'H', 'O', 'P', 'C', 'T', 'У'];
    firstNumber.textContent = 1;
    secondNumber.textContent = 2;
    if (radioButton.checked) {
        while ((firstNumber.textContent != secondNumber.textContent)) {
            firstLetter.textContent = letters[Math.floor(Math.random() * 11)];
            firstNumber.textContent = Math.floor(Math.random() * 10);
            secondNumber.textContent = Math.floor(Math.random() * 10);
            thirdNumber.textContent = Math.floor(Math.random() * 10);
            secondLetter.textContent = letters[Math.floor(Math.random() * 11)];
            thirdLetter.textContent = letters[Math.floor(Math.random() * 11)];

        }
        console.log(secondLetter.textContent);
        if ((firstNumber.textContent == 0) && (secondNumber.textContent == 0)) {
            thirdNumber.textContent = 1;
        }
        else {
            thirdNumber.textContent = secondNumber.textContent;
        }
    }
    else {
        firstLetter.textContent = letters[Math.floor(Math.random() * 11)];
        firstNumber.textContent = Math.floor(Math.random() * 10);
        secondNumber.textContent = Math.floor(Math.random() * 10);
        thirdNumber.textContent = Math.floor(Math.random() * 10);
        secondLetter.textContent = letters[Math.floor(Math.random() * 11)];
        thirdLetter.textContent = letters[Math.floor(Math.random() * 11)];
    }
    console.log(firstLetter);
    console.log(firstNumber);
    console.log(secondNumber);
    console.log(thirdNumber);
    console.log(secondLetter);
    console.log(thirdLetter);
});
