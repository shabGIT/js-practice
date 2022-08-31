// const array = [1, 2, 2, 4, 5, 6, 7, 2, 4, 7]
// const result = array.sort((acc, cur) => acc < cur ? 1 : -1)
// const biggest = result.slice(2, 3)

// console.log(6);
// const array=[1,4,8,7,9,2,3,3,7,8,9,1,0]
const array=[1,1,1,1,1]
const result = array.filter((item, index) => array.indexOf(item) === index)
const result1 = result.sort((acc, cur) => acc < cur ? 1 : -1).slice(1,2)
console.log(result1)