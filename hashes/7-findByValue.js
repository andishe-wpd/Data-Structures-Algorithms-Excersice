const test = {
  a: 'this is a',
  b: 'this is b',
  c: 'this is c',
  d: 'findme',
}

// should return d

const findValue = (desiredValue, input) => {
  for (item of Object.entries(input)) {
    if (item[1] === desiredValue) {
      return item[0]
    }
  }
}

console.log(findValue('findme', test))
