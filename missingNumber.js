// Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N.
// Find the missing element.
// Input:
// N = 5
// A[] = {1,2,3,5}
// Output: 4

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

const missingNumber = (nums)=>{
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;
  
    for (let i = 0; i < nums.length; i++) {
      actualSum = actualSum + nums[i]
    }
    
    return expectedSum-actualSum
}
console.log(missingNumber([]));