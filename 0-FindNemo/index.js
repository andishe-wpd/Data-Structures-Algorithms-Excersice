const seaGuys = ["Dory", "Marlin", "Gill", "Nemo", "Bruce"];

const findNemo = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Nemo") {
      console.log(`found Nemo in ${i + 1} place of array`);
      break;
    }
  }
};



findNemo(seaGuys)
