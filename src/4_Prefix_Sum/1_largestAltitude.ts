function largestAltitude(gain: number[]): number {

  // Find the highest number
  let currentHeight = 0
  let highestAltitute = currentHeight

  for (let i = 0; i < gain.length; i++){
    currentHeight = currentHeight + gain[i]
    if (currentHeight > highestAltitute) highestAltitute = currentHeight
  }

  return highestAltitute
};
