# 0064 最小路径和

> 题目来源：https://leetcode-cn.com/problems/minimum-path-sum/

## 题目描述
```markdown
给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步。

示例:

输入:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 7
解释: 因为路径 1→3→1→1→1 的总和最小。
```
## 代码实现
```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let i, j;
    for (i = 0;i < grid.length; i++) {
        for (j = 0;j < grid[i].length; j++) {
            if (i - 1 >= 0 && j - 1 >= 0) {
                grid[i][j] = Math.min(grid[i - 1][j] + grid[i][j], grid[i][j - 1] + grid[i][j]);
            } else if (i - 1 >= 0) {
                grid[i][j] = grid[i - 1][j] + grid[i][j];
            } else if (j - 1 >= 0) {
                grid[i][j] = grid[i][j - 1] + grid[i][j];
            }
        }
    }
    return grid[i-1][j-1];
};
```