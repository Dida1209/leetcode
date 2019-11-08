# 0045 跳跃游戏 II

> 题目来源：https://leetcode-cn.com/problems/first-missing-positive

## 题目描述
```
给定一个未排序的整数数组，找出其中没有出现的最小的正整数。

示例 1:

输入: [1,2,0]
输出: 3
示例 2:

输入: [3,4,-1,1]
输出: 2
示例 3:

输入: [7,8,9,11,12]
输出: 1
说明:

你的算法的时间复杂度应为O(n)，并且只能使用常数级别的空间。
```
## 代码实现
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let arr = new Array(nums.length).fill(false);
    let i = 0;
    for(;i < nums.length; i++) {
        let value = nums[i];
        if(value > 0 && value <= nums.length) {
            if(value !== i+1 && !arr[value - 1]){
                let temp = nums[value - 1];
                nums[value - 1] = value;
                nums[i] = temp;
                arr[value - 1] = true;
                i--;
            }else if(arr[value - 1] && value - 1 !== i){
                arr[i] = false;
            }else {
                arr[i] = true
            }
        } else {
            arr[i] = false;
        }        
    }
    i = 0;
    while (i < arr.length) {
        if(!arr[i]) {
            break;
        } else {
            i++ ;
        }
    }
    return i + 1;
};
```