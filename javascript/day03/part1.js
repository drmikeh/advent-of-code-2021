const input = require('../file-reader.js').readFile('input.txt', '\n', String)
const { makeArray, freq, getEncoding } = require('./common')

const length = input.length
const width = input[0].length
const counts = makeArray(width).map(idx => freq(input, idx))

const majorityEncoding = getEncoding(counts, length, 1, 0)
const minorityEncoding = getEncoding(counts, length, 0, 1)
const gamma = parseInt(majorityEncoding, 2)
const epsilon = parseInt(minorityEncoding, 2)

const power = gamma * epsilon
console.log('power:', power) // 2250414
