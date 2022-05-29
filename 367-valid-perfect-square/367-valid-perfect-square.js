/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let i = Math.ceil(num / 2)
    let pre = 0
    while(Math.abs(i - pre) >= 1) {
        if (i * i === num) {
            return true
        }
        if (i * i > num) {
            pre = i
            i = Math.ceil(i / 2)
        } else {
            i = Math.ceil((i + pre) / 2)
        }
    }
    return false
};