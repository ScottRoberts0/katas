function sumLargestNumbers(array){
  var num1 = 0;
  var num2 = 0;

  for(var i = 0; i < array.length; i++){
  
    if(num1 === 0){
      num1 = array[i];
    }else if(num2 === 0){
      num2 = array[i];
    }else if(num1 < array[i] && num1 < num2){
      num1 = array[i];
    }else if(num2 < array[i] && num2 < num1){
      num2 = array[i];
    }

  }
  return num1 + num2;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));