const input = require('../file-reader.js').readFile('input.txt', '\n', String, s => true)
const { getBoards, updateBoard, printBoard, calculateWinningScore } = require('./common')

const numbersToCall = input[0].split(',').map(Number)
let boards = getBoards(input)
let numWinners = 0

numbersToCall.forEach(n => {
    boards.forEach(board => {
        if (!board.winner && updateBoard(board, n)) {
            board.winner = true
            ++numWinners
            let boardsRemaining = boards.length - numWinners
            if (boardsRemaining === 0) {
                console.log(
                    `\nThe last board to win was board ${
                        board.label
                    } with score: ${calculateWinningScore(board, n)}`
                )
                process.exit(0)
            }
        }
    })
})
