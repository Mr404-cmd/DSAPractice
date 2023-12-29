//Developer : Shubham Upadhyay
//Purpose: Valid Paranthesis Problem Resolution
//Time Complexiety: O(N)
//space Complexiety: O(N)

//Algorithm: Create an empty stack and a map to store the mappings of opening and closing parentheses.
// Iterate through each character in the input string.
// If the current character is an opening parenthesis, push it onto the stack.
// If the current character is a closing parenthesis, check if it matches the top of the stack.
// If the stack is empty or the parentheses don't match, return false.
// After iterating through the string, check if the stack is empty.
// If it's empty, all parentheses are matched, and the string is valid.
// If it's not empty, there are unmatched opening parentheses, and the string is invalid.
const validParanthesis = (str) => {
  const stack = [];
  const paranthesisMap = {
    "(": ")",
    "{": "}",
    "[": "]",
    "<": ">",
  };
  for(let par of str){
    if(paranthesisMap[par]){
        stack.push(par);
    }else{
        const top = stack.pop();
        if(!top || paranthesisMap[top] != par) return false;
    }
  }
  return stack.length === 0;
};

console.log(validParanthesis("{{[([{}])]}}"));
