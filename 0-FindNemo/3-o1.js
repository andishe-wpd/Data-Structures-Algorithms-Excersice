let boxes = ["box1", "box2", "box3", "box4", "box5"];
const appendBoxes = new Array(100).fill("fillerBox");
boxes = [...appendBoxes, boxes];

const logLastBox = (boxes) => {
  let stepper = 1;
  console.log(boxes[boxes.length - 1] + ` in ${stepper} steps`); // O(1)
  console.log(boxes);
};

logLastBox(boxes); // O(1)


// o(1) means the time it takes to run the function is constant. 
// It doesn't matter how many elements are in the array, the time it takes to run the function will always be the same.
// In this case, it will always take 1 step to run the function.