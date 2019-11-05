# 0053最大子序和

> 题目来源： https://leetcode-cn.com/problems/maximum-subarray/ 

## 题目描述
```
给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例:

输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
```

## 代码实现

```js
/** 动态规划
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxVal = nums[0];
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        if (sum > 0) {
            sum += nums[i];
        } else {
            sum = nums[i];
        }
        maxVal = Math.max(maxVal, sum);
    }
    return maxVal;
};
```