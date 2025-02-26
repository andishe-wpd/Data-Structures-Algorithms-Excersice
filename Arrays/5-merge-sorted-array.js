const firstArray = [1, 10, 20]
const secArray = [2, 11, 21]

const mergeSortedArray = (firstInput, secInput) => firstInput.concat(secInput).sort((a, b) => a - b)

console.log(mergeSortedArray(firstArray, secArray))
