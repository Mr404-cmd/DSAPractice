//Developer: Shubham Upadhyay
//Purpose: Finding given String is Palindrome or not
//Time Complexiety: O(N)
//Space Complexiety: O(N)
let text = "pyyyyyyyyyyyyyyyyyyyp";
let reverseString = text.split("").reverse().join("");
if(text === reverseString){
    console.log("palindrome");
}else{
    console.log("Not palindrome");
}

