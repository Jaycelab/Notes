"use strict";
//Exercise #1

const sensorData = [
  {
    id: 1,
    date: "March-22-2024",
    maxTemp: 100,
    minTemp: 20,
  },

  {
    id: 3,
    date: "March-20-2024",
    maxTemp: 98,
    minTemp: 24,
  },

  {
    id: 3,
    date: "March-18-2024",
    maxTemp: 91,
    minTemp: 18,
  },

  {
    id: 4,
    date: "March-16-2024",
    maxTemp: 88,
    minTemp: 15,
  },
];
//reversing by appending invocation of the reverse method
for (const data of sensorData.reverse()) {
  console.log(
    `Date: ${data.date} Max Temp: ${data.maxTemp} Min Temp: ${data.minTemp}	`
  );
}

//Palindrome is a word thats spell that same backwards
const isPalindrome = (word) => {
  //instantiate two arrays
  let wordArr = [];
  let revWord = [];
  //loop over the input strings and pushes each character into both arrays
  // while comparing the reversed array with the original. Reverse MUTATES original
  for (const w of word) {
    wordArr.push(w);
    revWord.push(w);
  }
  //to compare, will covert to string and use equality operators while appending reverse to revWord. This is useful for simple expressions
  //we need to reverse first before converting into a string
  return wordArr.toString() === revWord.reverse().toString();
  //will return a boolean
};

console.log(isPalindrome("POP") ? "Is a Palindrome" : "Not a palindrome...");
//case sensitive so POp argument will result in false
console.log(isPalindrome("POp") ? "Is a Palindrome" : "Not a palindrome...");

//Exercise #2
("use strict");

const weapons = [
  {
    item: "Red Orbs",
    cost: 240,
  },
  {
    item: "Green Orbs",
    cost: 194,
  },
  {
    item: "Yellow Orbs",
    cost: 154,
  },
  {
    item: "Kill Machine",
    cost: 80,
  },
];

const displayWeapons = (arr) => {
  for (const index of arr) {
    console.log(`${index.item} $${index.cost}`);
  }
};

displayWeapons(weapons.reverse());
