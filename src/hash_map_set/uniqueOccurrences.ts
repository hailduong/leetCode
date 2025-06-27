function uniqueOccurrences(arr: number[]): boolean {
  // Store in a Hash Map number - occurances
  const myMap = new Map<number, number>()

  for (const num of arr) {
    if (!myMap.has(num)) {
      myMap.set(num, 1)
    } else {
      let currentCount = myMap.get(num)
      if (currentCount) myMap.set(num, currentCount + 1)
    }
  }

  // Convert the orrurances to a Set,
  const mySet = new Set<number>()
  for (const [number, count] of myMap) {
    mySet.add(count)
  }

  // if the size of the set === size of Map, they're uniuqe > true, false
  return mySet.size === myMap.size

}
