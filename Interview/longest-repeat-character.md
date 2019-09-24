# 最长重复字符
> 题目来源：面试

## 题目描述
```
找出字符串中，最长的字符。

示例 1:
输入: 'freammmmsdffdbuuo'
输出: 'mmmm'

示例 2:
输入: 'freammmmsdffffdbuuo'
输出: 'mmmm','ffff'
```

## 代码实现
```
/**
 * @param {string} s
 * @return {string}
 */
var longestRepeat = function(s) {
	let cache = {}, max = 0, result = [];
	for(let i = 0; i < s.length; i++) {
		let temp = s[i];
		if(cache[temp]){
			let character = cache[temp]
			if(character[i - 1]){
				character[i] = character[i - 1] + 1
				if(character[i] > max) {
					max = character[i]
					result = [i - max + 1]
				}else if(character[i] === max){
					result.push(i - max + 1)
				}
				delete character[i - 1]
			} else {
				character[i] = 1
			}
		} else {
			cache[temp] = {}
			cache[temp][i] = 1
		}
	}
	return (result.map((idx) => {
		return s.slice(idx, idx + max)
	})).toString()
}
```