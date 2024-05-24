let rangeSum = function (number) {
  let sum = 0;
  let i = number;

  if (number < 0) {
    while (i < 0) {
      sum = sum + 1;
      i = i + 1;
    }
  } else {
    while (i > 0) {
      sum = sum + 1;
      i = i - 1;
    }
  }
  return sum;
};

console.log(rangeSum(1));
