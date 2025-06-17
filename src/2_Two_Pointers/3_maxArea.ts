function maxArea(height: number[]): number {

  let maxArea = 0
  let startPointIndex = 0
  let endPointIndex = height.length - 1

  // Largest area when the height is highest and the width is widest
  while (startPointIndex < endPointIndex) {

    // Calculate area
    const shorterHeight = height[startPointIndex] < height[endPointIndex] ? height[startPointIndex] : height[endPointIndex]
    const newMaxArea = shorterHeight * (endPointIndex - startPointIndex)
    if (newMaxArea > maxArea) maxArea = newMaxArea

    // Increase the index
    height[startPointIndex] < height[endPointIndex] ? startPointIndex++ : endPointIndex--
  }

  return maxArea
};
