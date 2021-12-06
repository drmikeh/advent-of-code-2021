function makeBoard(label) {
    return {
        label,
        rows: [],
    }
}

function makeRow(line) {
    return line
        .split(' ')
        .map(s => s.trim())
        .filter(s => s.length > 0)
        .map(s => {
            return {
                value: Number(s),
                visited: false,
            }
        })
}

function getBoards(data) {
    const boards = []
    let board = null

    for (let lineNum = 0; lineNum < data.length; lineNum++) {
        const line = data[lineNum]
        if (line === '') {
            if (board) {
                boards.push(board)
            }
            board = makeBoard(boards.length + 1)
        } else {
            if (board) {
                board.rows.push(makeRow(line))
            }
        }
    }
    return boards
}

function getRowElementString(el) {
    const visited = el.visited ? '✓' : ' '
    return `${el.value}${visited}`.padStart(4, ' ')
}

function printBoard(board) {
    console.log(`\n=== BOARD ${board.label} ===`)
    board.rows.forEach(row => {
        const str = row.map(r => getRowElementString(r)).join(' ')
        console.log(str)
    })
    console.log()
}

function printBoards() {
    boards.forEach((board, index) => {
        printBoard(board)
    })
}

function isWinner(board) {
    const numRows = board.rows.length
    const numCols = board.rows[0].length

    // check for all visited across a row
    for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
        let row = board.rows[rowIndex]
        let allVisited = row.reduce((acc, cell) => acc && cell.visited, true)
        if (allVisited) {
            return true
        }
    }

    // check for all visited down a column
    for (let colIndex = 0; colIndex < numCols; colIndex++) {
        const column = []
        for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
            column.push(board.rows[rowIndex][colIndex])
        }
        let allVisited = column.reduce((acc, cell) => acc && cell.visited, true)
        if (allVisited) {
            return true
        }
    }
    return false
}

function updateBoard(board, n) {
    board.rows.forEach(row => {
        row.forEach(cell => {
            if (cell.value === n) {
                cell.visited = true
            }
        })
    })
    return isWinner(board)
}

function calculateWinningScore(board, n) {
    return (
        n *
        board.rows.reduce(
            (sum, row) =>
                sum +
                row
                    .filter(cell => cell.visited === false)
                    .reduce((sum2, cell) => sum2 + cell.value, 0),
            0
        )
    )
}

module.exports = {
    getBoards,
    updateBoard,
    printBoard,
    calculateWinningScore,
}
