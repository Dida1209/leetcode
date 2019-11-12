# 0045 跳跃游戏 II

> 题目来源：https://leetcode-cn.com/problems/trapping-rain-water/

## 题目描述
```
给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢 Marcos 贡献此图。

示例:

输入: [0,1,0,2,1,0,1,3,2,1,2,1]
输出: 6
```
## 代码实现
```js
/**
 * 如果左边比右边高,说明右边可以储水,那么只要比右边当下最高的矮,就形成凹水槽。同理可得左边。
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0, right = height.length - 1, sum = 0, max_height = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            height[left] >= max_height ? (max_height = height[left]) : sum += max_height - height[left];
            left++;
        } else {
            height[right] >= max_height ? (max_height = height[right]) : sum += max_height - height[right];
            right--;
        }
    }
    return sum;
}
```