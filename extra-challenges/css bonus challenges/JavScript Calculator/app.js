(() => {
  `use strict`;

  // You can lay it out and design it however you like, but putting your data in three separate input fields (left operand, operator, right operand) will be essential. Use one or more click event listeners on the buttons to interact with your application. You can add readonly to your input fields to ensure the user does not accidentally type into them.

  // Bonus!
  // Looks like we left the decimal point (.) button off our example. D'oh! You should fix that for us.
  //
  // You might want to use anchor tags (<a>) instead of buttons to give yourself some more flexibility in terms of styling.
  //
  // There are a few functions the Apple Calculator does that ours does not, including converting number to negative and percentages.
  //
  // In addition, there are dozens more you could add such as square roots, exponents, trigonometry, etc.
  //
  // Convert the calculator to use Reverse Polish Notation. You may be surprised to discover this solution will take significantly
  //
  // less code and logic than our original solution! (For example, you would no longer need three separate input fields, just a simple textarea would work well.)
  //
  // Add the ability to convert and calculate values in binary and/or hexadecimal (hint: parseInt() can actually do a lot of this for you).

  // const numbers = {
  //   1: $(`#one`),
  //   2: $(`#two`),
  //   3: $(`#three`),
  //   4: $(`#four`),
  //   5: $(`#five`),
  //   6: $(`#six`),
  //   7: $(`#seven`),
  //   8: $(`#eight`),
  //   9: $(`#nine`),
  //   0: $(`#zero`),
  // };

  // const operators = {
  //   add: $(`#add`),
  //   subtract: $(`#subtract`),
  //   multiply: $(`#multiply`),
  //   divide: $(`#divide`),
  //   equals: $(`#equals`),
  // };

  // const decimal = $(`#decimal`);
  // const clear = $(`#clear`);
  // const display = $(`.result`);

  // let result = ``;

  function insert(num) {
    $(`.result-display`).val($(`.result-display`).val() + num);
  }


})();
