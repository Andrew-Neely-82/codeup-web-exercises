(() => {
  `use strict`;
  // Maximum Subsequence Sum
  /* TODO: Write a function that, given an array of both positive and negative integers, 
  will find the maximum sum of contiguous numbers within that array. */

  function maximumSubsequenceSum(array) {
    let currentSum = 0;
    let maximumSum = 0;
    for (let i = 0; i < array.length; i++) {
      currentSum += array[i];
      if (currentSum > maximumSum) {
        maximumSum = currentSum;
      }
      if (currentSum < 0) {
        currentSum = 0;
      }
    }
    return maximumSum;
  }

  maximumSubsequenceSum([-2, -3, 4, -1, -2, 1, 5, -3]);
})();
