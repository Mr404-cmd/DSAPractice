// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
const permutations = (ele) => {
  if (ele.length === 0) return [[]];
  const firstVal = ele[0];
  const rest = ele.slice(1);

  const allPermutationsWithoutFirst = permutations(rest);
  let allPermutation =[] //new Array();
  allPermutationsWithoutFirst.forEach((val) => {
    for (let i = 0; i <= val.length; i++) {
      const permWithFirst = [...val.slice(0, i), firstVal, ...val.slice(i)];
      allPermutation.push(permWithFirst);
    }
  });
  return allPermutation;
};
permutations([1, 2, 3]);
