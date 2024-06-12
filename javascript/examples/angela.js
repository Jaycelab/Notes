/*Age until 90 problem


function lifeInWeeks(age) {
 	// let omitted but need to double check if considered clean code
 	yearsRemaining = 90 - age;
 	daysRemaining = yearsRemaining * 365;
 	weeksRemaining = yearsRemaining * 52;
 	monthsRemaining = yearsRemaining * 12;
  console.log(`You have ${daysRemaining} days, ${weeksRemaining} weeks, and ${monthsRemaining} months left`)
 }

lifeInWeeks(35)

Milk Challenge 

function getMilk(money, costPerBottle) {
	console.log('leaveHouse');
	console.log('moveRight');
	console.log('moveRight');
	console.log('moveUp');
	console.log('moveUp');
	console.log('moveUp');
	console.log('moveUp');
	console.log('moveRight');
	console.log('moveRight');
			// Arriving at store
	console.log (`buy ${calcBottles(money,costPerBottle)} bottles of milk`)

    console.log('moveLeft');
	console.log('moveLeft');
	console.log('moveDown');
	console.log('moveDown');
	console.log('moveDown');
	console.log('moveDown');
	console.log('moveleft');
	console.log('moveleft');
	console.log('enterHouse');

	return calcChange(money, costPerBottle)

}

//bottles able to buy
function calcBottles(startingMoney, costPerBottle) {
	let numberOfBottles = Math.floor(startingMoney , costPerBottle)  // / to separate? possibly typo but still works
	//Arguments from calcBottles function **startingMoney, costPerBottle
	return numberOfBottles;
}

//change function
function calcChange (startingAmount, costPerBottle) {
	let change = Math.floor(startingAmount % costPerBottle);
	return change

}


console.log(`Hello master, here is your ${getMilk(10, 3)} change `)

//This example takes the outputs of functions to insert inside other code . This will reduce the amount of code as we only will
// need to change the params rather than the inside code instead 

** BMI Example 
// Calculate BMI . BMI = weight/ height(squared)

let kg = 1;
let weightPounds = kg * 2.20462262185;  conversion not needed for this problem

function bmiCalc (weight, height) {
	let formula = Math.round(weight / Math.pow(height, 2)); //Math.Power a cleaner exponent
    
    if(bmiCalculator  < 18.5){
        return `Your BMI is ${bmiCalculator }, so you are underweight.`
        
    } else if ( bmiCalculator  < 18.5 && bmiCalculator  > 24.9) {
        return `Your BMI is ${bmiCalculator }, so you have a normal weight.`
        
    } else if (bmiCalculator  > 24.9) {
        return `Your BMI is ${bmiCalculator }, so you are overweight.`
    }
}

let bmi = bmiCalc(81.6466,1.73)
console.log(bmi) 

// Love Calculator

//Math.random()
// Math.floor

let result = Math.random() * 100;
result = Math.floor(result) + 1;

if (result === 100) {
  alert(`Your love score is ${result} %!`);
} else {
  alert(`Your love score is ${result} %!, which is pretty basic`);
}


// Array
let guestList = ["Jason", "Elmer", "Brian", "Abie"];
let name = prompt("What is your name?");

if (guestList.includes(name)) {
  alert("Welcome to the Club!");
} else {
  alert("You are not welcome");
}



*/

function fizzBuzz() {
	for (let i = 1; i < 101; i++) {
		
		if (i % 15 === 0) {
        console.log("FizzBuzz")}
		else if (i % 5 === 0 ) {
		    console.log('Bizz')}
	  else if (i % 3 === 0 ) {
	console.log('Fizz')}
    else {
      console.log(i)
    }
  }
}

fizzBuzz();