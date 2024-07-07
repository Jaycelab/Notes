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

 let fruits = prompt("which fruit to buy", "apple?");

let bags = {
  [fruit]: 5 //name of property is taken from variable above
};

alert(bag.apple);

let fruits2 = prompt("Which fruit to buy?", "apple");
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