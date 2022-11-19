(() => {
  `use strict`;

  // TODO Create a function that will:

  // Accept any number as input.
  // Validate that input and convert it to an integer as necessary.
  // Return the sum of the individual digits of that integer.

  function sumOfDigits(number) {
    let sum = 0;
    const digits = number.toString().split(``);
    for (let i = 0; i < digits.length; i++) {
      sum += Number(digits[i]);
    }
    return sum;
  }
  sumOfDigits(12345);
})();
