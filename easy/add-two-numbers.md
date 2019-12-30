# 0002 两数相加

> 题目来源：https://leetcode-cn.com/problems/add-two-numbers/

## 题目描述
```
给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
```
## 代码实现
```
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // 进位
    let flag = 0;
    let cur ;
    let res ;
    while(l1 && l2) {
        let data = l1.val + l2.val + flag;
        let remainder = data % 10;
        flag = Math.floor(data / 10);
        let node = new ListNode(remainder);
        if(!res) {
            res = node;
            cur = node;
        } else {
            cur.next = node;
            cur = node;
        }
        l1 = l1.next;
        l2 = l2.next;
    }
    if(!l1 && !l2) {
        if (flag) {
            let node = new ListNode(flag);
            cur.next = node;
        }
        return res;
    }
    if(!l1) {
        while(flag) {
            let data = flag + (l2 && l2.val);
            let remainder = data % 10;
            flag = Math.floor(data / 10);
            let node = new ListNode(remainder);
            cur.next = node;
            cur = node;
            l2 = l2 && l2.next;
        }
        cur.next = l2;
        return res;
    }
    if(!l2) {
        while(flag) {
            let data = flag + (l1 && l1.val);
            let remainder = data % 10;
            flag = Math.floor(data / 10);
            let node = new ListNode(remainder);
            cur.next = node;
            cur = node;
            l1 = l1 && l1.next;
        }
        cur.next = l1;
        return res;
    }
};
```