/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
   let left = 0
   let right = numbers.length - 1

    while (left < right) {
       if(numbers[left] + numbers[right] < target) {
           left++
       } else if (numbers[left] + numbers[right] > target) {
           right--
       } else {
           return [++left, ++right]
       }
    }
};


console.log(twoSum([-1,0], -2))
