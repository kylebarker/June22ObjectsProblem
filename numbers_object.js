var numbers = {
  10: 10,
  num: 13,
  anotherKey: 34,
  undefined: 12,
  blue: 98
}

// 1) find the sum of all the values
var sum = 0;
for(var key in numbers){
  sum += numbers[key]
}
console.log(sum);

// 2) push all the values into a new array
var numbersValuesArr = [];
for(var key in numbers){
  numbersValuesArr.push(numbers[key])
}
console.log(numbersValuesArr)

// 3) subtract the odd numbers from the even numbers
var evenNumbersArr = [];
var oddNumbersArr = [];
var evenNumbersTotal = 0;
var oddNumbersTotal = 0;

for(var key in numbers){
  if(numbers[key] % 2 === 0){
    evenNumbersArr.push(numbers[key])
  } else {
    oddNumbersArr.push(numbers[key])
  }
}

function longerArray(arrOne, arrTwo){
  if(arrOne.length >= arrTwo.length){
    return arrOne.length
  } else {
    return arrTwo.length
  }
}

for(var i = 0; i < longerArray(evenNumbersArr,oddNumbersArr); i++){
  if(evenNumbersArr[i]){
    evenNumbersTotal += evenNumbersArr[i];
  }
  if(oddNumbersArr[i]){
    oddNumbersTotal += oddNumbersArr[i];
  }
}

var subtractOddNumbers = evenNumbersTotal - oddNumbersTotal;
console.log(subtractOddNumbers);


// 4) Multiply all the values by 2
for(var i = 0; i < numbersValuesArr.length; i++){
  numbersValuesArr[i] = numbersValuesArr[i] * 2
}

console.log(numbersValuesArr);
