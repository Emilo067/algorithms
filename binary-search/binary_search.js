function binary_search(arr, item) {
    let low = 0
    let high = arr.length - 1

    while(low <= high) {
        let mid = Math.ceil((low + high) / 2)
        let guess = arr[mid]

        if(guess > item) {
            high = mid - 1
        } else if (guess < item) {
            low = mid + 1
        } else {
            return mid
        }
    }

    return null
}

console.log(binary_search([-1,0,2,4,6,8], 4))
