// Given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element in the result must be unique and you may return the result in any order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// ------------------------------------------------------- Через бинарный поиск
var intersection = function(nums1, nums2) {
    const res = []
    const arr1 = nums1.sort((a, b) => a-b)

    function binarySearch(arr, target) {
        let low = 0, high = arr.length - 1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] === target) return true;
            else if (arr[mid] < target) low = mid + 1;
            else high = mid - 1;
        }
        return false;
    }

    for(let target of nums2) {
        if(binarySearch(arr1, target)) {
            res.push(target)
        }
    }

    return Array.from(new Set(res))
};



// -----------------------------------------------------    Через Set

// var intersection = function(nums1, nums2) {
//     const res = []
//
//    for (let target of nums2) {
//        nums1.includes(target, 0) ? res.push(target) : null
//    }
//
//    return Array.from(new Set(res))
// };


console.log(Array.from(new Set([1.])))
