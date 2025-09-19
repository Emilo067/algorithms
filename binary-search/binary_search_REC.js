function binary_search(arr, item, low, high) {
    if(low > high) return -1
    const mid = Math.ceil((low + high) / 2)

    if(arr[mid] === item) return mid
    if(arr[mid] < item) return binary_search(arr, item, mid + 1, high)
    return binary_search(arr, item, low, mid - 1)
}

console.log(binary_search([-1,0,2,4,6,8], 4, 0, 5))
