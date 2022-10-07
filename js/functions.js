"use strict";

// Remember to IIFE before commit to Git

// Console.log's for personal confirmation on answers

(function() {

    /**
     * TODO: Q1
     * Create a function called 'sayHello' that takes a parameter 'name'.
     * When called, the function should return a message that says hello to the passed in name.
     *
     * Example
     * > sayHello("codeup") // returns "Hello, codeup!"
     */



    function sayhello(name) {
        return "Hello, " + name;
    }

    console.log("Q1: " + sayhello("Andrew"));



    /**
     * TODO: Q2
     * Call the function 'sayHello' and pass your name as a string literal argument.
     * Store the result of the function call in a variable named 'helloMessage'.
     *
     * console.log 'helloMessage' to check your work
     */



    sayhello('Andrew');
    let helloMessage = sayhello('Andrew');
    console.log("Q2: " + "helloMessage = " + helloMessage);



    /**
     * TODO: Q3
     * Store your name as a string in a variable named 'myName', and pass that
     * variable to the 'sayHello' function. You should see the same output in the
     * console.
     */



    let myName = 'Andrew'
    sayhello(myName)
    console.log("Q3: myName = " + sayhello(myName));



// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
    let random = Math.floor((Math.random() * 3) + 1);

    /**
     * TODO:Q4
     * Create a function called 'isTwo' that takes a number as a parameter.
     * The function should return a boolean value based on whether or not the passed
     * number is the number 2.
     *
     * Example
     * > isTwo(1) // returns false
     * > isTwo(2) // returns true
     * > isTwo(3) // returns false
     *
     * Call the function 'isTwo' passing the variable 'random' as a argument.
     *
     * console.log *outside of the function* to check your work (you should see a
     * different result everytime you refresh the page if you are using the random
     * number)
     */



    function isTwo(a) {
        if (a === 2) {
            return true;
        } else {
            return false;
        }
    }

    isTwo(random);
    console.log("Q4: Random number is " + random + " = " + isTwo(random));



    /**
     * TODO: Q5
     * Create a function named 'calculateTip' to calculate a tip on a bill at a
     * restaurant. The function should accept a tip percentage and the total of the
     * bill, and return the amount to tip
     *
     * Examples:
     * > calculateTip(0.20, 20) // returns 4
     * > calculateTip(0.25, 25.50) // returns 6.375
     * > calculateTip(0.15, 33.42) // returns 5.013
     */



    function calculateTip() {
        return (bill * tip)
    }



    /**
     * TODO: Q6
     * Use prompt and alert in combination with your calculateTip function to
     * prompt the user for the bill total and a percentage they would like to tip,
     * then display the dollar amount they should tip
     */



    let bill = Number(prompt("What is the total of your bill?")).toFixed(2)
    let tip = Number(prompt("What percentage do you want to tip? \r\r" + "ie... 0.20 for 20%")).toFixed(2)

    alert("The total tip amount is $" + calculateTip().toFixed(2))

    console.log("Q5: Tip is " + calculateTip().toFixed(2));
    console.log("Q6: Tip is " + calculateTip().toFixed(2));



    /**
     * TODO: Q7
     * Create a function named `applyDiscount`. This function should accept a price
     * (before a discount is applied), and a discount percentage (a number between 0
     * and 1). It should return the result of applying the discount to the original
     * price.
     *
     * Example:
     * > var originalPrice = 100;
     * > var discountPercent = .2; // 20%
     * > applyDiscount(originalPrice, discountPercent) // 80
     * > applyDiscount(45.99, 0.12) // 40.4712
     */



    function applyDiscount() {
        let originalPrice = Number(prompt("What is the original price?"))
        let discountPercent = Number(prompt("How much is the discount? \r\r" + "ie... 0.20"))
        return (originalPrice - (originalPrice * discountPercent))
    }

    console.log("Q7: Discount price is $" + applyDiscount().toFixed(4));



})();
