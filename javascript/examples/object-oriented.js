//ANIMAL

class Animal {
  constructor(color = "yellow", energy = 100) {
    this.color = color;
    this.energy = energy;
  }
  isActive() {
    if (this.energy > 0) {
      this.energy -= 20;
      console.log("Energy is decreasing, currently at:", this.energy);
    } else if (this.energy == 0) {
      this.sleep();
    }
  }
  sleep() {
    this.energy += 20;
    console.log("Energy is increasing, currently at:", this.energy);
  }
  getColor() {
    console.log(this.color);
  }
}

class Cat extends Animal {
  constructor(
    sound = "purr",
    canJumpHigh = true,
    canClimbTrees = true,
    color,
    energy
  ) {
    super(color, energy);
    this.sound = sound;
    this.canClimbTrees = canClimbTrees;
    this.canJumpHigh = canJumpHigh;
  }
  makeSound() {
    console.log(this.sound);
  }
}

class Bird extends Animal {
  constructor(sound = "chirp", canFly = true, color, energy) {
    super(color, energy);
    this.sound = sound;
    this.canFly = canFly;
  }
  makeSound() {
    console.log(this.sound);
  }
}

class HouseCat extends Cat {
  constructor(
    houseCatSound = "meow",
    sound,
    canJumpHigh,
    canClimbTrees,
    color,
    energy
  ) {
    super(sound, canJumpHigh, canClimbTrees, color, energy);
    this.houseCatSound = houseCatSound;
  }
  makeSound(option) {
    if (option) {
      super.makeSound();
    }
    console.log(this.houseCatSound);
  }
}

class Tiger extends Cat {
  constructor(
    tigerSound = "Roar!",
    sound,
    canJumpHigh,
    canClimbTrees,
    color,
    energy
  ) {
    super(sound, canJumpHigh, canClimbTrees, color, energy);
    this.tigerSound = tigerSound;
  }
  makeSound(option) {
    if (option) {
      super.makeSound();
    }
    console.log(this.tigerSound);
  }
}

class Parrot extends Bird {
  constructor(canTalk = false, sound, canFly, color, energy) {
    super(sound, canFly, color, energy);
    this.canTalk = canTalk;
  }
  makeSound(option) {
    if (option) {
      super.makeSound();
    }
    if (this.canTalk) {
      console.log("I'm a talking parrot!");
    }
  }
}

var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk
var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk

fiji.makeSound(); // undefined
fiji.makeSound(true); // chirp

polly.makeSound(); // I'm a talking parrot!
polly.makeSound(true); // chirp, I'm a talking parrot!

polly.color; // yellow
polly.energy; // 100

polly.isActive(); // Energy is decreasing, currently at: 80

var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Energy is decreasing, currently at: 180

var leo = new HouseCat();

// leo, no purring please:
leo.makeSound(false); // meow
// leo, both purr and meow now:
leo.makeSound(true); // purr, meow

var cuddles = new Tiger();
cuddles.makeSound(false); // Roar!
cuddles.makeSound(true); // purr, Roar!

// Task 1: Code a Person class
class Person {
  constructor(name = "Tom", age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = 100;
  }

  sleep() {
    return (this.energy += 10);
  }

  doSomethingFun() {
    return (this.energy -= 10);
  }
}

// Task 2: Code a Worker class

class Worker extends Person {
  constructor(name, age, energy, xp = 0, hourlyWage = 10) {
    super(name, age, energy);
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }
  goToWork() {
    return (this.xp += 10);
  }
}
// Task 3: Code an intern object, run methods
function intern() {
  let intern = new Worker("Bob", 21, 110, 0, 10);
  intern.goToWork();
  return intern;
}

// Task 4: Code a manager object, methods
function manager() {
  let manager = new Worker("Alice", 30, 120, 100, 30);
  manager.doSomethingFun();
  return manager;
}

console.log(intern());
console.log(manager());



//

class Dog {
    hasTeeth() {
        console.log('Beware of Dog');
    }
}
class Chihuahaha extends Dog {
    hasTeeth() {
        super.hasTeeth() 
        console.log('Looks innocent, but')
    }
}   

class Puppy extends Dog {
    hasTeeth() {
        console.log('Miss you my boy');
    }
}
let louieBoi = new Chihuahaha();
let louie = new Puppy();

louieBoi.hasTeeth();
louie.hasTeeth();

function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
let test = kiwiIcecream.meltIt('test');
console.log(test); 

let dog = new String('dog')
console.log(dog)

// extending class, first letter capital
class Train { 
// code defined in between the curly braces is the constructor. Used to build properties on 
// future object instances.  
  constructor(color, lightsON) { 
// This represents the future object instance of the Train class
      this.color = color;
      this.lightsON = lightsON;
  }
    toggleLights() {  
      // This operator will change the value stored in the 
      // lightsOn property of the future instance object of the Train class
        this.lightsOn = !this.lightsOn;
      //  the = operator to its left means that it will get assigned to this.lightsOn, 
      // meaning that it will become the new value of the lightsOn property on that given instance object.
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    // The lightsStatus() method on the Train class just reports the current 
    // status of the lightsOn variable of a given object instance.
    }
    getSelf() {
        console.log(this);
    // will print out the properties of the object instance its called on 
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    //console logs the prototype of the object instance of the Train class. The prototype 
    //holds all the properties shared by all the object instances of the Train class. 
    //To get the prototype, you'll be using JavaScript's built-in Object.getPrototypeOf() method, 
    //and passing it this object - meaning, the object instance inside of which this method is invoked. 
    }
}

let myFirstTrain = new Train("red", false);
let mySecondTrain = new Train('blue', true);

console.log(myForthTrain)
myForthTrain.toggleLights();
myForthTrain.lightsStatus();
console.log(myForthTrain)
let myForthTrain = new Train ('red', false)
myForthTrain.getSelf();
myForthTrain.getPrototype();

class HighspeedTrain extends Train {
  constructor (passengers, highSpeedOn, color, lightsOn) {
          super(color, lightsOn);
          this.passengers = passengers; //assign this on subsequent lines.
          this.highSpeedOn = highSpeedOn; // automatically inherit all methods on Train prototype
            // incl. togglelights, lightStatus, getSelf and getPrototype methods
  }
  toggleHighSpeed() {
          this.highSpeedOn = !this.highSpeedOn;
          console.log('High speed status:' , this.highSpeedOn);   
  }
  toggleLights() {
          super.toggleLights();
          super.lightsStatus();
          console.log('Lights are 100% operational.');
  }
}

let myFifthTrain = new Train('blue', false);
let highSpeed1 = new HighspeedTrain (300, false, 'black', false);

//myFifthTrain.toggleLights();
//myFifthTrain.lightsStatus();
myFifthTrain.toggleLights();
highSpeed1.toggleLights();
myFifthTrain.getPrototype();
highSpeed1.getPrototype()
HighspeedTrain.prototype.__proto__

class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}
let boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs) //
console.log(boxingGym.stationaryBike) //
console.log(boxingGym.treadmill) //

const tinyArray = ['a', 'b', 'c']; console.log(tinyArray);

 let fruit = prompt("which fruit to buy", "apple?");

let bag = {
  [fruit]: 5 //name of property is taken from variable above
};

alert(bag.apple);

let fruit = prompt("Which fruit to buy?", "apple");
let bag = {};

// take property name from the fruit variable
bag[fruit] = 5;

let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
}; 

class NoDefaultParams {
    constructor(num1, num2, num3, string1, bool1) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }

    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}

var fail = new NoDefaultParams(1,2,3,'Results: ', false);
fail.calculate(); 


class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}
var better = new WithDefaultParams();
better.calculate(); // Result: 6




//ANIMAL

class Animal {
    constructor (color, energy) {
        this.color = color,
        this. energy = energy,
    }

    //when ran, will lower value of energy until 0. It will also report
    //updated value of energy. If energy is 0, animal object will go to sleep,
    //by invoking sleep() method based on condition 
    isActive() {
    // if energy is > 0, energy -= 20, console.log energy
    // else if energy <= 0, sleep()
     };

     sleep() {
    // energy += 20
    //console.log energy 
     };

    getColor() {

     };
}

class Cat extends Animal {
    constructor (sound, canJumpHigh, canClimbTrees) {
        this.sound = sound,
        this.canJumpHigh = canJumpHigh,
        this.canClimbTrees = canClimbTrees,
    }
    makeSound() {
        //log makeSound
    };
}

class Bird extends Animal {
    constructor (sound, canFly,color, energy) {
        super(sound, canFly);
    }
    makeSound() {
        //log makeSound
    };
}

class Housecat extends Cat {
    constructor(houseCatSound, sound, canJumpHigh, canClimbTrees, color, energy){
        this.houseCatSound = houseCatSound,
    }
    makeSound() {
        if (this.makeSound)
            //run super.makeSound. Run code from Cat +  
            //console.log(this.houseCatSound)

    };
}

class Tiger extends Cat {
    constructor(tigerSound, sound, canJumpHigh, canClimbTrees, color, energy) {
        this.tigerSound = tigerSound,
    }
}

class Parrot extends Bird {
    constructor (canTalk, sound, canFly,color, energy,  color, energy);
    this.canTalk = canTalk;

    makeSound() {
        //2 conditionals. Check if "true" was passed to super.makeSound during invocation
        // Checks value stored inside this.canTalk property, Logs 'talking '
    }
}