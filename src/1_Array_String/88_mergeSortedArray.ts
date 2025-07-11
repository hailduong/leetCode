/* Solution 1*/
function merge1(nums1: number[], m: number, nums2: number[], n: number): void {
  // Sorted non decreasing
  // Length of filled nums1 = nums1.length - nums2.length
  const nums2Length = nums2.length;
  const startNum2Index = nums1.length - nums2Length


  // Merge nums1 + nums2
  for (let i = startNum2Index; i < nums1.length; i++){
    nums1[i] = nums2[i - startNum2Index]
  }

  // Final array should be stored inside numbs1
  nums1.sort((a, b) => a - b)
};

/* Solution 2 */
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge2(nums1: number[], m: number, nums2: number[], n: number): void {
  // Sorted non decreasing
  // Length of filled nums1 = nums1.length - nums2.length
  let lastNums1Index = m - 1;
  let lastNums2Index = n - 1;
  let lastMergeArrayIndex = (m+n) - 1;

  // Go backward 2 arrays, which one is larger, add it to the end of the merged array.
  while (lastNums1Index >= 0 && lastNums2Index >= 0){
    const last1Item = nums1[lastNums1Index]
    const last2Item = nums2[lastNums2Index]
    if (last1Item > last2Item){
      nums1[lastMergeArrayIndex] = last1Item
      lastNums1Index--
    } else {
      nums1[lastMergeArrayIndex] = last2Item
      lastNums2Index--
    }
    lastMergeArrayIndex--
  }

  // Copy the left over
  while (lastNums2Index >= 0){
    nums1[lastNums2Index] = nums2[lastNums2Index]
    lastNums2Index--
  }
};
