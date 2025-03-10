const test = 'abcdabcdabcddddbb'
// should return d

const mostFrequentFinder = input => {
  const inputInfo = {}
  for (char of input.split('')) {
    inputInfo[char] = (inputInfo[char] || 0) + 1
  }

  let maxItem = Object.entries(inputInfo).reduce((state, item) => {
    if (item[1] > state[1]) {
      return item
    } else {
      return state
    }
  })
  return maxItem[0]
}

console.log(mostFrequentFinder(test))
