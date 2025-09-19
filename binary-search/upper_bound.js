function upper_bound(arr, key) {
    let low = 0
    let high = arr.length - 1
    let ans = -1

    while (low <= high) {
        const mid = Math.ceil((low + high) / 2)

        if(arr[mid] <= key) {
            low = mid + 1
        } else {
            ans = mid
            high = mid - 1
        }
    }

    return ans
}

console.log(upper_bound([1,3,5,8,9], 5))
