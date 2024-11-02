//  PROJECT: Race Day
// Step 1
let raceNumber = Math.floor(Math.random() * 1000);

// Step 2
let earlyRegistration = false;

// Step 3
let age = 25;

// Step 4
if (age >= 18 && earlyRegistration === true) {
    console.log(raceNumber += 1000);
}

// Step 5
if (age >= 18 && earlyRegistration === true) {
    console.log(`If runner is 18 and over AND did not register early they will race at 9:30am. Your race number:${raceNumber}`);
// Step 6
} else if (age >= 18 && earlyRegistration === false) {
    console.log(`If runner is 18 and over AND did not register early they will race at 11:00 am. Your race number:${raceNumber}`);
// Step 7
} else if (age < 18) {
    console.log(`Youth registrants run at 12:30 pm. (regardless of registration) Your race number:${raceNumber}`);
}
