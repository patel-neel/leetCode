/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    let storage = {};
    for (let i = 0; i < nums.length; i++){
        let value = nums[i];
        let complement = target - value;
        if (storage[complement] !== undefined){
            return [storage[complement], i];
        }else{
            storage[value] = i
        }
    }
};