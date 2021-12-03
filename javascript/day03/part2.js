const input = require('../file-reader.js').readFile('input.txt', '\n', String)
const { makeArray, freq, getEncoding } = require('./common')

const width = input[0].length

const bitCriteria = (encoding, row, index) => row[index] == encoding[index]

function getRating(data, majValue, minValue) {
    let rating = data
    for (let index = 0; index < width; index++) {
        const counts = makeArray(width).map(idx => freq(rating, idx))
        const length = rating.length
        const encoding = getEncoding(counts, length, majValue, minValue)
        rating = rating.filter(v => bitCriteria(encoding, v, index))
        if (rating.length === 1) {
            break
        }
    }
    return parseInt(rating, 2)
}

const oxygenGeneratorRating = getRating(input, 1, 0)
const co2ScrubberRating = getRating(input, 0, 1)
const lifeSupportRating = oxygenGeneratorRating * co2ScrubberRating
console.log(lifeSupportRating) // 6085575
