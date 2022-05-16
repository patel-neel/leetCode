/**
 * @param {number[]} nums
 * @return {number}
 */
let missingNumber = nums => {
    const gSum = (nums.length * (nums.length +1))/2;
    const nSum = nums.reduce((acc, el) => acc + el, 0);
    return gSum - nSum
};