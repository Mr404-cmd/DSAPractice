let merge =(left, right)=>{
let sortedArray = new Array();
while(left.length && right.length){
  if(left[0]<right[0]){
    sortedArray.push(left.shift());
  }else{
    sortedArray.push(right.shift());
  }
}
return [...sortedArray, ...left, ...right];
}
let mergeSort = (arr)=>{
  if(arr.length<=1) return arr;
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0,mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}


console.log(mergeSort([5,2,6,4,9,0,1]));