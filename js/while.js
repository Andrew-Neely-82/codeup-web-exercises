// TODO Q1

function powerOf2() {
    let x = 1;
    while (x < 60000) {
        console.log(x * 2);
        x = x * 2;
    }
}

console.log(`============ While Loop Exercise 1 ============`); console.log(``);
powerOf2();
console.log(``); console.log(``);


// TODO Q1 --- DO WHILE ---

function iceCreamCones(){
    let conesAvailable =  Math.floor(Math.random() * 50) + 50;
    do {
        let orders = Math.floor(Math.random() * 5) + 1;
        if (orders > conesAvailable) {
            console.log(`There's only ${conesAvailable} cones left...`);
        }
        else {
            conesAvailable -= orders;
            console.log(`You ordered ${orders} ice cream cones, we have ${conesAvailable} left.`)
        }
    }
    while (conesAvailable > 0);
    console.log(`Yay! I sold them all!`)
}

console.log(`============ Do While Exercise 1 ============`); console.log(``);
iceCreamCones();