// You are given an array of distinct integers nums, sorted in ascending order, and an integer target.
// Implement a function to search for target within nums. If it exists, then return its index, otherwise, return -1.
// Your solution must run in O(log n) time


class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let low = 0
        let high = nums.length - 1

        while(low <= high) {
            let mid = Math.ceil((low + high) / 2)
            let guess = nums[mid]

            if(guess > target) {
                high = mid - 1
            } else if (guess < target) {
                low = mid + 1
            } else {
                return mid
            }
        }

        return -1
    }
}
