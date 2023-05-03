//Leet code Problem Container with most water;
//Time Complexicity : O(N^2)
//Space Complexicity : O(1);
var maxArea = function(height) {
    let result = 0;
    let finalAnswer =0;
    for(let i=0;i<height.length;i++){
        for(let j=i+1;j<height.length;j++){
            if(height[i]<height[j]){
                result = height[i]*(j-i);
            }else{
                result = height[j]*(j-i)
            }
            if(result>finalAnswer){
                finalAnswer = result;
            }
        }
    }
    return finalAnswer;
};

//Time complexicity : O(N)
//Space Complexicity : O(1)
var maxArea = function(height) {
    let start = 0;
    let end = height.length-1;
    let result =0 ;
    let finalAnswer = 0;
    while(start< end){
        if(height[start]<height[end]){
            result = height[start] * (end-start);
            start++
        }
        else{
            result = height[end] * (end-start);
            end--;
        }
        if(result>finalAnswer){
            finalAnswer = result;
        }
    }
    return finalAnswer;
};