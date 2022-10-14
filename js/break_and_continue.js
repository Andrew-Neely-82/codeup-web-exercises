"use strict";

// TODO --- BREAK AND CONTINUE ---


// TODO Q1

function skipOddNumbersAnd27(){
    let input;
    while (true){
        input = parseFloat(prompt(`Type a number from 1-50 that is odd`))
        if (input % 2 !==0 && input >=1 && input <= 50){
            break;
        }
    }
    for (let i = 1; i < 50; i++){
        if (input === i){
            console.log(`Skipping: ${input}`)
            continue;
        }
        else if (i%2 ===0){
            continue;
        }
        console.log(`Here is an odd number: ${i}`);
    }
}

console.log(`Break and Continue - Exercise 1`);
skipOddNumbersAnd27();
console.log(``);