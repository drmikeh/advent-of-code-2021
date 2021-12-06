const input = require('../file-reader.js').readFile('input.txt', ',', Number)

const RESET_VALUE = 6
const NEW_VALUE = 8
const NUM_DAYS = 256

const fish = []
for (let n = 0; n <= NEW_VALUE; n++) {
    fish.push(0)
}

function updateFish(idx) {
    ++fish[idx]
}

input.forEach(updateFish)
console.log('Initial state:', fish)

for (let day = 1; day <= NUM_DAYS; day++) {
    const fishToReset = fish[0]
    for (let index = 1; index < fish.length; index++) {
        fish[index - 1] = fish[index]
    }
    fish[RESET_VALUE] += fishToReset
    fish[NEW_VALUE] = fishToReset // new fish

    const daysString = String(day).padStart(2, ' ')
    console.log(`After ${daysString} days: ${fish}`)
}

console.log(
    'num fish:',
    fish.reduce((sum, cnt) => sum + cnt, 0)
)
