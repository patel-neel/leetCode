/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let products = [];
    for (let i = 0; i < nums.length; i++){
        let product = 1;
        for (let j = 0; j < nums.length; j++){
            if(i != j){
                product *= nums[j];
            }
        }
        products.push(product)
    }
    return products;  
};