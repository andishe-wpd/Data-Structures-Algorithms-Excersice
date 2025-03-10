let firstObject = { a: 1, b: 2, c: 3 }
let secObject = { c: 4, d: 5, c: 7 }

// using with object destructuring
// const objectMerger = (firstObjectInupt, secObjectInput) => {
//   return { ...firstObjectInupt, ...secObjectInput }
// }

// using 2 arrays
// const objectMerger = (firstInput, secInput) => {
//   let transformedToArray = []

//   transformedToArray.push(...Object.entries(firstInput))
//   transformedToArray.push(...Object.entries(secInput))

//   return Object.fromEntries(transformedToArray)
// }

// the most low level version

// const manualConvertor = () => {
//   Object.assign('a', '100')
// }

// const assignConvertor = (firstInput, secInput) => Object.assign(firstInput, secInput)

const roughMerger = (firstinput, secInupt) => {
  let transformedObject = {}
  for (item of Object.entries(firstinput)) {
    transformedObject[item[0]] = item[1]
  }
  for (item of Object.entries(secInupt)) {
    transformedObject[item[0]] = item[1]
  }

  return transformedObject
}

// console.log(Object.fromEntries(Object.entries(firstObject)))

console.log(roughMerger(firstObject, secObject))
