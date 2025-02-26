let rickAndMortyGuys = ['Rick', 'Morty', 'Summer', 'Jerry', 'Beth']
const rickClones = new Array(100).fill('RICKCLONE')
rickAndMortyGuys = rickClones.concat(rickAndMortyGuys)

const findJerry = arr => {
  let stepCounter = 0
  for (let i = 0; i < arr.length; i++) {
    stepCounter++
    if (arr[i] === 'Jerry') {
      console.log(`Arrow found Jerry in ${i + 1} place of array`)
    }
  }
  console.log(`stepCounter is ${stepCounter}`)
}

findJerry(rickAndMortyGuys)

// now the big o is O(n) cause we have to loop through the array
// and the stepCounter is O(1) cause we have to count the steps
