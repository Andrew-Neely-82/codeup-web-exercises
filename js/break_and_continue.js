// TODO --- BREAK AND CONTINUE ---


// TODO Q1

function skipOddNumbersAnd27() {
    for (let x = 1; x < 50; x++) {
        if (x === 27) {
            console.log(`Yikes! Skipping ${x}`)
        }
        else if (x % 2 !== 0) {
            console.log(`Here is an odd number: ${x}`)
        }
    }
}

console.log(`Break and Continue - Exercise 1`);
skipOddNumbersAnd27();
console.log(``);