function isSubsequence(s: string, t: string): boolean {
  let sIndex = 0;

  for (let i = 0; i < t.length; i++) {
    if (sIndex < s.length) {
      if (t[i] === s[sIndex]) {
        sIndex++
      }
    } else {
      break
    }
  }

  return sIndex === s.length
};
