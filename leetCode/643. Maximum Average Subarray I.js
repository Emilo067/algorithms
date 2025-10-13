/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let begin = 0
    let window_state = 0
    let result = -Infinity

    for (let end = 0; end < nums.length; end++) {
        window_state += nums[end]

        if(end - begin + 1 === k) {
            result = Math.max(window_state, result)
            window_state -= nums[begin]
            ++begin
        }
    }

    return result
};
