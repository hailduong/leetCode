// Solution 1
function mergeAlternately1(word1: string, word2: string): string {
  const longestLength = word1.length > word2.length ? word1.length : word2.length

  const newCharList: string[] = []
  for (let i = 0; i < longestLength; i++) {
    newCharList.push((word1[i] || '') + (word2[i] || ''))
  }

  return newCharList.join('')
}

// Solution 2
function mergeAlternately(word1: string, word2: string): string {
  const maxLength = Math.max(word1.length, word2.length);
  let finalString: string = '';

  for (let i = 0; i < maxLength; i++){
    if (i < word1.length) finalString += word1[i];
    if (i < word2.length) finalString += word2[i];
  }

  return finalString
}

const result = mergeAlternately('abcde', 'pqr')
console.log('result:', result)
