# 0006 Z字形变换

> 题目来源：https://leetcode-cn.com/problems/zigzag-conversion/

## 题目描述
```
将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：

L   C   I   R
E T O E S I I G
E   D   H   N
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。

请你实现这个将字符串进行指定行数变换的函数：

string convert(string s, int numRows);
示例 1:

输入: s = "LEETCODEISHIRING", numRows = 3
输出: "LCIRETOESIIGEDHN"
示例 2:

输入: s = "LEETCODEISHIRING", numRows = 4
输出: "LDREOEIIECIHNTSG"
解释:

L     D     R
E   O E   I I
E C   I H   N
T     S     G
```

## 代码实现
```
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
 	if(numRows === 0 || numRows === 1 || numRows === s.length) {
 		return s;
 	}
 	let len = Math.min(s.length, numRows);
 	let loc = 0;
 	let arr = [];
 	let direct = 'down';
 	for(let i = 0; i < len; i++) arr[i] = '';
 	for (let val of s) {
 		arr[loc] += val;
 		if(loc == 0 || loc == numRows - 1) {
 			direct = direct === 'down' ? 'up' : 'down';
 		}
 		loc += direct === 'down' ? -1 : 1;
 	}
 	return arr.join('');
 }

 ```
