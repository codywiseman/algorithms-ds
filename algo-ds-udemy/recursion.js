const countdown = num => {
  if (num <= 0) {
    console.log('All done!');
    return;
  }
  console.log(num);
  num--;
  countdown(num)
}

const sumRange = num => {
  if(num === 1) return 1;
  return num + sumRange(num - 1);
}

const factorial = num => {
  if(num === 1) return 1
  return num * factorial(num - 1)
}
