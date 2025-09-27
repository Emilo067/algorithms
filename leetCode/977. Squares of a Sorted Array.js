/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0
    let right = nums.length - 1
    const res = Array(nums.length)

    for (let i = nums.length - 1; i >= 0; --i) {
        if(Math.abs(nums[left]) < Math.abs(nums[right])) {
            res[i] = nums[right] * nums[right]
            --right
        } else {
            res[i] = nums[left] * nums[left]
            ++left
        }
    }

    return res
};


console.log(sortedSquares([-4,-1,0,3,10]))
