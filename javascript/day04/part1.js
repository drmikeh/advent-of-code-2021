const input = require('../file-reader.js').readFile('input.txt', '\n', String, s => true)
const { getBoards, updateBoard, printBoard, calculateWinningScore } = require('./common')

const numbersToCall = input[0].split(',').map(Number)
const boards = getBoards(input)

numbersToCall.forEach(n => {
    boards.forEach(board => {
        if (updateBoard(board, n)) {
            console.log('We have a winner')
            printBoard(board)
            console.log('The winning Score:', calculateWinningScore(board, n))
            process.exit(0)
        }
    })
})
