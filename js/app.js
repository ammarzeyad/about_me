'use strict';
let score = 0;
let name = prompt('What is your name?');
console.log('User name: ' + name);

alert(' HELLO ' + name + ', Welcome to my webpage budy !');
alert('Do you mind if we play a guessing game about me ? . \nOnly yes or no answers are allaowad .');

function yesCorrect (question) {
    if (question.toLowerCase() === 'yes') {
        score++;
        alert(' You are right . ');
    }
    else if (question.toLowerCase() === 'no'){
        alert('Sorry, wrong answer.');
    }
    else {
        alert('This answer is not valid');
    }
}

function noCorrect (question) {
    if (question.toLowerCase() === 'no') {
        alert('Sorry, wrong answer.');
    }
    else if (question.toLowerCase() === 'yes'){
        score++;
        alert(' You are right . ');
    }
    else {
        alert('This answer is not valid');
    }
}

let play = prompt(' Are You Ready To Play ? ');
console.log('Yes im Ready: ' + play);
yesCorrect(play);

let ps = prompt(' Do you think i like problem solving ?');
console.log('i like problem solving: ' + ps);
yesCorrect(ps);

let favColor = prompt(' Is my favorite color Blue ? ');
console.log('my favorite color: ' + favColor);
yesCorrect(favColor);

let age = prompt(' Do you think im 21 years old ? ');
console.log('my age is ' + age);
yesCorrect(age);


let food = prompt(' Do you think i like Manasf ? ');
console.log('my favorite food is ' + food);
yesCorrect(food);


function guessFavoriteNumber() {
    let counter = 1;
    if (counter === 5) {
        alert('Sorry you run out of guesses');
    }
    while (counter < 5 && number !==25) {
        var number = parseInt(prompt('Guess my favorite number'));
        if (number > 25) {
            alert('too high! Try again');
            counter++;
        } else if (number < 25) {
            alert('too low! Try again');
            counter++;
        }
    }
    if (number === 25) {
        alert('That is correct! My favorite number is 25!');
        score++;
        counter = 5;
    }
}

guessFavoriteNumber();


function GussFavoriteFood() {
    let userFavFood = ['mansaf', 'fish', 'white rice', 'chicken', 'pizza', 'burger', 'shawerma', 'maqloba', 'wings'];

    for (let i = 0; i < 6; i++) {
        let userAnsw = prompt('Can you guess my favorite food?');
        let guess = userAnsw.toLowerCase();

        for (let j = 0; j < userFavFood.length; j++){
            if (guess === userFavFood[j]) {
                alert('Congrats you got it right!!!');
                score++;
                i = 6;
                break;
            }
        }
        if (i !==6){
            alert('Sorry wrong answer, try again');
        }
    }
}

GussFavoriteFood();

alert('My favorite food are: mansaf, pizza, burger');

alert('Awsoem Job budy !... You got ' + score + ' the correct answers are ! ');
