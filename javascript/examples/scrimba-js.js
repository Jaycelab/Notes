let player1Time = 102
let player2Time = 107

// cmd+d - ctrl+d
function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}

// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out



let fastestRace = getFastestRaceTime();
console.log(fastestRace);

function totalRaceTime() {
   return player1Time + player2Time
}

let totalTime = getFastestRaceTime();
console.log(totalTime)

let randomNumber = Math.random()
//generated a number between 0 and 1 (not including the number ) ex. 0.9999999


let flooredNumber = Math.floor(3.45632)
//removes the decimals but does not round

let wholeNumber = Math.floor(Math.random() * 11)
//generates a random number between 

function rollDice() {
    let randomNumber = Math.floor(Math.random() *6 ) +1
    return randomNumber
}

console.log (rollDice())

