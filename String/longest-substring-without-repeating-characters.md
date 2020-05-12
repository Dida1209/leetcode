# 0003 无重复字符的最长子串
> 题目来源：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters

## 题目描述
```markdown
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

## 代码描述
```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let res = 0, start = 0, end = 0;
    let hash = {};
    let arr = s.split('');
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i];
        if(hash[key]>=0){
            start = hash[key] + 1 > start ? hash[key] + 1 : start;
        }
        hash[key] = i;
        end = i;
        res = Math.max(end - start + 1, res);
    }
    return res;
};
```