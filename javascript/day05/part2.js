const { getInput, makeGrid, printGrid } = require('./common')

function populateGrid(grid, data) {
    data.forEach(line => {
        const smallerX = Math.min(line.x1, line.x2)
        const largerX = Math.max(line.x1, line.x2)
        const smallerY = Math.min(line.y1, line.y2)
        const largerY = Math.max(line.y1, line.y2)

        if (smallerX === largerX) {
            const x = smallerX
            for (let y = smallerY; y <= largerY; y++) {
                grid[y][x] += 1
            }
        } else if (smallerY === largerY) {
            const y = smallerY
            for (let x = smallerX; x <= largerX; x++) {
                grid[y][x] += 1
            }
        } else {
            const length = largerX - smallerX
            const deltaX = line.x2 > line.x1 ? 1 : -1
            const deltaY = line.y2 > line.y1 ? 1 : -1
            for (let n = 0; n <= length; n++) {
                const x = line.x1 + n * deltaX
                const y = line.y1 + n * deltaY
                grid[y][x] += 1
            }
        }
    })
}

const input = getInput('input.txt')
const grid = makeGrid(input)
populateGrid(grid, input)

const dangerCount = grid.reduce(
    (sum, row) => sum + row.reduce((sum2, v) => sum2 + (v > 1 ? 1 : 0), 0),
    0
)
console.log({ dangerCount })
