# 0007 整数反转

> 题目来源：https://leetcode-cn.com/problems/reverse-integer/submissions/

## 题目描述
```
给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 1:

输入: 123
输出: 321
 示例 2:

输入: -123
输出: -321
示例 3:

输入: 120
输出: 21
注意:

假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
```
## 代码实现

```
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isNavigator = x < 0;
    let result = 0;
    let boundaryVal = isNavigator ?  Math.pow(2,31) / 10 : (Math.pow(2,31) - 1)/10;
    x = isNavigator ? -x : x;
    while (x > 0) {
        let remain = x % 10;
        if(boundaryVal - result < parseInt(x/10)) {
            result = 0;
            x = 0;
        } else {
            x = parseInt(x / 10);
            result = 10 * result + remain;
        }
    }
    return isNavigator ? -result : result;
};
```