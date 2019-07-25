let calculateChange = function(total, cash) {
  let change = cash - total;

  let person = new Object();

  let money = [
    [2000, "twentyDollar"],
    [1000, "tenDollar"],
    [500, "fiveDollar"],
    [200, "twoDollar"],
    [100, "oneDollar"],
    [25, "quarter"],
    [10, "dime"],
    [5, "nickel"],
    [1, "penny"]
  ];

  for (let i = 0; i < money.length; i++) {
    if (change / money[i][0] > 1) {
      person[money[i][1]] = Math.floor(change / money[i][0]);
      change = change - (Math.floor(change / money[i][0]) * money[i][0]);
    }
  }
  return person;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));