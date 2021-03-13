// Write a function that calculates the of all numbers from 1 up tp n


/*

function addUpTo(n) {
  let total = 0;  //* 1 assignment
  for (let i = 1; i <= n; i++) {  //* n additions, n assignments, n comparisons
    total += i;   // n additions, n assignments
  }
  return total;    //* The number of operations grown roughly propotionally with n
}

function addUpTo2(n) {
  return n * (n + 1) / 2; //* Tree opertions occur in this function
}

*/

      //! The Problems With Time //
//* This is not a reliable way to measure
//* The same machines will record different times
//* Speed measurements may not be precise enough

const t1 = performance.now();
addUpTo2(1000000000);
const t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)



      //! Big O //
//* Big O is a way to formalize fuzzy counting
//* Allows us to talk formally about how the runtime of an algorith grows as the inputs grow
//* Worst case scenario - upper bound for runtime


//* The number of operations is bounded by a multiple of n
    //! O(n)
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}


// * Always has 3 operations
    //! O(1)
    //* As n grows, there is no change on runtime
function addUpTo2(n) {
  return n * (n + 1) / 2;
}


      //! O(n)
      // not O(2n) - remember we only care about the BIG PICTURE
function countUpAndDown(n) {
  console.log('Going up!');
  for(let i = 0; i <= n; i++) { //* O(n)
    console.log(i);
  }
  console.log('At the top! \n Going back down...')
  for(let j = n - 1; j >= 0; j--) { //* O(n)
    console.log(j);
  }
  console.log('Back to the bottom!')
}


//* O(n) inside O(n) operation
      //! O(n^2)
function printAllPairs(n) {
  for (let i = 0; i < n; i++) { // O(n)
    for (let j = 0; j < n; j++) { // nested loop O(n)
      console.log(i, j);
    }
  }
}


//! BIG O NOTATION RULES OF THUMB //
//* Constants dont matter
    // O(2n) - simplify down to O(n)
    // O(500) - simplify down to O(1)
    // O(13n^2) - simplify down to O(n^2)
        // The 13 wont make a difference in the long run
    // O(1000n + 50) - simplify down to O(n)
    // O(n^2 + 5n + 8) - simplify down to O(n^2)
        // 5n + 8 is meaningless compared to n^2
//* Big O Shorthands
    // 1. Arithmetic operations are constant
    // 2. Variable assignment is constant
    // 3. Accessing Elements in an array (by index) or object (by key) is constant
    // 4. In a loop, the complexity is the lenght of the loop times the complexity of whatever happens inside the loop



    //! O(n)
function logAtLeast5(n) {
  for (let i = 0; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

    //! O(1)
    //* As n grows, its always 5
function logAtMost5(n) {
  for (let i = 0; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}



//* Space Complexity - The amount of space taken up by our algorith
