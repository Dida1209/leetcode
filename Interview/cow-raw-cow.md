# 牛生牛
> 题目来源：面试

## 题目描述
```
农场里有一头母牛（牛的寿命都为6年），第3年和第5年各生一头牛。N年后农场有多少牛？

示例 1:
输入: 6
输出: 4

示例 2:
输入: 10
输出: 10
```

## 代码实现
```
/**
 * @param {number} n2 N年
 * @return {number}
 */
var cowNum = function(n2) {
	if(!cowNum.cache) {
		cowNum.cache = {1:[1,0,0,0,0,0]};
	}
	if(!cowNum.cache[n2]){
        if(!cowNum.cache[n2 - 1]) {
			cowNum(n1, n2 - 1)
		}		
        let temp = cowNum.cache[n2 - 1]
        cowNum.cache[n2] = [temp[1] + temp[3], temp[0], temp[1], temp[2], temp[3], temp[4]]     
	}
    let result = 0	        
    cowNum.cache[n2].map((value) => {
    	result += value
	})
	return result
}
```