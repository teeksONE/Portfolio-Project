const daysInAYear = 365.25;
let age = 40
let lifeTime = 100

const daysLeft = (num) => {
    return Math.floor((lifeTime - age)*daysInAYear)
};

console.log(daysLeft());

const codeStart = new Date("2025-06-01");

let daysCoding = (new Date) - codeStart;
daysCoding = Math.floor(daysCoding / (1000 * 60 * 60 * 24));

console.log(daysCoding);