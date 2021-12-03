const input = require('../file-reader.js').readFile('input.txt')

function countIncreases(data) {
    let count = 0
    for (let i = 3; i < data.length; i++) {
        const w1 = data[i - 3] + data[i - 2] + data[i - 1]
        const w2 = data[i - 2] + data[i - 1] + data[i]
        if (w2 > w1) {
            ++count
        }
    }
    return count
}

console.log(countIncreases(input))
