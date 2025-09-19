// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
//You must write an algorithm with O(log n) runtime complexity.


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let low = 0
    let high = nums.length - 1
    // let index = 0

    while (low <= high) {
        let mid = Math.ceil((low + high) / 2)
        let guess = nums[mid]

        if (guess > target) {
            high = mid - 1
        } else if (guess < target) {
            low = mid + 1
        } else if (guess === target) {
            return mid
        }

       // index = mid
    }

    // if(nums[index] < target) {
    //     return index + 1
    // } else {
    //     return index
    // }

    return low

};


console.log(searchInsert([1,3,5], 4))
