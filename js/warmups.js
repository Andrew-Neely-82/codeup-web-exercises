(() => {
  `use strict`;

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
      fur: ["orange", "white"],
      gender: "male",
      dateOfBirth: "August 6",
    },
    {
      name: "Bijou",
      heightInMM: 75,
      fur: ["white"],
      gender: "female",
      dateOfBirth: "July 10",
    },
    {
      name: "Oxnard",
      heightInMM: 100,
      fur: ["grey", "white"],
      gender: "male",
      dateOfBirth: "May 3",
    },
    {
      name: "Boss",
      heightInMM: 120,
      fur: ["brown", "white"],
      gender: "male",
      dateOfBirth: "September 21",
    },
    {
      name: "Snoozer",
      heightInMM: 85,
      fur: ["brown", "white", "pink"],
      gender: "male",
      dateOfBirth: "January 14",
    },
  ];

  // getTallestHamster(hamsters); // should return {name: "Boss", heightInMM: 120, fur: ['brown', 'white'], gender: "male", dateOfBirth: "September 21"};
  //
  // function getTallestHamster(hamsters) {
  //     let tallestHamster = {heightInMM: 0};
  //     hamsters.forEach(function(hamster){
  //         if (hamster.heightInMM > tallestHamster.heightInMM) {
  //             tallestHamster = hamster;
  //         }
  //     });
  //     return tallestHamster;
  // }
  //
  // console.log(getTallestHamster(hamsters));

  // TODO: FizzBuzz from 1-100;
  // Numbers evenly divisible by 3 should be replaced by Fizz
  // Numbers evenly divisible by 5 should be replaced by Buzz
  // Numbers evenly divisible by both 3 and 5 should be replaced by FizzBuzz
  // All other numbers should be printed in the console.

  // function fizzBuzz() {
  //     for (let i = 1; i <= 100; i++) {
  //         if (i % 3 === 0 && i % 5 === 0) {
  //             console.log(`FizzBuzz`);
  //         } else if (i % 3 === 0) {
  //             console.log(`Fizz`);
  //         } else if (i % 5 === 0) {
  //             console.log(`Buzz`);
  //         } else {
  //             console.log(i);
  //         }
  //     }
  // }
  //
  // fizzBuzz();
  //

  // TODO: Today's warmup: Write a function that takes in an array of objects and
  // returns the average of the heightInMM properties from each object.

  function getAverageHeight(array) {
    let total = 0;
    array.forEach((hamster) => {
      total += hamster.heightInMM;
    });
    console.log(total / array.length);
  }

  getAverageHeight(hamsters);
})();
