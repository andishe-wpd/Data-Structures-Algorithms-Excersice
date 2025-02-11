let rickAndMortyGuys = ["Rick", "Morty", "Summer", "Jerry", "Beth"];
const rickClones = new Array(10000).fill("RICKCLONE");
rickAndMortyGuys = rickClones.concat(rickAndMortyGuys);

const findJerryWithArrowFunction = (arr) => {
  const timMesureStart = performance.now();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Jerry") {
      console.log(`found Jerry in ${i + 1} place of array`);
      break;
    }
  }
  const timeMesureEnd = performance.now();
  console.log(
    `the operation took ${timeMesureEnd - timMesureStart} milliseconds`
  );
};

function findJerryWithRegularFunction(arr) {
  const timMesureStart = performance.now();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Jerry") {
      console.log(`found Jerry in ${i + 1} place of array`);
      break;
    }
  }
  const timeMesureEnd = performance.now();
  console.log(
    `the operation took ${timeMesureEnd - timMesureStart} milliseconds`
  );
}

findJerryWithArrowFunction(rickAndMortyGuys);
findJerryWithRegularFunction(rickAndMortyGuys);
