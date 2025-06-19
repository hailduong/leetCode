function findMaxAverage(nums: number[], k: number): number {
  let maxSum = 0;
  let sumOfKNumber = 0;

  // Sum first k elements
  for (let i = 0; i < k; i++) {
    sumOfKNumber += nums[i];
  }
  maxSum = sumOfKNumber;

  // Slide the window from index 1 to nums.length - k (inclusive)
  for (let i = 1; i <= nums.length - k; i++) {
    sumOfKNumber = sumOfKNumber - nums[i - 1] + nums[i + k - 1];
    if (sumOfKNumber > maxSum) maxSum = sumOfKNumber;
  }

  return maxSum / k;
}
