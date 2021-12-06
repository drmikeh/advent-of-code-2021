const input = require('../file-reader.js').readFile('input.txt', ',', Number)

const RESET_VALUE = 6
const NEW_VALUE = 8
const NUM_DAYS = 80

function nextState(index) {
    let oldValue = fish[index]
    let newValue = oldValue - 1
    newValue = newValue >= 0 ? newValue : RESET_VALUE
    fish[index] = newValue
    return oldValue === 0
}

let fish = []
input.forEach(v => {
    fish.push(v)
})
// console.log('Initial state:', fish.join(','))

for (let day = 1; day <= NUM_DAYS; day++) {
    const newFish = []
    fish.forEach((_, index) => {
        if (nextState(index)) {
            newFish.push(NEW_VALUE)
        }
    })
    fish = fish.concat(newFish)
    const daysString = String(day).padStart(2, ' ')
    // console.log(`After ${daysString} days: ${fish.join(',')}`)
}

console.log('num fish:', fish.length)
