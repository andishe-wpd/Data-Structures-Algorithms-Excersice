const test = 'abcdeabcdxyz'
// this should return e or indexof e
// use object to solve this

const noneRepeatingItemFinder = input => {
  const inputData = {}
  for (char of input.split('')) {
    inputData[char] = (inputData[char] || 0) + 1
  }
  for (item of Object.keys(inputData)) {
    if (inputData[item] === 1) {
      return item
    }
  }
}

console.log(noneRepeatingItemFinder(test))
