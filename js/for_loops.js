// TODO --- FOR LOOPS ---

// TODO Q1

function showMultiplicationTable(x) {
    for (let i = 1; i < 11; i++) {
        console.log(`${i} * ${x} = ` + (i * x));
    }
}

console.log(`For Loop Exercise 1`);
showMultiplicationTable(11);
console.log(``);



// TODO Q2


function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function isEvenOddTable() {
    for (let x = 1; x <= 10; x++) {
        let randomNumber = randomNum(20, 200);
        if (randomNumber % 2 === 0) {
            console.log(`${randomNumber} is even`);
        }
        else {
            console.log(`${randomNumber} is odd`);
        }
    }
}

console.log(`For Loop Exercise 2`);
isEvenOddTable();
console.log(``);



// TODO Q3

// Source: https://stackoverflow.com/questions/1877475/repeat-a-string-in-javascript-a-number-of-times
// Loops are really hard btw. Struggling.

function pyramidNumbers() {
    for (let x = 1; x < 10; x++) {
        console.log(Array(x + 1).join(x))
    }
}

console.log(`For Loop Exercise 3`);
pyramidNumbers();
console.log(``);



// TODO Q4

function reverseLoop() {
    for (let x = 100; x > 1; x--) {
        if (x % 5 === 0) {
            console.log(x)
        }
    }
}

console.log(`For Loop Exercise 4`);
reverseLoop();
console.log(``);