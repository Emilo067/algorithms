function lower_bound(arr, key) {
 let low = 0
    let high = arr.length - 1
    let ans = -1

    while (low <= high) {
     const mid = Math.ceil((low + high) / 2)

        if(arr[mid] < key) {
            low = mid + 1
        } else {
            ans = mid
            high = mid - 1
        }
    }

    return ans
}


function lower_bound_rec(arr, key, low, high) {
  if (low > high) return -1

    const mid = Math.ceil((low + high) / 2)
    if(arr[mid] < key) return lower_bound_rec(arr, key, mid + 1, high)
    return Math.min(mid, lower_bound_rec(arr, key, low, mid - 1))
}


console.log(lower_bound([1,3, 4, 5,8,9], 4))
