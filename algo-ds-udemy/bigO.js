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


function countUpAndDown(n) {
  console.log('Going up!');
  for(let i = 0; i <= n; i++) {
    console.log(i);
  }
  console.log('At the top! \n Going back down...')
  for(let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log('Back to the bottom!')
}
