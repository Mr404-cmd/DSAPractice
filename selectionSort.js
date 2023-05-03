let arr = [3,"5'", 5, 4, 6, 1, 7];
let selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  }
  return arr;
};
console.log(selectionSort(arr));
