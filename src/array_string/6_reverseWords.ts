function reverseWords(s: string): string {
  const arr = s.split(" ")
    .filter(s => !!s)
    .map(s => s.trim())
  return arr.reverse().join(" ").trim()
};
