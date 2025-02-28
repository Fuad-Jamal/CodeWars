function duplicateEncode(word) {
    let split = word.toLowerCase().split('')
    let count = split.reduce((x, y) => {
        x[y] = (x[y] || 0) + 1
        return x
    }, {})
    let answer = split.map(char => {
        if (count[char] > 1) {
            return ")"
        } else {
            return "("
        }
    })
    return answer.join('');
}