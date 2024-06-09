//--Objects--

const car = {
  type: "Honda",
  model: "Civic",
  color: "White",
};
console.log(typeof car);
car.wheels = 4;
console.log(car);

//--Functions--

function sayHello(name) {
  console.log(`Hello ${name}, how are you today?`);
}

sayHello("Jason");

function add(x, y) {
  return x + y;
}

const sum = add(10, 20);
console.log(sum);
//30

function myFunction(a, b) {
  return a * b;
}

const mult = myFunction(10, 30);
console.log(mult);

//--Callback Functions--

function greet(name, cb) {
  console.log(`Hello ${name}`);
  cb();
}

greet("Jason", cb);

//ALTERNATIVE

function greet(name, cb) {
  console.log(`Hello ${name}`);
  cb();
}

greet("Jason", function cb() {
  console.log("I am a callback function");
});

//*Callback Excercise*

function showCallFunc(fn) {
  const num = 10;
  fn(num);
  //passing the num var as an argument
}

showCallFunc(function (num) {
  console.log(num);
});

//--Scope--
//global
let textMessage = "hi";
console.log(textMessage);

//local
//able to assign textMessage to function showMessage as it is local. However if we are to console log, textMessage , it would only reference the global scoped variable
function showMessage() {
  let textMessage = "Hello";
  console.log(textMessage);
}
console.log(textMessage);
showMessage();

//global scoped
for (let i = 0; i < 5; i++) {
  console.log(i);
}
+console.log(i); //will not work as it is only global scoped

//--Methods--
//1st method
//using function as a method or as a function as a value in an object
function greet() {
  return `Hello, my name is ${person.name} & I am ${person.age} years old.`;
}

const personA = {
  name: "John",
  age: 30,
  greet,
};

//2nd method

const personB = {
  name: "Jason",
  age: 23,
  greet: function () {
    return `Hello, my name is ${personB.name} & I am ${personB.age} years old.`;
  },
};

console.log(greet());
