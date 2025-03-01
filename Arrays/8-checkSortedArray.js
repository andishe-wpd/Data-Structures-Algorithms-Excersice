const input = [1, 3, 4, 5]

const isSorted = arrayInput =>
  arrayInput.every(item => item > (arrayInput[arrayInput.indexOf(item) - 1] || item - 1))

console.log(isSorted(input))


// check the edge cases but structure is ok