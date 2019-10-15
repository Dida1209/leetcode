# 0023 合并K个排序链表

> 题目来源：https://leetcode-cn.com/problems/merge-k-sorted-lists/

## 题目描述
```
合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

示例:

输入:
[
  1->4->5,
  1->3->4,
  2->6
]
输出: 1->1->2->3->4->4->5->6

```

优先队列（不遵循先入先出的原则）

最大优先队列：无论入队顺序，当前最大的元素优先出队

最小优先队列：无论入队顺序，当前最小的元素优先出队

二叉堆

最大堆的堆顶是整个堆中的最大元素

最小堆的堆顶是整个堆中的最小元素

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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let arr = HeapSort(lists);
    let listNode = null;
    let preNext = null;
    while(arr.length){
        let temp = arr.shift(0);
        if(listNode){
            preNext.next = temp;
        }else {
            listNode = temp;
        }
        preNext = temp;        
        if(temp&&temp.next) {
            arr.push(temp.next);
        }
        arr = HeapSort(arr);
    }
    return listNode;
};
/**
* 构建小顶堆
**/
var HeapSort = function(array) {
    array.unshift(0);
    let heap = array;
    let length = heap.length;
    for(let i = Math.floor((length - 1)/2); i > 0; i--){
        temp = heap[i];
        for(let j = i * 2; j< length; j *= 2){
            if(j + 1 < length && heap[j + 1].val && heap[j].val && heap[j + 1].val < heap[j].val) ++j;
            if(temp.val &&  heap[j].val<= temp.val) {
                heap[i] = heap[j];
                heap[j] = temp;
            }
        }
    }
    heap.shift(0)
    return heap;
}

function partition(lists) {
    switch(lists.length) {
        case 0:
            return null;
        case 1:
            return lists[0];
        case 2:
            return merge2Lists(lists[0], lists[1]);
        default: 
            let mid = lists.length >> 1;
            return merge2Lists(partition(lists.slice(0, mid)), 
                            partition(lists.slice(mid, lists.length))); 
    }
}

function merge2Lists(l0, l1) {
    let p0 = l0, 
        p1 = l1, 
        c = new ListNode(null),
        pc = c;
    while(p0 || p1) {
        if (p0 && p1) {
            if(p0.val < p1.val) {
                pc.next = p0;
                p0 = p0.next;
            } else {
                pc.next = p1;
                p1 = p1.next;
            }
        } else if (p0) {
            pc.next = p0;
            break;
        } else if (p1) {
            pc.next = p1;
            break;
        }
        pc = pc.next;
    }
    return c.next;
}

var mergeKLists = function(lists) {
    return partition(lists);
};

```