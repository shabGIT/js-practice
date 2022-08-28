const arr = ["a", "a", "b", "b", "c", "c", "d"]
const charCount = []
arr.forEach((item) => charCount[item] = charCount[item] ? charCount[item] + 1 : 1)
console.log(charCount)
// Result [ a: 2, b: 2, c: 2, d: 1 ]