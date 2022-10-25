"use strict";

// IIFE before push to GitHub

(function(){

/**
 * TODO: Q1
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */



function analyzeColor(color) {
    if (color === "red") {
        return "Q1: " + color  + " is the color for hot";
    }
    else if (color === "orange") {
        return "Q1: " + color  + " is for road cones";
    }
    else if (color === "yellow") {
        return "Q1: " + color  + " is for the sun";
    }
    else if (color === "green") {
        return "Q1: " + color  + " is for grass";
    }
    else if (color === "blue") {
        return "Q1: " + color  + " is for water";
    }
    else if (color === "indigo") {
        return "Q1: " + color + " is for airline tickets";
    }
    else if (color === "violet") {
        return "Q1: " + color + " is for the girl in willy wonka";
    }
    else {
        return "Q1: I don't know anything about " + color;
    }
}

console.log(analyzeColor("red"));
console.log(analyzeColor("orange"));
console.log(analyzeColor("yellow"));
console.log(analyzeColor("green"));
console.log(analyzeColor("blue"));
console.log(analyzeColor("indigo"));
console.log(analyzeColor("violet"));
console.log(``)





// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO: Q2
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */



console.log(`Q2: ${analyzeColor(randomColor)}`);
console.log(``);


    /**
 * TODO: Q3
 * Comment out the code above, and refactor your function to use a switch-case statement
 */


 switch(randomColor) {
     case "red":
         console.log("Q3: red is the color for hot");
         break;
     case "orange":
         console.log("Q3: blue is for road cones");
         break;
     case "yellow":
         console.log("Q3: yellow is for the sun")
         break;
     case "green":
         console.log("Q3: green is for grass");
         break;
     case "blue":
         console.log("Q3: blue is for water");
         break;
     case "indigo":
         console.log("Q3: indigo is for airline tickets");
         break;
     case "violet":
         console.log("Q3: violet is for airline tickets");
         break;
     default:
         console.log("Q3: I don't know anything about cyan");
         break;
 }

    console.log(``);

    /**
 * TODO: Q4
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */


let userColor = prompt("Choose a color: red, orange, yellow, green, blue, indigo, or cyan").toLowerCase();

alert(analyzeColor(userColor));


/**
 * TODO: Q5
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */



function calculateTotal(luckyNumber, price) {
    if (luckyNumber === 0) {
        return console.log("Q5: $" + (price - (0)).toFixed(2))
    }
    else if (luckyNumber === 1) {
        return console.log("Q5: $" + (price - (price * 0.1)).toFixed(2));
        }
    else if (luckyNumber === 2) {
        return console.log("Q5: $" + (price - (price * 0.25)).toFixed(2));
    }
    else if (luckyNumber === 3) {
        return console.log("Q5: $" + (price - (price * 0.35)).toFixed(2));
    }
    else if (luckyNumber === 4) {
        return console.log("Q5: $" + (price - (price * 0.5)).toFixed(2));
    }
    else {
        return console.log("Q5: It's FREE!!!")
    }
}

//let price = Number(prompt("How much does it cost?"))
//let luckyNumber = Number(prompt("What's your lucky number? \r\r 0-5"))

calculateTotal(0, 100);
calculateTotal(1, 100);
calculateTotal(2, 100);
calculateTotal(3, 100);
calculateTotal(4, 100);
calculateTotal(5, 100);
console.log(``);
console.log(`Below log is Q6`)


    /**
 * TODO 6:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
let luckyNumber = Math.floor(Math.random() * 6);
let bill = parseInt(prompt("Whats your total bill?"));

let priceAfter = calculateTotal(luckyNumber, bill);

alert("Your lucky number is " + luckyNumber + " Price before discount is " + bill + " and price after is " + priceAfter);



/**
 * TODO: Q7
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */


function askToPlay() {
    let letsPlay = confirm("Would you like to enter a number?");
    if (letsPlay === false) {
        alert("ok then...")
    }
    else if (letsPlay === true) {
        const userInput = Number(prompt("Enter a number"));
        isNumber(userInput)
    }
}

function isOddOrEven(x) {
    if (x % 2 === 0) {
        alert(x + " is Even!")
    }
    else alert(x + " is Odd!")
}

function plus100(x) {
    alert("100 + " + x + " is " + (x + 100))
}

function isPositiveOrNegative(x) {
    if (x > 0) {
        alert(x + " is Positive!")
    }
    else alert(x + " is Negative!")
}

function isNumber(x) {
    if (isNaN(x)) {
        alert("That is not a number data type!");
    }
    else if (!isNaN(x)) {
        isOddOrEven(x);
        plus100(x);
        isPositiveOrNegative(x);
    }
}


askToPlay();




})();