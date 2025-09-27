var isPalindrome = function (s) {
    let left = 0
    let right = s.length - 1

    while (left < right) {
        if (!/[a-z0-9]/i.test(s[left])) {
            ++left
            continue
        }
        if (!/[a-z0-9]/i.test(s[right])) {
            --right
            continue
        }

        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false
        }

        ++left
        --right
    }

    return true
};


console.log(isPalindrome("A man, a plan, a canal: Panama"))
