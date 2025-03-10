const input = [1, 1, 3, 3, 4, 5]
// output [1, 3, 4, 5]

const removeDuplicate = inputArray => {
  const uniqueItems = []

  for (item of inputArray) {
    if (!uniqueItems.includes(item)) {
      uniqueItems.push(item)
    }
  }

  return uniqueItems
}

console.log(removeDuplicate(input))
