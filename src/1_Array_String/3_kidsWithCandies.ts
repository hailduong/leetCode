function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const maxCandies:number = Math.max(...candies)
  const result = candies.map(numberOfCandies =>{
    return (numberOfCandies + extraCandies) >= maxCandies
  })
  return result
};
