const { makeArray } = require('../utils')

function getInput(fileName) {
    return require('../file-reader.js')
        .readFile(fileName, '\n', String)
        .map(s => s.split(' '))
        .map(el => {
            const start = el[0].split(',')
            const end = el[2].split(',')
            return {
                x1: Number(start[0]),
                y1: Number(start[1]),
                x2: Number(end[0]),
                y2: Number(end[1]),
            }
        })
}

const getLargestX = data => data.reduce((max, line) => Math.max(max, line.x1, line.x2), 0)
const getLargestY = data => data.reduce((max, line) => Math.max(max, line.y1, line.y2), 0)

function makeGrid(data) {
    const largestX = getLargestX(data)
    const largestY = getLargestY(data)
    const grid = makeArray(largestY + 1, largestX + 1)
    for (let x = 0; x <= largestX; x++) {
        for (let y = 0; y <= largestY; y++) {
            grid[x][y] = 0
        }
    }
    return grid
}

function printGrid(grid) {
    grid.forEach(row => {
        console.log(row.map(v => (v === 0 ? '.' : v)).join(''))
    })
}

module.exports = {
    getInput,
    makeGrid,
    printGrid,
}
