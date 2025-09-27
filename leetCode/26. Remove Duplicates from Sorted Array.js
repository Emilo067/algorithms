/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0

    for (let i = 0; i < nums.length; i++) {
        if(nums[k] !== nums[i]) {
            k += 1
            nums[k] = nums[i]
        }
    }

    return k+1
};

console.log(removeDuplicates([1,1,2]))
