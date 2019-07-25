const camelCase = function (input) {
  var newString = "";

  for (var i = 0; i < input.length; i++) {
    if (i > 0 && input[i - 1] === " ") {
      newString += input[i].toUpperCase();
    } else if (input[i] != " ") {
      newString += input[i];
    }
  }
  return newString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));