/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // 矩形性质 （x' = y, y' = -x + len -1）
    let len = matrix.length;
    for (let i = 0; i < len; i++) {
        for(let j = i; j < len - i - 1; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[-j + len - 1][i];
            matrix[-j + len - 1][i] = matrix[-i + len - 1][-j + len -1];
            matrix[-i + len - 1][-j + len -1] = matrix[j][-i + len - 1];
            matrix[j][-i + len - 1] = temp;
        }        
    }
    return matrix;
};
module.exports = rotate;