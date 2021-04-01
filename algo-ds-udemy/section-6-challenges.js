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

// Write a function called isSubsequence which takes in two strings and checks whether the
// characters in the first string form a subseququnce of the characters in the second string.
// In other words, the function should check whether the characters in the first string appear
// somewhere in the second string, without their order changing.

function isSubsequence(str1, str2) {
  debugger;
  let str1Point = 0;
  let str2Point = 0;
  while (str2Point < str2.length - 1 && str1Point < str1.length - 1) {
    if(str1[str1Point] !== str2[str2Point]) {
      str2Point++;
    }
    else {
      str2Point++;
      str1Point++;
    }
  }
  if(str1Point !== str1.length - 1) {
    return false;
  }
  else {
    return true;
  }
}

// Given an array of integers and a number, write a function called maxSubarrat, which finds the
// max sum of a subarray with the length of the number passed to the function.

function maxSubarray(array, num) {
  debugger;
  if(num > array.length) return null;
  let temp = 0;
  let max = 0;
  for (let i = 0; i < num; i++) {
    max += array[i];
  }
  temp = max;
  for (let j = num; j < array.length; j++) {
    temp = temp - array[j - num] + array[j];
    if(temp > max) {
      max = temp;
    }
  }
  return max;
}

// Write a function called minSubarrayLen which accepts two parameters - an array of positive
// integers and a positive integer. The function should return the minimal lenght of a contiguous
// subarray of which is greater than or equal to the integer passed to the function. If there isn't
// one, return 0 instead.

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
  while(start < nums.length) {
    if(total < sum && end < nums.length) {
      total += nums[end];
      end++
    }
    else if(total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}
