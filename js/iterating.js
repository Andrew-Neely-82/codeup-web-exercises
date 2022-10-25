(function(){
    "use strict";

    /**
     * TODO 1: DONE
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */



    let names = [`Andrew`, `Bob`, `Carl`, `David`]
    console.log((`TODO 1: let names = [\`Andrew\`, \`Bob\`, \`Carl\`, \`David\`]`));
    console.log((``));



    /**
     * TODO 2: DONE
     * Create a log statement that will log the number of elements in the names
     * array.
     */



    console.log(`TODO 2: ${names.length}`);
    console.log((``));



    /**
     * TODO 3: DONE
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */



    console.log(`TODO 3: ${names[0]}`);
    console.log(`TODO 3: ${names[1]}`);
    console.log(`TODO 3: ${names[2]}`);
    console.log(`TODO 3: ${names[3]}`);
    console.log((``));



    /**
     * TODO 4:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    // updated to use actual for loop

    // names.forEach(function (names) {
    //     console.log(`TODO 4: ${names}`);
    // })

    for (let i = 0; i < names.length; i++) {
        console.log(`TODO 4: ${names[i]}`);
    }

    console.log((``));



    /**
     * TODO 5: DONE
     * Refactor your above code to use a `forEach` loop
     */



    names.forEach(function (names){
            console.log(`TODO 5: ${names}`);
    })
    console.log((``));



    /**
     * TODO 6:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */



    function firstName(x){
        console.log(`TODO 6: ${x[0]}`);
    }
    function secondName(x){
        console.log(`TODO 6: ${x[1]}`);
    }
    // function lastName(x){
    //     console.log(`TODO 6: ${x[3]}`);
    // }

    // realized I did this wrong on review

    function lastName(x) {
        return console.log(`TODO 6: ${x[x.length - 1]}`)
    }

    firstName(names);
    secondName(names);
    lastName(names);



})();
