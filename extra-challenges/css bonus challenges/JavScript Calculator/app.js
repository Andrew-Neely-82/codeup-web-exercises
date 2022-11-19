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

  $(document).ready(() => {
    $(`#one`).click(() => {
      $(`.result`).val($(`.result`).val() + `1`);
    });
    $(`#two`).click(() => {
      $(`.result`).val($(`.result`).val() + `2`);
    });
    $(`#three`).click(() => {
      $(`.result`).val($(`.result`).val() + `3`);
    });
    $(`#four`).click(() => {
      $(`.result`).val($(`.result`).val() + `4`);
    });
    $(`#five`).click(() => {
      $(`.result`).val($(`.result`).val() + `5`);
    });
    $(`#six`).click(() => {
      $(`.result`).val($(`.result`).val() + `6`);
    });
    $(`#seven`).click(() => {
      $(`.result`).val($(`.result`).val() + `7`);
    });
    $(`#eight`).click(() => {
      $(`.result`).val($(`.result`).val() + `8`);
    });
    $(`#nine`).click(() => {
      $(`.result`).val($(`.result`).val() + `9`);
    });
    $(`#zero`).click(() => {
      $(`.result`).val($(`.result`).val() + `0`);
    });
    $(`#decimal`).click(() => {
      $(`.result`).val($(`.result`).val() + `.`);
    });
    $(`#add`).click(() => {
      let value = $(`.result`).val();
      let valueArray = value.split(``);
      let lastValue = valueArray[valueArray.length - 1];
      if (lastValue === `+` || lastValue === `-` || lastValue === `*` || lastValue === `/`) {
        valueArray.pop();
        valueArray.push(`+`);
        $(`.result`).val(valueArray.join(``));
      } else {
        $(`.result`).val($(`.result`).val() + `+`);
      }
    });
    $(`#subtract`).click(() => {
      let value = $(`.result`).val();
      let valueArray = value.split(``);
      let lastValue = valueArray[valueArray.length - 1];
      if (lastValue === `+` || lastValue === `-` || lastValue === `*` || lastValue === `/`) {
        valueArray.pop();
        valueArray.push(`-`);
        $(`.result`).val(valueArray.join(``));
      } else {
        $(`.result`).val($(`.result`).val() + `-`);
      }
    });
    $(`#multiply`).click(() => {
      let value = $(`.result`).val();
      let valueArray = value.split(``);
      let lastValue = valueArray[valueArray.length - 1];
      if (lastValue === `+` || lastValue === `-` || lastValue === `*` || lastValue === `/`) {
        valueArray.pop();
        valueArray.push(`*`);
        $(`.result`).val(valueArray.join(``));
      } else {
        $(`.result`).val($(`.result`).val() + `*`);
      }
    });
    $(`#divide`).click(() => {
      let value = $(`.result`).val();
      let valueArray = value.split(``);
      let lastValue = valueArray[valueArray.length - 1];
      if (lastValue === `+` || lastValue === `-` || lastValue === `*` || lastValue === `/`) {
        valueArray.pop();
        valueArray.push(`/`);
        $(`.result`).val(valueArray.join(``));
      } else {
        $(`.result`).val($(`.result`).val() + `/`);
      }
    });
    $(`#percent`).click(() => {
      let value = $(`.result`).val();
      let valueArray = value.split(``);
      let lastValue = valueArray[valueArray.length - 1];
      if (lastValue === `+` || lastValue === `-` || lastValue === `*` || lastValue === `/`) {
        valueArray.pop();
        valueArray.push(`%`);
        $(`.result`).val(valueArray.join(``));
      } else {
        $(`.result`).val($(`.result`).val() + `%`);
      }
    });
    $(`#equals`).click(() => {
      let value = $(`.result`).val();
      let valueArray = value.split(``);
      let lastValue = valueArray[valueArray.length - 1];
      if (lastValue === `+` || lastValue === `-` || lastValue === `*` || lastValue === `/`) {
        valueArray.pop();
        $(`.result`).val(valueArray.join(``));
      } else {
        $(`.result`).val(eval($(`.result`).val()));
      }
    });
    $(`#clear`).click(() => {
      $(`.result`).val(``);
    });
    $(`#plus-minus`).click(() => {
      let value = $(`.result`).val();
      let valueArray = value.split(``);
      let lastValue = valueArray[valueArray.length - 1];
      if (lastValue === `+` || lastValue === `-` || lastValue === `*` || lastValue === `/`) {
        valueArray.pop();
        valueArray.push(`-`);
        $(`.result`).val(valueArray.join(``));
      } else {
        $(`.result`).val($(`.result`).val() + `-`);
      }
    });
  });
})();
