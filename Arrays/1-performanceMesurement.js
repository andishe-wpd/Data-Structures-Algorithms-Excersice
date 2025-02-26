let rickAndMortyGuys = ["Rick", "Morty", "Summer", "Jerry", "Beth"];
const rickClones = new Array(10000).fill("RICKCLONE");
rickAndMortyGuys = rickClones.concat(rickAndMortyGuys);

function findJerryWithRegularFunction(arr) {
  const timMesureStart = performance.now();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Jerry") {
      console.log(`Regular found Jerry in ${i + 1} place of array`);
      break;
    }
  }
  const timeMesureEnd = performance.now();
  console.log(
    `the operation took ${timeMesureEnd - timMesureStart} milliseconds`
  );
}
const findJerryWithArrowFunction = (arr) => {
  const timMesureStart = performance.now();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Jerry") {
      console.log(`Arrow found Jerry in ${i + 1} place of array`);
      break;
    }
  }
  const timeMesureEnd = performance.now();
  console.log(
    `the operation took ${timeMesureEnd - timMesureStart} milliseconds`
  );
};

findJerryWithRegularFunction(rickAndMortyGuys);
findJerryWithArrowFunction(rickAndMortyGuys);
