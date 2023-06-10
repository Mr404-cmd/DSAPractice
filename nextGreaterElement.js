// For any array, rightmost element always has next greater element as -1.
// For an array which is sorted in decreasing order, all elements have next greater element as -1.
// For the input array [4, 5, 2, 25}, the next greater elements for each element are as follows.
// Element       NGE
//   4      -->   5
//   5      -->   25
//   2      -->   25
//   25     -->   -1


// BRUTEFORCE ALGORITHM
// Time Complixcity: O(n^2)
// Space Complexicity: O(N)

const nextGreaterElement = (array)=>{
    let resultArray = [];
    let next = 0 ;
    for(let val=0;val<array.length;val++){
        next = -1;
        for(let j = val+1;j<array.length;j++){
            if(array[val] < array[j]){
                next = array[j];
                // resultArray.push(array[j]);
                break;
            }
        }
        resultArray.push(next);
    }
    return resultArray
}
console.log(nextGreaterElement([13,7,6,12]));
