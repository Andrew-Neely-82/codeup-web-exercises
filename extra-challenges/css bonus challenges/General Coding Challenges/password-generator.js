(() => {
  `use strict`;
  // Password Generator

  // TODO: Create a script which will generate a random password, similar to this example. Allow your user to specify:

  // Total length
  // Number of special characters (including none)
  // Number of digits (including none)
  // Whether to use upper case, lower case, or both

  function passwordGenerator() {
    const passwordLength = Number(prompt(`How many characters do you want your password to be?`));
    const numberOfSpecialCharacters = Number(prompt(`How many special characters do you want your password to have?`));
    const numberOfDigits = Number(prompt(`How many digits do you want your password to have?`));
    const upperCase = confirm(`Do you want your password to have upper case letters?`);
    const lowerCase = confirm(`Do you want your password to have lower case letters?`);
    const specialCharacters = `!@#$%^&`;
    const digits = `0123456789`;
    let password = ``;
    let characters = ``;
    if (upperCase) {
      characters += `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    }
    if (lowerCase) {
      characters += `abcdefghijklmnopqrstuvwxyz`;
    }
    if (numberOfSpecialCharacters > 0) {
      characters += specialCharacters;
    }
    if (numberOfDigits > 0) {
      characters += digits;
    }
    for (let i = 0; i < passwordLength; i++) {
      password += characters[Math.floor(Math.random() * characters.length)];
    }
    return password;
  }

  passwordGenerator();
})();
