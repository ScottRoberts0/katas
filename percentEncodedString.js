//Edge case - doesn't account for having multiple spaces at the beginning or end.
const urlEncode = function (text) {
  var string = "";

  for (var i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      if (i != 0 && i != text.length - 1) {
        string += "%20";
      }
    } else {
      string += text[i];
    }
  }
  return string;
};
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));