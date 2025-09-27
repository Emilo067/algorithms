
var reverseString = function(s) {
    let start = 0
    let end = s.length - 1

    while (start < end) {
        const temp = s[start]
        s[start] = s[end]
        s[end] = temp

        start += 1
        end -= 1
    }

    console.log(s)
};

console.log(reverseString(["h","e","l","l","o"]))
