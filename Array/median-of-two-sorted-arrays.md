# 0004 寻找两个有序数组的中位数

> 题目来源：https://leetcode-cn.com/problems/median-of-two-sorted-arrays/

## 题目描述
```
给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。

示例 1:

nums1 = [1, 3]
nums2 = [2]

则中位数是 2.0
示例 2:

nums1 = [1, 2]
nums2 = [3, 4]

则中位数是 (2 + 3)/2 = 2.5
```
## 代码实现

```
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let left, right;
    let arr = [];
    while(nums1.length || nums2.length){  
        if(nums1.length && nums2.length){
            if(nums1[0] < nums2[0]){
                arr.push(nums1.shift())
            }else {
                arr.push(nums2.shift())
            }
        }else if (nums1.length) {
            arr = arr.concat(nums1)
            nums1 = []
        }else if (nums2.length) {
            arr = arr.concat(nums2)
            nums2 = []
        }
    }
    if(arr.length % 2 == 0) {
        left = arr.length / 2 - 1;
        right = arr.length / 2;
    }else {
        left = Math.floor(arr.length / 2);
        right = left;    
    }    
    return (arr[left] + arr[right]) / 2;
};
```