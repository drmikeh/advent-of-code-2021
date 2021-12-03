const input = require('../file-reader.js').readFile('input.txt', '\n', String)

const data = input.map(s => {
    const tokens = s.split(' ')
    return {
        direction: tokens[0],
        amount: Number(tokens[1]),
    }
})

const location = {
    pos: 0,
    depth: 0,
}

data.forEach(instr => {
    switch (instr.direction) {
        case 'forward':
            location.pos += instr.amount
            break
        case 'up':
            location.depth -= instr.amount
            break
        case 'down':
            location.depth += instr.amount
            break
        default:
            throw new Error('Unknown direction: ' + instr.direction)
    }
})

console.log(location, location.pos * location.depth)
