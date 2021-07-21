const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const total = (accumulator, item) => {
    return accumulator += item
}

let totalBatteries = batteryBatches.reduce(total, 0)