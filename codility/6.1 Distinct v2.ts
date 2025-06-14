function solution(A: number[]): number {
  if (A.length === 0) return 0;  // Handle empty array

  const B = A.sort((a, b) => a - b);
  let diff = 1; // At least one unique element if array not empty

  B.reduce((prev, cur) => {
    if (prev !== cur) diff++;
    return cur;
  }, B[0]);

  return diff;
}
