/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let k = 0

    for(let i = 0; i < t.length; i++) {
         if(t[i] === s[k]) {
             k+=1
         }
    }

    return k === s.length
};

var isSubsequence2 = function(s, t) {
    let p1 = 0
    let p2 = 0

    while(p1 < s.length && p2 < t.length) {
        if(t[p2] === s[p1]) {
            ++p1
        }
            ++p2
    }

    return p1 === s.length
};

console.log(isSubsequence2('axc', 'ahbgdc'))
