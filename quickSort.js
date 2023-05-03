console.log(Error.stackTraceLimit,"---")
function computeMaxCallStackSize() {
    try {
        return 1 + computeMaxCallStackSize();
    } catch (e) {
        // Call stack overflow
        return 1;
    }
}
console.log(computeMaxCallStackSize())
let arr = [2, 5, 1, 8, 4, 9, 3, 7];
// let swap = (arr) => {};
// let partition = (arr, low, high) => {
//   let pivot = arr[high];
//   let i = low - 1;
//   for (let j = low; j < high; j++) {
//     if (arr[j] < pivot) {
//       i++;
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//       // [arr[i],arr[j]] = [arr[j],arr[i]];
//     }
//   }
//   i++;
//   // [arr[i],arr[high]] = [arr[high],arr[i]];
//   let temp = arr[i];
//   arr[i] = arr[high];
//   arr[high] = temp;
//   return i;
// };
// let quickSort = (arr, low, high) => {
//   if (low < high) {
//     let pivotIndex = partition(arr, low, high);
//     quickSort(arr, low, pivotIndex - 1);
//     quickSort(arr, pivotIndex - 1, high);
//   }
// };
function partition(arr, start, end){
    // Taking the last element as the pivot
    const pivotValue = arr[end];
    let pivotIndex = start; 
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
        // Swapping elements
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        // Moving to next element
        pivotIndex++;
        }
    }
    
    // Putting the pivot value in the middle
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
    return pivotIndex;
};
function quickSortRecursive(arr, start, end) {
    // Base case or terminating case
    if (start >= end) {
        return;
    }
    
    // Returns pivotIndex
    let index = partition(arr, start, end);
    
    // Recursively apply the same logic to the left and right subarrays
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
}
console.log(quickSortRecursive(arr, 0, arr.length - 1));

// "eat"=["eat","ate","tea","eta","aet","tae"]
// // first calcualte permuation Array
