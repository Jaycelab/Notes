const veggies = ['onion', 'garlic', 'potato'];
	     // current array, option index
veggies.forEach(function(veggie, index) { console.log(`${index}.$
{veggie}`) });

const nums = [0,10,20,30,40,50]; nums.filter( function(num) { return num > 20;
console.log(num) }) console.log(nums);

const nums = [0, 10, 20, 30, 40, 50]; nums.filter(function (num, index)
{ return num > 20; console.log(`${index}= ${num}`); });

console.log(nums);

//function parameters map over another array item, based on what is performed
//inside function in map passed as parameter

[5, 10, 15, 20, 30, 40, 50].map(function(num) { return num * 2; }) ing ojbect
to array

const result = []; const drone = { speed: 100, color: 'yellow' } const
droneKeys = Object.keys(drone);
//first parameter is the current array, 2nd para (optional) is the index
//result = Key parameter > object keys as a method to droneKeys variable.
//method is evaluating the result, used as a 2nd parameter. pushing the index
//of drone to the array
droneKeys.forEach( function(key) { result.push(key, drone[key]) }) console.log
(result)

let smallDogs = new Map(); smallDogs.set('A ', 'Chihuahua'); smallDogs.set
('B ', 'Pomeranian'); smallDogs.set('C ', 'Corgi');
//logging specific value, passing key name as parameter
console.log(smallDogs.get('C '));

//new Set() filters an array for unique elements (filter out duplicates)
const repetitiveFruits =['apple','pear','apple','pear','plum', 'apple']; const
uniqueFruits = new Set(repetitiveFruits); console.log(uniqueFruits);

 

const topColors =
[ "red", "black", "green", "yellow", "blue", "orange", "white", "pink", ];


const [first, second, third, ...secondSet] = topColors;
// first variable assigns to 0 index (red). secondSet variable assigns
// remaining indices in array. 
console.log(secondSet); console.log(second)


// tax rate = 1.1. 0 index in array. Remaining elements assigned to
// itemsBought rest operator
//
function addTaxToPrices(taxRate, ...itemsBought) {
// item = variable to store current array. Unsure on why it skips first
// element (tax rate?)
	return itemsBought.map(item => taxRate * item) }

// parameters added as values to function addTaxToPrices using rest ... items
// bought parameter equal to index evaluated inside function with return map.
// 2nd function item (equal to current array) evaluates tax rate with item 

//rest parameter must be last parameter in function definition 0 element
//(1.1) assigned to taxRate parameter, remaining to itemsBought parameter
let shoppingCart = addTaxToPrices( 1.1, 46, 89, 35, 79); console.log
(shoppingCart) 


const fruits = ["apple", "pear", "plum"]; const berries =
["blueberry", "strawberry"];
//rest operator
const fruitsAndBerries = [...fruits, ...berries]; //concatenates fruits +
berries variable console.log(fruitsAndBerries);

const flying = { wings: 2 }; const car = { wheels: 4 };
// concatenates flying + car objects
const flyingCar = { ...flying, ...car }; console.log(flyingCar);

let veggies = ["onion", "parsley", "broccoli"];
//adds (push) new elements to array
veggies = [...veggies, "carrot", "beetroot"]; console.log(veggies);

const greeting = "Hello";
//returns each element as an individual character
const arrayOfChars = [...greeting]; console.log(arrayOfChars);

const car1 = { speed: 200, color: "yellow", };
//copies object to object properties. able to assign new properties to
//original
const car2 = { ...car1, test: true }; car1.speed = 201; console.log
(car2.test, car1.speed);


const fruits1 = ['apples', ' pears'] const fruits2 = [...fruits1] fruits1.pop
(); console.log(`${[fruits1]} not ${[fruits2]}`)


const meal = ["soup", "steak", "ice cream"];
// equals to first index of array
let [starter] = meal; console.log(starter);

//set returns special values, eliminates duplicates
    let set = new Set(); set.add(1); set.add(2); set.add(3); set.add
    (2); set.add(1);

    function count(...basket) { console.log(basket.length) }

    count(10, 9, 8, 7, 6);

    
