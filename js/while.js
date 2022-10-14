// TODO Q1

function powerOf2() {
    let x = 1;
    while (x < 60000) {
        console.log(x * 2);
        x = x * 2;
    }
}

console.log(`While Loop Exercise 1`);
powerOf2();
console.log(``);


// TODO Q1 --- DO WHILE ---

function iceCreamCones(){
    let conesLeft =  Math.floor(Math.random() * 50) + 50;
    do {
        let orders = Math.floor(Math.random() * 5) + 1;
        if (orders > conesLeft){
            console.log(`There's only ${conesLeft} cones left...`);
        }
        else{
            conesLeft -= orders;
            console.log(`You ordered ${orders} cones, we have ${conesLeft} left.`)
        }
    }
    while (conesLeft > 0);
    console.log(`Yay! I sold them all!`)
}

console.log(`Do While Exercise 1`);
iceCreamCones();