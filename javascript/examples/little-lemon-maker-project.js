const dishData = [
  {
    name: "Italian pasta",
    price: 9.55
  },
  {
    name: "Rice with veggies",
    price: 8.65
  },
  {
    name: "Chicken with potatoes",
    price: 15.55
  },
  {
    name: "Vegetarian Pizza",
    price: 6.45
  }
];
const tax = 1.2;

// Implement getPrices()
function getPrices(taxBoolean) {
  // loop over all objects in dishData array. Key set to variable
  for (let key of dishData) {
    // Declaring finalPrice variable for calculation (no value)
    let finalPrice;
    // checking to see if tax is applied, in which the price object property (key.price) will be multiplied
    // by the tax
    if (taxBoolean === true) {
      finalPrice = key.price * tax;
    } else if (taxBoolean === false) {
      // if false, returns current price without tax
      finalPrice = key.price;
    } else {
      console.log("You need to pass a boolean to the getPrices call!");
      //return to jump out of the further function execution
      return;
    }

    console.log(`Dish: ${key.name} \nPrice: $${finalPrice}\n`);
  }
}

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
  //invoking getPrices
  getPrices(taxBoolean);
  // check to see if guest is a number using typeof
  if (typeof(guests) === "number" && guests > 0 && guests < 30) {
    let discount = 0;
    if (guests < 5) {
      discount = 5;
    } else if (guests >= 5) {
      discount = 10;
    }
    console.log(`Discount is: $${discount}\n`);
  } else {
    console.log("The second argument must be a number between 0 and 30");
  }
}

// Call getDiscount()
getDiscount(true, 2);
getDiscount(false, 10);

//OPTIONAL 
//Var scope loop

var result = 0;

var i = 0;
var limit = 3;
while(i < limit) {
    result += 2;
    i++;
}
// incrementing i ++ up to 3 times (0,1,2). Stops once reaches 3
// result variable is incremented by 2 per loop. 2, 4,6.
console.log(result);




