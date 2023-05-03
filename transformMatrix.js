// Input :
//     [1,2,3]
//     [4,5,6]
//     [7,8,1]
// Output: 
//      [7,4,1]
//      [8,5,2]
//      [1,6,3]
var rotate = function (matrix) {
  let rows = matrix.length;
  let columns = matrix[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = i; j < columns; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  for (let val of matrix) {
    val.reverse();
  }
};
