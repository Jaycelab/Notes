' use strict'
// Advanced JS Practice
/*
const personDate = [
	'John Wick',
	47, 
	false,
	true,
	
]

//key value pair	
const person = {
	firstName: 'Jason',
	lastName: 'Alvarado', 
	birthYear: 1954,
	hasADog: true,
	additionalData: ['Baba Yaga', 'Boogeyman'],

	//this. will convert the function below to the object above (person)
	// resulting in access to all it's key values
	calcAge () {
		 currentDate = new Date();
		 currentYear = currentDate.getFullYear();
		//adding this. will reference the above key property in the object
		//console logging this only will print the entire ojbect (person)
		console.log(currentYear	- this.birthYear	)
		//. This will return the statement, and not the
		//result ------  console.log(`${currentYear}	 - ${birthYear}	`)
		
	}
}

// ES6 introduces new features that removes the need of adding the keyword 
//function inside a statement along with the paremeter as long it is referenced
// let and const can also be removed when declaring a variable 
//: will also need to be removed when applying these changes

console.log(personDate[2])
console.log(person.birthYear)
console.log(person.hasADog	)
//when accessing a key(property), its recommended to use bracket notation instead in
//string format
console.log(person.lastName)

console.log(person.additionalData)
console.log(person.calcAge)

//methods are simply function inside of an object
person.calcAge();

/*function multiply (a, b) {
	return a * b;
}

function add (a, b) {
	return a + b;
}

divide = (a,b) => {
	return a / b;
}
                                         //will return multiply (a,b ) using arguments from previous parameter 
const calculator = function (num1,typeOfCalc) {
	return typeOfCalc(num1) //pass another 2 parameters with the previous parameter outside scope
}

//shorthand arrow function with 1 parameter. Removing both parenths and curly brackerts () {}
sqRoot = a => a * a;
//this also works when returning or console log.
``
const output = calculator(10 , sqRoot)


const dumArr = [true, false, "John", 'Wick', 47];

for (let i = 0; i < dumArr.length; i++) {
	//logging i will just print the num value console.log(i)
	//to get arr element, we have to pass array index.(dumArr[i])
	console.log(dumArr[i])

	//interating through entire array and printing the element each time
}

//looping array backward

const backArr = ['jason', 'joe', 'jake', 'jim', 'john']
//inits at 5 length(4 index) and decreases each turn, until equal to 0
for (let i = backArr.length - 1; i>= 0; i--) {
	console.log(backArr[i])
}



// while loop
// while this is true, keep doing
// usually increments/decrements AFTER the expression
let num = 0
while (num <=10) {
	console.log(num)
	num++

}

//ALWAYS make sure to have an increment/decrement to avoid an infinite loop


//Accessing Elements via DOM
//we can access a specific index when accessing an element 
//getElementsByTagName, getElementById
//getElementsByClassName returns an array of elements

//querySelector is the most used DOM method.
//querySelectorAll selects entire query of a specific tag in an array

//objects as arguments

let point1 = {
	x: 4,
	y: 6,
};

let point2 = {
	x: 2,
	y: 4,
};

//hypot returns the sq root of two values x/x/y/y
function calcDistance(p1, p2) {
	return Math.hypot(p2.x - p1.x, p2.y - p1.y);
}

console.log(`Distance between point1 and point2 is ${calcDistance(point1,point2)}`)

//excercise

let tempInFahrenheit = 77;

// combining template literal with string concat
console.log(
	`${tempInFahrenheit} degrees Fahrenheit is `,
	toCelcius(tempInFahrenheit),
	'degrees Celsius'
);

function toCelcius (fahrenheit) {
	return (5 / 9 ) * (fahrenheit - 32);
}


*/
//Function Expressions. fname only accessible before calling
const getDay = function () {
	const days = [
		"sun",
		'mon',
		'tues',
		'wed',
		'thurs',
		'fri',
		'sat',
		'sun'
		];
	//creates a new array with Date method and returns the index of current today. 
	//based on index of element
	const today = new Date().getDay();
	return days[today]
};


console.log(getDay())

const convertTemp = function (temp, convertTo) {
	let toUnit = convertTo ?? "F";
	//if true, assign converTo or assign to "F"
	let tempToConvert = Number(temp) ?? 0;
	//if true , assign temp in Number. If false, assign 0

	if (toUnit === "F") {
		let fahrenheit = (tempToConvert * 9) / 5 + 32;
		return `${fahrenheit}\u{00B0}F`;
		} else {
			let celcius = ((tempToConvert - 32) * 5) / 9;
			return `${celcius}\u{00B0}C`;
		}
}

let today = 100;
console.log(convertTemp(today, "C"))