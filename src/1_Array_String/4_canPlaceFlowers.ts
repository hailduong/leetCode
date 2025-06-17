function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  // Loop through all elements,
  // every time we find an empty spot flowerbed[i] = 0,
  // then we check the left and right position to make sure they're also empty
  // If `n` <= 0 then we exit the loop
  for (let i = 0; i < flowerbed.length && n > 0; i++) {
    // If we find an empty place
    if (flowerbed[i] === 0) {
      const emptyLeft = (i === 0) || flowerbed[i - 1] === 0
      const emptyRight = (i === flowerbed.length - 1) || flowerbed[i + 1] === 0

      if (emptyLeft && emptyRight) {
        flowerbed[i] = 1; // Plant the flower
        n--
      }
    }
  }

  return n <= 0
}
