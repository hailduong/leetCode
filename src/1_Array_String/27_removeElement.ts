function removeElement(nums: number[], val: number): number {
  // Move all val in nums to the end of the array

  // Return the nums2.length (after removed), which is k

  // first k of nums should be the one that are not removed.
  let nonKPointer = nums.length - 1
  let i = 0;

  while (i <= nonKPointer){
    while (i <= nonKPointer && nums[nonKPointer] === val) nonKPointer--
    if (nums[i] === val) {
      nums[i] = nums[nonKPointer]
      nums[nonKPointer] = val
      nonKPointer --
    } else {
      i++
    }
  }

  return i
};
