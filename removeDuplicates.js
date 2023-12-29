let personName = "shubham upadhyay";
const removeDuplicatesON2 = () => {
  let nonRepeatCount = "";
  for (let val of personName) {
    if (!nonRepeatCount.includes(val)) {
      nonRepeatCount += val;
    }
  }
  return nonRepeatCount;
};
console.log(removeDuplicatesON2(personName));

// This Solution has O(N^2) Time complexicity

const removeDuplicates = (personName) => {
  const uniqueChars = new Set();
  let nonRepeatCount = "";

  for (let val of personName) {
    if (!uniqueChars.has(val)) {
      uniqueChars.add(val);
      nonRepeatCount += val;
    }
  }

  return nonRepeatCount;
};
console.log(removeDuplicates(personName));
// This Soluton has O(N) Time Complexiciety
