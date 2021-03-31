// Write a function called sameFrequency. Given two positive integers, find out if the
//two numbers have the same frequency of digits.
// Must be O(n)

function sameFrequency(num1, num2) {
  if(num1.length !== num2.length) {
    return false;
  }
  if(num1 === undefined || num2 === undefined) {
    return false;
  }
  const counter = {};
  for(let val of num1.toString()) {
    counter[val] = (counter[val] || 0) + 1;
  }
  let value = true;
  for(let val of num2.toString()) {
    if(counter[val]) {
      counter[val]--;
    }
    else {
      value = false;
    }
  }
  return value;
}

// Implement a function called, areThereDuplicates which accepts a variabe number of
// arguments, and checks whether there are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern OR the multiple pointers patten.


function areThereDuplicates() {
  let duplicates = false;
  const values = {};
  for (let val in arguments) {
    values[arguments[val]] = (values[arguments[val]] || 0) + 1;
  }
  for (let freq in values) {
    if(values[freq] > 1) {
      duplicates = true;
    }
  }
  return duplicates;
}

function areThereDuplicates2() {
  return new Set(arguments).size !== arguments.length;
}


// Write a function called averagePair. Given a sorted array of integers and a target value,
// determine if there is a pair of values in the array where the average of the pair equals
// the target average. There may be more than one pair that mathers the average target.

function averagePair(array, target) {
  let pointOne = 0;
  let pointTwo = array.length - 1;
  while(pointOne < pointTwo) {
    let avg = (array[pointOne] + array[pointTwo]) / 2
    if(avg === target) return true;
    else if(avg < target) pointOne++;
    else pointTwo--;
  }
  return false;
}
