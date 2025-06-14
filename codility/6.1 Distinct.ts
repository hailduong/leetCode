// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A: number[]): number {
  // Convert this to a set and return the size
  const mySet = new Set<number>()
  A.forEach(item => {
    mySet.add(item)
  })

  return mySet.size
}
