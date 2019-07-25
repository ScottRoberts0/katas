const repeatNumbers = function (data) {
  var newString = "";

  for (var i = 0; i < data.length; i++) {
    if (i >= 1) {
      newString += ", "
    }
    for (var j = 0; j < data[i][1]; j++) {
      newString += data[i][0];
    }
  }
  return newString;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));