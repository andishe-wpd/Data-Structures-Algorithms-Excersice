const obj = {
  a: {
    b: {
      c: 1,
    },
    d: 2,
  },
  e: 3,
}

// Expected output:
// {
//   "a.b.c": 1,
//   "a.d": 2,
//   "e": 3
// }
console.log(Object.entries(obj)[0])
