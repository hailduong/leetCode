// Solution 1
function gcdOfStrings1(str1: string, str2: string): string {
  const minLength = Math.min(str1.length, str2.length)

  const listOfDevisors: string[] = []
  for (let i = 1; i <= minLength; i++){
    const devisor = str1.substring(0, i)
    const numberOfDevisorForString1 = Math.round(str1.length / i)
    const numberOfDevisorForString2 = Math.round(str2.length / i)

    let reconstructedString1 = devisor
    for (let j = 1; j < numberOfDevisorForString1; j++ ){
      reconstructedString1 += devisor
    }

    const isString1Devisor = reconstructedString1 === str1

    let reconstructedString2 = devisor
    for (let j = 1; j < numberOfDevisorForString2; j++ ){
      reconstructedString2 += devisor
    }

    const isString2Devisor = reconstructedString2 === str2

    if (isString1Devisor && isString2Devisor) listOfDevisors.push(devisor)
  }

  let maxDevisor = listOfDevisors[0]
  listOfDevisors.forEach(devisor =>{
    if (devisor.length > maxDevisor.length) maxDevisor = devisor
  })

  return maxDevisor || ''
};

// Solution 2
const gcd = (a: number, b: number): number =>{
  while (b != 0){
    [a, b] = [b, a % b]
  }
  return a
}

function gcdOfStrings(str1: string, str2: string): string {
  if (str1 + str2 !== str2 + str1 ) return ''
  const gcdLength = gcd(str1.length, str2.length)

  return str1.slice(0, gcdLength)
};


console.log(gcdOfStrings("ABCABC", "ABC"))
