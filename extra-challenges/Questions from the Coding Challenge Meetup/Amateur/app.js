(() => {
  `use strict`;
  console.log(`Amateur Answers" `);
  console.log(``);

  // TODO Write a function that returns the SUM of a sequence of numbers. This sequence is determined by three variables: start, finish, and step. The sequence begins at start, ends at finish, and goes up by step until it reaches finish or a number that when increased by step would go past finish.

  // *Examples:

  // *Input: start: 1 finish: 4 step: 1 | Output: 10
  // *Input: start: 4 finish: 10 step: | Output: 13 <= i think the step is missing here...

  function sumSequence(array) {
    let start = array[0];
    let finish = array[1];
    let step = array[2];
    let sum = 0;
    for (let i = start; i <= finish; i += step) {
      sum += i;
    }
    return sum;
  }

  console.log(`Q 1:`);
  console.log(sumSequence([1, 4, 1]));
  console.log(sumSequence([4, 10, 5]));
  console.log(``);

  // TODO: Given a string of any length with any characters in it, write a function to determine whether or not the string contains the whole word "english". The order of characters/spelling is important, a string "agkjnenglishsad" would return true while "asdneglihsth" would return false. Upper and lower case does not matter. Return values should be booleans (true/false).

  // *Examples:

  // *Input: "FaagdnglishAGG" | Output: false
  // *Input: "SMFENgliSHasnD" | Output: true

  function isEnglish(str) {
    let english = "english";
    let strArr = str.toLowerCase().split("");
    let englishArr = english.split("");
    let count = 0;
    for (let i = 0; i < strArr.length; i++) {
      if (strArr[i] === englishArr[count]) {
        count++;
      }
    }
    if (count === englishArr.length) {
      return true;
    } else {
      return false;
    }
  }

  console.log(`Q 2:`);
  console.log(isEnglish("FaagdnglishAGG"));
  console.log(isEnglish("SMFENgliSHasnD"));
  console.log(``);

  // TODO: Given an array of integers, write a function that returns an array of 2 integers. The first integer will be the count of the positive integers, and the second integer will be the sum of the negative integers. If the input is empty or null, return an empty array.

  // *Examples:

  // *Input: [1, -6, 5, 4, 3, -7, -10, 201, -3] | Output: [5, -26]
  // *Input: null | Output: []

  function countPosSumNeg(arr) {
    if (arr === null) {
      return [];
    }
    let posCount = 0;
    let negSum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        posCount++;
      } else {
        negSum += arr[i];
      }
    }
    return [posCount, negSum];
  }

  console.log(`Q 3:`);
  console.log(countPosSumNeg([1, -6, 5, 4, 3, -7, -10, 201, -3]));
  console.log(countPosSumNeg(null));
  console.log(``);

  // TODO: Write a function that translates an input string by replacing each character with a number representing the amount of times that character appears in the string. Then separate each individual number with a different character.

  // *Examples:

  // *Input: "hello world", "-" | Output: "1-1-3-3-2-1-1-2-1-3-1"
  // *Input: "challenge", "/" | Output: "1/1/1/2/2/2/1/1/2"

  console.log(`Q 4:`);

  console.log(``);

  // TODO: Given a string of names like this: "Travis:Meyer;Gene:Carangal;Tom:Young;Jeff:Meyer", write a function that makes the entire string uppercase and sorts it in alphabetical order by last name. If the last names are the same sort them by the first name. Put the last name in front of the first name, remove the colons and semicolons, put the names in parentheses and separate the names with commas.

  // *Example:

  // *The end string should look like this: "(CARANGAL, GENE)(MEYER, JEFF)(MEYER, TRAVIS)(YOUNG, TOM)"

  console.log(`Q 5:`);

  console.log(``);

  // TODO: Write a function to calculate a person’s age based on the date entered in the format MM/DD/YYYY.

  // *Example:

  // *Input: 11/04/1982
  // *Output: 34

  console.log(`Q 6:`);

  console.log(``);

  // TODO: Write a function to convert a string into an array of words.

  // *Example:

  // *Input: "Trick or Treat"
  // *Output: [‘Trick’, ‘or’, ‘Treat’]

  console.log(`Q 7:`);

  console.log(``);

  // TODO: Write a function to count the number of occurrences of a substring in a given string.

  // *Example:

  // *Input: "The pumpkin rolled down the hill and under someone’s car.", "the"
  // *Output: 2

  console.log(`Q 8:`);

  console.log(``);

  // TODO: Write a function to remove these special characters from a string: ~,!,$,&,%, ,#,@,-,_,^,? (yes, "space" is a character in that list)

  // *Examples:

  // *Input: "Happy ~!&$%#@- Halloween" | Output: "HappyHalloween"
  // *Input: "I’ll bet living in a nudist-colony takes all the fun out of Halloween!!" | Output: "IllbetlivinginanudistcolonytakesallthefunoutofHalloween"

  console.log(`Q 9:`);

  console.log(``);

  // TODO: Write a function called "multiply" that takes two integers and returns the product. You are NOT allowed to use the * operator or any imported multiplication function. We will check your code.

  // *Example:

  // *Input: multiply(5, 6) | Output: 30
  // *Input: multiply(-1, 15) | Output: -15
  // *Input: multiply(-2, -7) | Output: 14

  function multiply(num1, num2) {
    let product = 0;
    for (let i = 0; i < Math.abs(num2); i++) {
      product += Math.abs(num1);
    }
    if (num1 < 0 && num2 < 0) {
      return product;
    } else if (num1 < 0 || num2 < 0) {
      return -product;
    } else {
      return product;
    }
  }

  console.log(`Q 10:`);
  console.log(multiply(5, 6));
  console.log(multiply(-1, 15));
  console.log(multiply(-2, -7));
  console.log(``);

  // TODO: Write a function that takes a string and returns true if all of the characters are the same case, false otherwise.

  // *Examples:

  // *Input: "hello world" | Output: true
  // *Input: "HELLO WORLD" | Output: true
  // *Input: "HeLLo wORld" | Output: false

  function isSameCase(str) {
    let lowerCase = str.toLowerCase();
    let upperCase = str.toUpperCase();
    if (str === lowerCase || str === upperCase) {
      return true;
    } else {
      return false;
    }
  }

  console.log(`Q 11:`);
  console.log(isSameCase("hello world"));
  console.log(isSameCase("HELLO WORLD"));
  console.log(isSameCase("HeLLo wORld"));
  console.log(``);

  // TODO: Write a function that takes an array of integers and returns an array of integers where each number is the sum of itself and all of the previous numbers in the array.

  // *Example:

  // *Input: [1, 1, 1] | Output: [1, 2, 3]
  // *Input: [4, 2, 1, 3, 5] | Output: [4, 6, 7, 10, 15]

  function sumOfPrev(arr) {
    let newArr = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      newArr.push(sum);
    }
    return newArr;
  }

  console.log(`Q 12:`);
  console.log(sumOfPrev([1, 1, 1]));
  console.log(sumOfPrev([4, 2, 1, 3, 5]));
  console.log(``);

  // TODO: An Isogram is a word that has no repeating letters, consecutive or not. Write a function that takes a string and returns true if it’s an isogram and false if it isn’t.

  // *Examples:

  // *Input: "fish" | Output: true
  // *Input: "food" | Output: false
  // *Input: "color" | Output: false

  function isIsogram(str) {
    let strArr = str.toLowerCase().split("");
    let strSet = new Set(strArr);
    if (strArr.length === strSet.size) {
      return true;
    } else {
      return false;
    }
  }

  console.log(`Q 13:`);
  console.log(isIsogram("fish"));
  console.log(isIsogram("food"));
  console.log(isIsogram("color"));
  console.log(``);

  // TODO: Write a function that takes a phone number with letters in it and converts it to one with only numbers. All input phone numbers will follow this pattern: "###-###-####" (Hint: Search for "phone keypad")

  // *Examples:

  // *Input: 210-367-CODE | Output: 210-367-2633
  // *Input: TRY-THE-FOOD | Output: 879-843-3663

  function convertPhoneNumber(number) {
    let phoneArr = number.split("");
    for (let i = 0; i < phoneArr.length; i++) {
      switch (phoneArr[i]) {
        case "A":
        case "B":
        case "C":
          phoneArr[i] = 2;
          break;
        case "D":
        case "E":
        case "F":
          phoneArr[i] = 3;
          break;
        case "G":
        case "H":
        case "I":
          phoneArr[i] = 4;
          break;
        case "J":
        case "K":
        case "L":
          phoneArr[i] = 5;
          break;
        case "M":
        case "N":
        case "O":
          phoneArr[i] = 6;
          break;
        case "P":
        case "Q":
        case "R":
        case "S":
          phoneArr[i] = 7;
          break;
        case "T":
        case "U":
        case "V":
          phoneArr[i] = 8;
          break;
        case "W":
        case "X":
        case "Y":
        case "Z":
          phoneArr[i] = 9;
          break;
        default:
          break;
      }
    }
    return phoneArr.join("");
  }

  console.log(`Q 14:`);
  console.log(convertPhoneNumber("210-367-CODE"));
  console.log(convertPhoneNumber("TRY-THE-FOOD"));
  console.log(``);

  // TODO: Write a function that returns all possible partitions of an array from left to right. With an n amount of elements in the input the returned array should have n-1 subarrays. An empty array should return an empty array.

  // Examples:

  // *Input: [1, 5, 3, 2] | Output: [[[1], [5, 3, 2]], [[1, 5], [3, 2]], [[1, 5, 3], [2]]]
  // *Input: [a, b, c] | Output: [[[a], [b, c]], [[a, b], [c]]]

  function possiblePartitions(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
      newArr.push([arr.slice(0, i + 1), arr.slice(i + 1)]);
    }
    return newArr;
  }

  console.log(`Q 15:`);
  console.log(possiblePartitions([1, 5, 3, 2]));
  console.log(possiblePartitions([`a`, `b`, `c`]));
  console.log(``);
})();
