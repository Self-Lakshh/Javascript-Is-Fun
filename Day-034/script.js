// Day 34: Control Flow Practice - Leap Year determination
let year = 2024;
let isLeap = false;

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            isLeap = true;
        }
    } else {
        isLeap = true;
    }
}
console.log("Is leap year:", isLeap);