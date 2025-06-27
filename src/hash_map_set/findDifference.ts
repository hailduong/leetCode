function findDifference(nums1: number[], nums2: number[]): number[][] {
  const unique1 = new Set<number>(), unique2 = new Set<number>()

  // Hash map
  // Loop through the 1st array, check if the hash map include the value in num2
  // if not, add it to unique2
  // The value may be duplicated, so we need to make sure it's unique

  const list2 = new Set<number>(nums2)
  for (const num of nums1){
    if (!list2.has(num)) unique1.add(num)
  }

  // Do similar for 2nd array
  const list1 = new Set<number>(nums1)
  for (const num of nums2){
    if (!list1.has(num)) unique2.add(num)
  }


  // return 2 array
  return [Array.from(unique1), Array.from(unique2)];

};
