/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let begin = 0
    const window_state = new Map()
    let result = 0

    for(let end = 0; end < fruits.length; end++) {
        const f = fruits[end]
        window_state.set(f, (window_state.get(f) || 0) + 1)

        if(window_state.size > 2) {
            const leftFruit = fruits[begin]
            const cnt = window_state.get(leftFruit)

            if(cnt === 1) {
                window_state.delete(leftFruit)
            } else {
                window_state.set(leftFruit, cnt - 1)
            }
            begin+=1
        }

        result = Math.max(result, end - begin + 1)
    }

    return result
};
