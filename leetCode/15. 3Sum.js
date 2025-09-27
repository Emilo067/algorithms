/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
   const arr = nums.sort((a,b) => a - b)
    const res = []
    const N = nums.length - 1
    for (let i = 0; i < N; i++) {

        if (i > 0 && arr[i] === arr[i - 1]) continue;
        let target = -arr[i]
        let left = i + 1
        let right = N

        while(left < right) {
            let sum = arr[left] + arr[right]

            if(sum === target) {
                res.push([arr[i], arr[left], arr[right]])

                ++left
                --right

                while(left < right && arr[left] === arr[left - 1]) ++left
                while(left < right && arr[right] === arr[right + 1]) --right
            } else if (sum > target) {
                --right
            } else {
                ++left
            }
        }
    }

    return res
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    let arr = nums.sort((a,b) => a - b)
    let res = []

    for(let i = 0; i < nums.length; i++) {
        if(i > 0 && arr[i] === arr[i - 1]) continue
        let trigger = -arr[i]
        let left = i + 1
        let right = nums.length - 1

        while (left < right) {
            let cur_sum = arr[left] + arr[right]
            if(cur_sum > trigger) {
                --right
            } else if(cur_sum < trigger) {
                ++left
            } else {
                res.push([arr[i], arr[left], arr[right]])

                ++left
                --right
                while(left < right && arr[left] === arr[left - 1]) ++left
                while(left < right && arr[right] === arr[rigth + 1]) --right
            }
        }

        return res
    }


};
console.log(threeSum([-1,0,1,2,-1,-4]))
