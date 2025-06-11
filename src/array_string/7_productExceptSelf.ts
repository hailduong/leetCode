function productExceptSelf(nums: number[]): number[] {
  const n = nums.length
  const prefix = new Array(n).fill(1)
  const subfix = new Array(n).fill(1)

  // Calculate the prefix product and store in the prefix array
  nums.forEach((num, i) => {
    if (i > 0) {
      prefix[i] = nums[i - 1] * prefix[i - 1]
    }
  })

  // Calculate the suffix product and store in the suffix array
  // subfix at i should be multification of i + 1
  for (let i = n - 1; i >= 0; i--) {
    if (i < n-1){
      subfix[i] = nums[i + 1] * subfix[i + 1]
    }

  }

  // Loop through the array and sum the prefix and suffix to create the new array
  return nums.map((n, i)=>{
    return prefix[i] * subfix[i]
  })
};
