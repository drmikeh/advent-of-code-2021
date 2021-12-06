const { getInput, makeGrid } = require('./common')

function populateGrid(grid, data) {
    data.forEach(line => {
        const smallerX = Math.min(line.x1, line.x2)
        const largerX = Math.max(line.x1, line.x2)
        const smallerY = Math.min(line.y1, line.y2)
        const largerY = Math.max(line.y1, line.y2)
        if (smallerX !== largerX && smallerY !== largerY) {
            return
        }

        for (let x = smallerX; x <= largerX; x++) {
            for (let y = smallerY; y <= largerY; y++) {
                grid[y][x] += 1
            }
        }
    })
}

const input = getInput('input.txt')
const grid = makeGrid(input)
populateGrid(grid, input)
// printGrid(grid)

const dangerCount = grid.reduce(
    (sum, row) => sum + row.reduce((sum2, v) => sum2 + (v > 1 ? 1 : 0), 0),
    0
)
console.log({ dangerCount })
