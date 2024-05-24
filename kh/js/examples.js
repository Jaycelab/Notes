//if-else
/*let cost = 1250;

if (cost < 1000) {
	console.log("No discount applicable");
} else {
	console.log("Your total is", cost);
}

let currentHour = new Date().getHours();

if (currentHour >= 0 && currentHour < 12) {
	console.log("Good Morning");
} else {
	console.log("Good Night");
}
*/
//SWITCH
let a = 20;
let b = 50;
let action = "DIVIDE";

//action is used as an expression to match against the used cases
//case is used to execute if truthy
//break is needed to stop a condition check regardless if truthy
switch (action) {
	case "ADD": {
		let sum = a + b;
		console.log(`The sum of ${a} and ${b} is ${sum}`);
		break;
	}
	case "SUBTRACT": {
		let diff = a - b;
		console.log(`The subtraction of ${a} and ${b} is ${diff}`);
		break;
	}
	case "MULTIPLY": {
		let mul = a * b;
		console.log(`The multiplicatoin of ${a} and ${b} is ${mul}`);
		break;
	}
	case "DIVIDE": {
		let div = a / b;
		console.log(`The division of ${a} and ${b} is ${div}`);
		break;
	}
	//default is used if no condition is met, We an also throw an error code
	default: {
		throw new Error("Invalid action. Please select again");
	}
}

// switch can also be used to keep slipping without having to set a statement until a condition is truthy. It will slip through all the cases until the very last condition before the break statement. It is important to use a break statement when applying this method

let item = "Eggplant";
let type; //will be assinging using case below

switch (item) {
	case "Apple":
	case "Banana":
	case "Orange":
	case "Strawberry":
	case "Kiwi":
	case "Mango":
		type = "fruit";
		console.log(`The type ${item} is ${type}`);
		break;
	case "Lettuce":
	case "Potato":
	case "Celery":
	case "Eggplant":
		type = "vegetable";
		console.log(`The type of ${item} is ${type}`);
		break;
	default: {
		throw new Error("Unable to identify item...");
	}
}

*Ternary Operator*

const number = 5;
const result =
	number * 2 > 5
	? number === 10
	? "Number is 5"
	: "Twice of number is not 10"
	: "Number is not 5";
console.log(result);
//Answer is "Twice of number is 10"
//This is because Both num * 2 > 5 and number === 10 is both truthy, it will select the second condition.

*Binary Logical Operator*
'use strict';

let inputUsername = 'joe';
let inputPassword = 'joe@901';

const database = {
  joe: {
    user: 'Joe Mockery',
    password: 'joe@901',
  },
};

let checkPassword = database[inputUsername].password === inputPassword

checkPassword && console.log(`${database[inputUsername].user || 'User'} is logged in...`);
//evaluates and console.logs if left condition is true

*Nullish Coaelescing Operator*

let tempData = [
	{
		location: 'Block A - East',
		sensor1: 0,
		sensor2: 0,
		sensor3: 4.2,
	},
	{
		location: 'Block B - East',
		sensor1: 0,
		sensor3: 3,
	},
];

//example below will select sensor 3 as it evaluates sensor1 & 2 as a falsy value (0)
console.log(
	`${tempData[0].location}: ${
		tempData[0].sensor1 || tempData[0].sensor2 || tempData[0].sesnor3
	} degrees `
	); 

//example below will select the first truth value which is sensor 1 
console.log(
	`${tempData[1].location}: ${
		tempData[1].sensor1 ?? tempData[1].sensor2 ?? tempData[1].sesnor3
	} degrees `
	); 