(() => {
  `use strict`;
  // TODO: Write a function that takes in a string variable and returns that
  // string reversed. While most languages provide their own built-in
  // functions to do this, the point of this challenge is to write your own.

  function reverseString(string) {
    let reversedString = ``;
    for (let i = string.length - 1; i >= 0; i--) {
      reversedString += string[i];
    }
    return reversedString;
  }

  reverseString(`Hello, world!`);
})();
