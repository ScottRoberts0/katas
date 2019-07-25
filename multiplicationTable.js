const multiplicationTable = function (maxValue) {
  var table = "";

  for (var i = 1; i <= maxValue; i++) {

    for (var j = 1; j <= maxValue; j++) {
      table += i * j + " ";

    }
    table += "\n";
  }
  return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));