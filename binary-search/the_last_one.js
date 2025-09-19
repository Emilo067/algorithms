function the_last_one(arr, key) {
    let low = 0
    let high = arr.length - 1
    let ans = 0

    while (low <= high) {
        const mid = Math.ceil((low + high) / 2)

        if(arr[mid] > key) {
            high = mid - 1
        } else if (arr[mid] < key) {
            low = mid + 1
        } else {
            ans = mid
            low = mid + 1
        }

    }

    return ans
}

console.log(the_last_one([1,2,2,2,4], 2))
