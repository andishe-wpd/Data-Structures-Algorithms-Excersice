// let's reverse a string

const rawInput = 'reverese this andishe'

// console.log(rawInput.split('').reverse().join(''))

// const preMadeConvertor = stringInput => {
//   const convertedToArray = stringInput.split('')
//   const reversedArray = convertedToArray.reverse()
//   const reversedArrayToString = reversedArray.join('')
//   return reversedArrayToString
// }

// console.log(preMadeConvertor(rawInput))

// const reverserWithLoop = stringInput => {
//   const convertedToArray = stringInput.split('')
//   const reversedArray = []
//   for (item of convertedToArray) reversedArray.unshift(item)
//   //   for (item of convertedToArray) console.log(item)

//   const reversedArrayToString = reversedArray.join('')
//     return reversedArrayToString
// }

// const reverserWithLoop = stringInput => {
//   let reveresdArray = []
//   for (item of stringInput.split('')) reveresdArray.unshift(item)
//   return reveresdArray.join('')
// }

const reverserWithLoop = stringInput => {
  let reveresdArray = []
  return stringInput.split('')[10]
  //   for (let i = stringInput.split('').length; i === 0; i--) reveresdArray.push(stringInput[i])
  //   return reveresdArray.join('')
}

console.log(reverserWithLoop(rawInput))
