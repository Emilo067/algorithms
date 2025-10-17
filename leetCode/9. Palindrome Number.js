/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str = String(x)
    let p1 = 0
    let p2 = str.length - 1

    while(p1 < p2) {
        if(str[p1] !== str[p2]) {
            return false
        }
        ++p1
        --p2
    }

    return true
};
