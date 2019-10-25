# 0030 串联所有单词的子串

> 题目来源：https://leetcode-cn.com/problems/zigzag-conversion/

## 题目描述
```markdown
给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。
注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。 
示例 1：
输入：
  s = "barfoothefoobarman",
  words = ["foo","bar"]
输出：[0,9]
解释：
从索引 0 和 9 开始的子串分别是 "barfoo" 和 "foobar" 。
输出的顺序不重要, [9,0] 也是有效答案。
示例 2：
输入：
  s = "wordgoodgoodgoodbestword",
  words = ["word","good","best","word"]
输出：[]
```

## 代码实现
```
优化：滑动窗口(左右指针，右指针找到实现，左指针找到最小实现)
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let wordsHash = {};
    let windowHash = {};
    if (s.length === 0 || words.length === 0) {
        return [];
    }
    let len = words[0].length;
    let words_count = words.length;
    let result = [];
    // 存起所有 word
    for (let i = 0; i < words.length; i++) {
        wordsHash[words[i]] && wordsHash[words[i]]++ || (wordsHash[words[i]] = 1);
    }
    for (let i = 0; i < len; i++) {
        let left = i, right = i;
        let window_count = 0;
            windowHash = {};
        while (right + len <= s.length) {
            let key = s.substr(right, len);
            right += len;
            if(wordsHash[key]){
                windowHash[key] && (windowHash[key]++) || (windowHash[key]=1);
                window_count++;
                while (windowHash[key] > wordsHash[key]) {
                    let key = s.substr(left, len);
                    windowHash[key]--;
                    window_count--;
                    left += len;
                }
                if(window_count === words_count) result.push(left);
            } else {
                windowHash = {};
                window_count = 0;
                left = right;
            }            
        }
    }
    return result;
};


代码一:
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let wordsHash = {};
    let windowHash = {};
    if (s.length === 0 || words.length === 0) {
        return [];
    }
    let len = words[0].length;
    let w = len * words.length; // 窗口长度
    let left = 0, right = w;
    let result = [];
    // 存起所有 word
    for (let i = 0; i < words.length; i++) {
        wordsHash[words[i]] && wordsHash[words[i]]++ || (wordsHash[words[i]] = 1);
        windowHash[words[i]] = 0;
    }
    while (right <= s.length) {
        if(left === right) {
            let flag = true;
            for(let key in wordsHash) {
                if(windowHash[key] !== wordsHash[key]) {
                    flag = false;
                }
                windowHash[key] = 0;
            }
            if(flag) {
                result.push(left - w)
            }            
            left = right - w + 1;
            right++;
        }

        let keyWord = s.slice(left, left+len);
        if (wordsHash[keyWord]) {
            windowHash[keyWord] += 1;
            left += len;
        } else {
			for(let key in wordsHash) {
                windowHash[key] = 0;
            }
            left = right - w + 1;
            right++;
        }     
    }
    return result;
};
```

