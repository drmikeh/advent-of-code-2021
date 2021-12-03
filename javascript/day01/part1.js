const input = require('../file-reader.js').readFile('input.txt')

function countIncreases(data) {
    let count = 0
    for (let i = 1; i < data.length; i++) {
        if (data[i] > data[i - 1]) {
            ++count
        }
    }
    return count
}

console.log(countIncreases(input))
