/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

    let carry = 0
    let dummy = new ListNode(0);
    let res = dummy

    while (l1 !== null || l2 !== null) {
        let sum = carry
        if (l1 !== null) {
            sum += l1.val
            l1 = l1.next
        }
        if (l2 !== null) {
            sum += l2.val
            l2 = l2.next
        }
        carry = Math.trunc(sum / 10)
        res.next = new ListNode(sum % 10)
        res = res.next
    }

    if (carry > 0) res.next = new ListNode(carry)
    return dummy.next
};