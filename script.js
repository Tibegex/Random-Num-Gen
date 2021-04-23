// PROMPTS
//LENGTH
//LOWERCASE
//UPPERCASE
//NUMERIC
//SPECIAL CHARACTERS
// CONFIRMATION
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var oldPwd = [];
var arrType;
var pwd = "";
var enter;
var lower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacter = [
  " ",
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

var randomizer;
var selection;
var generate = document.querySelector("#generate");

// generate.addEventListener("click", function () {
//   generatePassword();
// });

function generatePassword() {
  pwd = "";
  do {
    enter = prompt(
      "Please select your a length for your password between 8 and 128 character."
    );

    if (enter == null) {
      return;
    }
    enter = parseInt(enter);
  } while (enter < 8 || enter > 128 || isNaN(enter));

  conLower = confirm("Would you like lower case letters?");
  conUpper = confirm("Would you like UPPER CASE LETTERS?");
  conNumeric = confirm("Would you like NUMBERS? 0123456789");
  conSpecialCharacter = confirm("Would you like special characters? !@#$%^&*");
  while (
    conLower === false &&
    conUpper === false &&
    conNumeric === false &&
    conSpecialCharacter === false
  ) {
    alert("You must select at least one option.");
    conLower = confirm("Would you like lower case letters?");
    conUpper = confirm("Would you like UPPER CASE LETTERS?");
    conNumeric = confirm("Would you like NUMBERS? 0123456789");
    conSpecialCharacter = confirm(
      "Would you like special characters? !@#$%^&*"
    );
  }

  // 4 true
  console.log(enter);

  if (
    conLower === true && //1
    conUpper === true && //2
    conNumeric === true && //3
    conSpecialCharacter === true //4

    //random genartor 0-3, if/else,
  ) {
    for (i = 0; i < enter; i++) {
      randomizer = Math.floor(Math.random() * 4);
      //   console.log(randomizer);
      if (randomizer == 0) {
        pwd += lower[Math.floor(Math.random() * (lower.length - 1))];
      } else if (randomizer == 1) {
        pwd += upper[Math.floor(Math.random() * (upper.length - 1))];
      } else if (randomizer == 2) {
        pwd += numeric[Math.floor(Math.random() * (numeric.length - 1))];
      } else {
        pwd +=
          specialCharacter[
            Math.floor(Math.random() * (specialCharacter.length - 1))
          ];
      }
    }
    console.log(i);
  }

  // 3 true
  else if (
    conLower === true && //1
    conUpper === true && //2
    conNumeric === true //3
  ) {
    for (i = 0; i < enter; i++) {
      randomizer = Math.floor(Math.random() * 3);
      if (randomizer == 0) {
        pwd += lower[Math.floor(Math.random() * (lower.length - 1))];
      } else if (randomizer == 1) {
        pwd += upper[Math.floor(Math.random() * (upper.length - 1))];
      } else {
        pwd += numeric[Math.floor(Math.random() * (numeric.length - 1))];
      }
    }
  } else if (
    conLower === true && //1
    conUpper === true && //2
    conSpecialCharacter === true //4
  ) {
    for (i = 0; i < enter; i++) {
      randomizer = Math.floor(Math.random() * 3);
      if (randomizer == 0) {
        pwd += lower[Math.floor(Math.random() * (lower.length - 1))];
      } else if (randomizer == 1) {
        pwd += upper[Math.floor(Math.random() * (upper.length - 1))];
      } else {
        pwd +=
          specialCharacter[
            Math.floor(Math.random() * (specialCharacter.length - 1))
          ];
      }
    }
  } else if (
    conLower === true && //1
    conNumeric === true && //3
    conSpecialCharacter === true //4
  ) {
    for (i = 0; i < enter; i++) {
      randomizer = Math.floor(Math.random() * 3);
      if (randomizer == 0) {
        pwd += lower[Math.floor(Math.random() * (lower.length - 1))];
      } else if (randomizer == 1) {
        pwd += numeric[Math.floor(Math.random() * (numeric.length - 1))];
      } else {
        pwd +=
          specialCharacter[
            Math.floor(Math.random() * (specialCharacter.length - 1))
          ];
      }
    }
  } else if (
    conUpper === true && //2
    conNumeric === true && //3
    conSpecialCharacter === true //4
  ) {
    for (i = 0; i < enter; i++) {
      randomizer = Math.floor(Math.random() * 3);
      if (randomizer == 0) {
        pwd += upper[Math.floor(Math.random() * (upper.length - 1))];
      } else if (randomizer == 1) {
        pwd += numeric[Math.floor(Math.random() * (numeric.length - 1))];
      } else {
        pwd +=
          specialCharacter[
            Math.floor(Math.random() * (specialCharacter.length - 1))
          ];
      }
    }
  }

  // 2 truths
  else if (
    conLower === true && //1
    conUpper === true //2
  ) {
    for (i = 0; i < enter; i++) {
      randomizer = Math.floor(Math.random() * 2);
      if (randomizer == 0) {
        pwd += lower[Math.floor(Math.random() * (lower.length - 1))];
      } else {
        pwd += upper[Math.floor(Math.random() * (upper.length - 1))];
      }
    }
  } else if (
    conLower === true && //1
    conNumeric === true //3
  ) {
    for (i = 0; i < enter; i++) {
      randomizer = Math.floor(Math.random() * 2);
      if (randomizer == 0) {
        pwd += lower[Math.floor(Math.random() * (lower.length - 1))];
      } else {
        pwd += numeric[Math.floor(Math.random() * (numeric.length - 1))];
      }
    }
  } else if (
    conLower === true && //1
    conSpecialCharacter === true //4
  ) {
    for (i = 0; i < enter; i++) {
      randomizer = Math.floor(Math.random() * 2);
      if (randomizer == 0) {
        pwd += lower[Math.floor(Math.random() * (lower.length - 1))];
      } else {
        pwd +=
          specialCharacter[
            Math.floor(Math.random() * (specialCharacter.length - 1))
          ];
      }
    }
  } else if (
    conUpper === true && //2
    conNumeric === true //3
  ) {
    for (i = 0; i < enter; i++) {
      randomizer = Math.floor(Math.random() * 2);
      if (randomizer == 0) {
        pwd += upper[Math.floor(Math.random() * (upper.length - 1))];
      } else {
        pwd += numeric[Math.floor(Math.random() * (numeric.length - 1))];
      }
    }
  } else if (
    conUpper === true && //2
    conSpecialCharacter === true //4
  ) {
    for (i = 0; i < enter; i++) {
      randomizer = Math.floor(Math.random() * 2);
      if (randomizer == 0) {
        pwd += upper[Math.floor(Math.random() * (upper.length - 1))];
      } else {
        pwd +=
          specialCharacter[
            Math.floor(Math.random() * (specialCharacter.length - 1))
          ];
      }
    }
  } else if (
    conNumeric === true && //3
    conSpecialCharacter === true //4
  ) {
    for (i = 0; i < enter; i++) {
      randomizer = Math.floor(Math.random() * 2);
      if (randomizer == 0) {
        pwd += numeric[Math.floor(Math.random() * (numeric.length - 1))];
      } else {
        pwd +=
          specialCharacter[
            Math.floor(Math.random() * (specialCharacter.length - 1))
          ];
      }
    }
  }

  // 1 truthful
  else if (conLower === true) {
    //1
    for (i = 0; i < enter; i++) {
      pwd += lower[Math.floor(Math.random() * (lower.length - 1))];
    }
  } else if (conUpper === true) {
    //2
    for (i = 0; i < enter; i++) {
      pwd += upper[Math.floor(Math.random() * (upper.length - 1))];
    }
  } else if (conNumeric === true) {
    //3
    for (i = 0; i < enter; i++) {
      pwd += numeric[Math.floor(Math.random() * (numeric.length - 1))];
    }
  } else if (conSpecialCharacter === true) {
    //4
    for (i = 0; i < enter; i++) {
      pwd +=
        specialCharacter[
          Math.floor(Math.random() * (specialCharacter.length - 1))
        ];
    }
  }

  alert("Your password is:\n" + pwd);
  oldPwd.push(pwd);

  return oldPwd.join("\n");

  //   console.log(pwd);
}

// ________________  __   ___
//|_____   _______| | |  |  |
//     |  |        | |___| |
//    |  |        |  ____ |
//   |  |        | |    | |
//  |__|        |_|    |_|
