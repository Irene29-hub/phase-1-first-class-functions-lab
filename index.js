// Code your solution in this file!

let consoleLogs = [];
const originalLog = console.log;
console.log = function(...args) {
    consoleLogs.push(args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : String(arg)).join(' '));
    originalLog.apply(console, args);
   
};

console.log("--- Initializing Scuber Functions ---");

const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplier) => {
    return (fare) => {
        return fare * multiplier;
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, selectorFunction) => {
    return selectorFunction(drivers);
};

// --- Demonstrating Functionality ---

const scuberDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo', 'Javier', 'Priya'];
const initialFare = 25;

console.log("\n--- Executing Driver Selection Functions ---");

const firstTwo = returnFirstTwoDrivers(scuberDrivers);
console.log("First two drivers:", firstTwo);

const lastTwo = returnLastTwoDrivers(scuberDrivers);
console.log("Last two drivers:", lastTwo);

console.log("Functions in selectingDrivers array:", selectingDrivers.map(func => func.name || "anonymous"));

const selectedFirst = selectDifferentDrivers(scuberDrivers, returnFirstTwoDrivers);
console.log("Selected first two using selectDifferentDrivers:", selectedFirst);

const selectedLast = selectDifferentDrivers(scuberDrivers, returnLastTwoDrivers);
console.log("Selected last two using selectDifferentDrivers:", selectedLast);

console.log("\n--- Executing Fare Multiplier Functions ---");

const doubledFare = fareDoubler(initialFare);
console.log(`Doubled fare (${initialFare}):`, doubledFare);

const tripledFare = fareTripler(initialFare);
console.log(`Tripled fare (${initialFare}):`, tripledFare);

console.log("\n--- All functions executed ---");