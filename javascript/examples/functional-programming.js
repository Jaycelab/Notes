let pets = [
  { name: "Snickers", species: "Cat", age: 16 },
  { name: "Louie", species: "Dog", age: 12 },
  { name: "Jacob", species: "Dog", age: 7 },
  { name: "Pebbles", species: "Dog", age: 12 },
];

console.log(pets.push({ name: "Buddy", species: "Dog", age: 13 }));

// Map does not mutate or change the array that you call it from
// Instead, it returns a new value which is a brand new separate array
// Function will call once for each item in the pets array with the map
// method. In summary, it will loop through the entire array in
// In this case 5 items since we pushed 1 additional item

// MAP
//Here we are assigning a new var to the pets.map with the nameOnly method
let ourTests = pets.map(nameOnly);

function nameOnly(pet) {
  // Whatever this function returns will get added on to the brand new array
  //return "hello"

  // Here, I added a parameter "pet" above, that returns the first value of the array
  // as indicated by the name value below
  return pet.name;
}

//Results below will result in a new array of 5 'hello'. Which includes our
//original number of indices & the results from the nameOnly method in
//which we assigned to ourTests variable.

//console.log(ourTests)

// Pets array is still pure
//console.log(pets)

// filter is similar to maps in which it does not mutate or change the array we call it from
// it is also a higher function. Below we are assigning a new var to the filter method with onlyDogs
// as a parameter

// FILTER
let dogs = pets.filter(onlyDogs);

// Similar to map, this will call the onlyDogs function once for each item in
// the pets array However with filter, it doesn't' specify what gets added to
// the new array.  Rather returns true or false. The first parameter
// represents the first item in the array
function onlyDogs(doggo) {
  //true will add the first parameter to the brand new filtered array. False will not include it and skip
  // Below I'm targeting the pets object and filtering out 'species' to evaluate if it equals the value of
  // "Dog"
  return doggo.species === "Dog";
}

function onlyAdults(adult) {
  // Same as above, however using a < operator
  return adult.age > 10;
}

// Below we are assigning a new variable to equal pets filter. In this case
// are are accessing both the onlyDogs and onlyAdults. Since pets.filter
// (onlyDogs) returns an array, we can once again access it to add another
// filter. All arrays have access to these methods, not only arrays that have
// already been assigned to variables but even unassign arrays

// If we only want to contain the property name and not the value , we can
// also include a .map method to return the value that we instructed based on
// the function we assigned above to return pets.name
let seniorDogs = pets.filter(onlyDogs).filter(onlyAdults).map(nameOnly);
console.log(seniorDogs);

//First we assign a variable to equal the original object followed by the
//filter or map method. We pass in a parameter that takes in the method in
//which we evaluate to create a new set of array, passing through each item
//that exists on the original array. Map will create a new item based on
//instructions that we enter however with filter, it doesn't specify what
//gets added but instead evaluates if something is true or false. An example
//is returning the pet property to equal === a value, that will result either
//true or false. If false it skips, and if true , the entire object gets
//added. We can also combine multiple filters and maps to specify the
//certain element without mutating the original array in pets
