/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
 //1 2 3 4 
var reduce = function(nums, fn, init) {
let acc = init;
    for (let i = 0; i < nums.length; i++) {
        acc = fn(acc, nums[i]);
    }
    return acc;
};
