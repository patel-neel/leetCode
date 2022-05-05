/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let newArr = [...nums1, ...nums2].sort(function(a,b){
        return a-b
    })
    return newArr.length % 2 === 1
    ? newArr[(newArr.length - 1) / 2]
    : (newArr[newArr.length / 2] + newArr[newArr.length / 2 - 1]) / 2;
};