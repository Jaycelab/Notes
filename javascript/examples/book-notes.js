let contact = {
  tel: "207-662-5412",
  email: "RonaldSMurphy@freepost.org",
};

//array
contact.email = ["RonaldSMurphy@freepost.org", "rsmurphy@briazz.com"];
//nested properties
contact.email = {
  private: "RonaldSMurphy@freepost.org",
  work: "rsmurphy@briazz.com",
};
console.log(contact.email.work);

let sampleObject = {
  id: 10,
  delay: 20,
  name: "en to tre",
  isPresent: true,
  delay: 50,
};

sampleObject.delay = sampleObject.delay * 2; //interpreted from top to bottom, evaluating delay:50 instead
console.log(sampleObject.id); // -> 10
console.log(sampleObject.name); // -> en to tre
console.log(sampleObject.delay); // -> 100

let test = {
  nr: 10,
  b: false,
  str: "uno dos tres",
  arr: [10, 20, 30],
  obj: {
    x: 10,
    y: 20,
  },
  fn: function (arg) {
    console.log(arg);
  },
};

test.fn(123);
//object prototype, super class

let point = {
  x: 0,
  y: 0,

  // nested property > method (object with function property)
  moveHorizontally: function (distance) {
    //referring 'this' to parent object
    this.x = this.x + distance;
  }, //comma for better reading (separate multiple properties /methods )

  moveVertically: function (distance) {
    this.y = this.y + distance;
  },
};

console.timeLog(point.x);

let contact = {
  email_1: "RonaldSMurphy@freepost.org",
  email_2: "rsmurphy@briazz.com",
};
for (i = 1; i <= 2; i++) {
  //loops email_ to add i, in which it will convert to a string. This evaluates
  // to the variables above. It will loop twice and convert i to email_1
  // and email_2
  let key = "email_" + i;
  //console.log(key);
  //console.log(contact[key]);

  //more modern way of logging using string iteration
  console.log(` ${key}: ${contact[key]}`);
}
