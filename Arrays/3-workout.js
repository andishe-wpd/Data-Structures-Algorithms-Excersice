const nestedArray = [1, [2, [3, [9, 9, 9, [10, 9, 8]], 4], 5], 6]

// const flattenArray = (nestedInputArray) => {
//   if (nestedInputArray.some((item) => Array.isArray(item))) {
//     let oneLayerFlatten = nestedInputArray.reduce((state, current) => {
//       if (Array.isArray(current)) {
//         return [...state, ...current];
//       } else {
//         return [...state, current];
//       }
//     }, []);
//     return flattenArray(oneLayerFlatten);
//   } else {
//     return nestedInputArray;
//   }
// };

// const flattenArray = nestedInputArray =>
//   nestedInputArray.reduce(
//     (acc, val) => (Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val)),
//     [],
//   )

const flattenArray = nestedArrayInput =>
  nestedArrayInput.reduce(
    (state, current) =>
      Array.isArray(current) ? state.concat(flattenArray(current)) : state.concat(current),
    [],
  )

console.log(flattenArray(nestedArray))
console.log(nestedArray.flat(Infinity));
