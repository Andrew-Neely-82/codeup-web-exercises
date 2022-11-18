"use strict";

(() => {
  // TODO --- BREAK AND CONTINUE ---

  // TODO Q1

  function skipOddNumbersAnd27() {
    let x;
    while (true) {
      x = parseFloat(prompt(`Type a number from 1-50 that is odd`));
      if (x % 2 !== 0 && x >= 1 && x <= 50) {
        break;
      }
    }
    for (let i = 1; i < 50; i++) {
      if (x === i) {
        console.log(`Yikes, Skipping: ${x}`);
        continue;
      } else if (i % 2 === 0) {
        continue;
      }
      console.log(`Here is an odd number: ${i}`);
    }
  }

  console.log(`============ Break and Continue - Exercise 1 ============`);
  console.log(``);
  skipOddNumbersAnd27();
  console.log(``);
  console.log(``);
})();
