function pivotIndex(nums: number[]): number {

  let pivot = -1
  let sumLeft = 0
  const total = nums.reduce((prev, cur) => prev + cur, 0);
  console.log('total: ', total)

  for (let i = 0; i < nums.length; i++ ){
    sumLeft = i === 0 ? 0 : sumLeft + nums[i-1]
    const sumRight = total - sumLeft - nums[i]
    console.log('sum left right: ', sumLeft, sumRight)
    if (sumLeft === sumRight){
      pivot = i
      break
    }
  }


  return pivot
};
