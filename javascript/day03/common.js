function print(arr) {
    arr.forEach(v => {
        console.log(v)
    })
}

function makeArray(length) {
    const result = []
    for (let i = 0; i < length; i++) {
        result.push(i)
    }
    return result
}

function freq(data, index) {
    let count = 0
    for (let i = 0; i < data.length; i++) {
        const ch = data[i][index]
        if (ch === '1') {
            ++count
        }
    }
    return count
}

function getEncoding(counts, length, majValue, minValue) {
    return counts
        .map(c => (c >= length / 2 ? majValue : minValue))
        .reduce((acc, v) => acc + v, '')
}

module.exports = {
    print,
    makeArray,
    freq,
    getEncoding,
}
