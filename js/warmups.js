// TODO Warmup 1
// Write a function that when passed an object will return the value of the object’s price property.
// Ex. let obj = {name: “Potatoes”, quantity: 2, price: “$7.89"};
// getPrice(obj); // returns “$7.89”

// let obj = {name: `Potatoes`, quantity: 2, price: `$7.89`}
//
// function getPrice(obj) {
//     return obj.price;
// }
//
// console.log(getPrice(obj));


// =====================================================================================================================

// // TODO Warmup 2
//
// function longestString(array) {
//     let longest = '';
//     array.forEach(function(string) {
//         if (string.length > longest.length) {
//             longest = string;
//         }
//     });
//     return console.log(longest);
// }
//
// let array = ['Audi', 'BMW', 'Citroen', 'Dacia', 'Ferrari', 'Mercedes', 'Porsche', 'Volkswagen'];
//
// longestString(array);

// =====================================================================================================================

// TODO Warmup 3

const hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "September 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

getTallestHamster(hamsters); // should return {name: "Boss", heightInMM: 120, fur: ['brown', 'white'], gender: "male", dateOfBirth: "September 21"};

function getTallestHamster(hamsters) {
    let tallestHamster = {heightInMM: 0};
    hamsters.forEach(function(hamster){
        if (hamster.heightInMM > tallestHamster.heightInMM) {
            tallestHamster = hamster;
        }
    });
    return tallestHamster;
}

console.log(getTallestHamster(hamsters));