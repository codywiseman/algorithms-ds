// Algorithm - a PROCESS or a SET OF STEPS to accomplish a certain task

//* PROBLEM SOLVING //

  //* 1.Understand the problem
    // Can I restate the problem in my own words?
    // What are the inputs that go into the problem
    // What are the outputs that should come from the solution
    // Can the outputs be determined from the inputs? In other words,
      // do I have enough info to solve the problem?
    // How should I label the important pieces of data that are part of the problem

  //* 2.Exploring concrete examples
    // Coming up with examples can help you understand the problem better
    // Start with simple examples
    // Progress to more complex examples
    // Explore examples with empty inputs
    // Explore examples with invalid inputs

  //* 3.Break it down
    // Explicitly write out the steps you need to take

  //* 4.Solve/Simplify

  //* 5.Look back and Refactor

//! How do you Imporve??
  //* Devise a plan
  //* Master common problem solving techniques

  //! COMMON PATTERNS //

  //* Frequncy Counters
    // This pattern uses objects or sets to collect values/frequencies of values

    //ex:
      //Write a function called same, which accepts two arrays. The function should
      //return true if every value in the array has its corresponding value squared
      //in the second array. The frequency values must be the same.
          // same([1, 2, 3], [4, 1, 9]) returns true

      //! LESS PRACTICAL APPROACH //  O(n^2)
      function same(array1, array2) {
        if(array1.length != array2.length) {
          return false;
        }
        for(let i = 0; i < array1.length; i++) {
          let correctIndex = array2.indexOf(arr[i] ** 2);
          if (correctIndex === -1) {
            return false;
          }
          array2.splice(correctIndex, 1)
        }
        return true
      }

      //! MORE EFFICIENT APPROACH // O(n)
      function sameTwo(array1, array2) {
        if(array1.length !== array2.length) {
          return false;
        }
        const frequencyCounter1 = {};
        const frequencyCounter2 = {};
        for(let val of array1) {
          frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
        }
        for(let val of array2) {
          frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
        }
        for(let key in frequencyCounter1) {
          if(!(key ** 2 in frequencyCounter2)) {
            return false;
          }
          if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
          }
        }
        return true
      }

    //ex2:
      // Given two strings, write a function to determine if the second strong is
      //an anagram of the first.

      function isAnagram(string1, string2) {
        if(string1.length !== string2.length) {
          return false;
        }
        const counter1 = {};
        const counter2 ={};
        for(let val of string1) {
          counter1[val] = (counter1[val] || 0) + 1;
        }
        for(let val of string2) {
          counter2[val] = (counter2[val] || 0) + 1;
        }
        for(let key in counter1) {
          if (counter2[key] === undefined) {
            return false;
          }
          if(counter1[key] !== counter2[key]) {
            return false;
          }
        }
        return true;
      }

  //* Multiple Pointers

    //ex:
      // Implement a function called countUnique values, which accepts a sorted array
      //and counts the unique values in the array.

    function countUniqueValues(array) {
      if(array.length === 0) {
        return 0;
      }
      let i = 0;
      for(let j = 1; j < array.length; j++) {
        if(array[i] !== array[j]) {
          i++;
          array[i] = array[j];
        }
      }
      return i + 1;
    }

    // [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]
    // []

  //* Sliding Window Pattern

    //ex:
      // Write a function called maxSubarraySum which accepts an array of integers
      // and a number called n. The function should calculate the maximum sum of
      // of n consecutive elements in the array

    function maxSubarraySum(arr, num) {
      let maxSum = 0;
      let tempSum = 0;
      if(arr.length < num) return null;
      for(let i = 0; i < num; i++) {
        maxSum += arr[i];
      }
      tempSum= maxSum;
      for(let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
      }
      return maxSum;
    }

  //* Divide and Conquer Pattern

    //ex:
      //Given a SORTED array of itegers, write a function called search, that accepts
      //a value and returns the index where the value passed to the function is located.
      //If the value is not found, return -1.

      //! This solution involves Binary Search!

    function search(array, val) {
      let min = 0;
      let max = array.length - 1;

      while(min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle];

        if(array[middle] < val) {
          min = middle - 1;
        }
        else if(array[middle] > val) {
          max = middle - 1;
        }
        else {
          return middle;
        }
      }
      return -1;
    }
