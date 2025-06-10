function reverseVowels(s: string): string {
  // 1. Find the list of vowel, store them in an array.
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const vowelInStringList = Array.from(s).filter((c: string) => {
    if (vowels.includes(c.toLowerCase())) return c
  })
  if (vowelInStringList.length === 0) return s

  // 2. Reverse the list.
  const reversedList = vowelInStringList.reverse()

  // 3. Loop again, replace each vowel with the one in the reversed list.
  let vowelIndex = 0
  const newStringArray = Array.from(s).map(c => {
    if (vowels.includes(c.toLowerCase())) {
      const newChar = reversedList[vowelIndex]
      vowelIndex ++
      return newChar
    } else {
      return c
    }
  })

  // 4. Return the result
  return newStringArray.join('')
};

function reverseVowels2(s: string): string {
  // 1. Declare the 2 pointers and array
  const stringArr = Array.from(s)
  const vowels = ['a', 'i', 'u', 'e', 'o'];
  let leftIndex: number = 0;
  let rightIndex: number = s.length - 1;

  // 2. Traverse the string, replace the vowels
  while (leftIndex < rightIndex) {
    while ((leftIndex < rightIndex) && (!vowels.includes(stringArr[leftIndex].toLowerCase()))) leftIndex++;
    while ((leftIndex < rightIndex) && (!vowels.includes(stringArr[rightIndex].toLowerCase()))) rightIndex--;

    // Replace
    if (leftIndex < rightIndex) {
      [stringArr[leftIndex], stringArr[rightIndex]] = [stringArr[rightIndex], stringArr[leftIndex]]
      leftIndex++
      rightIndex--
    }

  }

  // 3. Return the string
  return stringArr.join('')
};
