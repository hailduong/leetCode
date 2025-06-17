// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//
// Note that you must do this in-place without making a copy of the array.
//
//
//
// Example 1:
//
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:
//
// Input: nums = [0]
// Output: [0]
//
//
// Constraints:
//
// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1


function moveZeroes(nums: number[]): number[] {
  // First pass: move all non-zero to front
  let pos: number = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0){
      nums[pos] = nums[i];
      pos++
    }
  }

  // Second pass: fill the rest with zeros
  for (let i = pos; i < nums.length; i++){
    nums[i] = 0;
  }

  return nums
};
