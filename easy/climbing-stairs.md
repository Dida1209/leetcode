# 0070 爬楼梯

> 题目来源：https://leetcode-cn.com/problems/climbing-stairs/

## 题目描述
```markdown
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例 1：

输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
示例 2：

输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
```
## 代码实现
```js
/** 动态规划
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    if (n == 2) return 2;
    let dp = [0,1,2];
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
};
```
