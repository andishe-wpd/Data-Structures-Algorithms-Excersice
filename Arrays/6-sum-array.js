// return a number for sum of the array elements

const inputSample1 = [1, 2, 3, 4, 5, 6]
const inputSample2 = [10, 20, 30, 40, 50, 60]
const inputSample3 = [10, 'salam', 30, 40, 50, 60]
const arraySum = arrayInput =>
  arrayInput.every(item => typeof item === 'number')
    ? arrayInput.reduce((state, current) => state + current, 0)
    : 'Error all item must be number'

console.log(arraySum(inputSample1))
// console.log(arraySum(inputSample2))
console.log(arraySum(inputSample3))
