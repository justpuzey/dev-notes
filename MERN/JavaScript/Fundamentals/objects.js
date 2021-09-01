// ---------------------------------------------------------------------------------
// Iterating through properties of an object
// ---------------------------------------------------------------------------------
const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

// Using For...In loop
// --------------------------------------------------------------------
for (let key in circle) console.log(key, circle[key]);

// Using the 'in' operator to determine if a specified parameter exists within an object
// --------------------------------------------------------------------
if ("draw" in circle) console.log("in: ", "property found");

// Using For...Of loop
// --------------------------------------------------------------------
// For Of cannot be used to iterate over an object
// Object properties can be accessed as an array using .keys or .entries methods

// Using .keys method
for (let key of Object.keys(circle)) console.log(".keys: ", key);

// Using .entries
for (let entry of Object.entries(circle)) console.log(".entries: ", entry);

// ---------------------------------------------------------------------------------
// Cloning an object
// ---------------------------------------------------------------------------------
const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

// Use Spread (...) operator
const secondCircle = { ...circle };
console.log("second:", secondCircle);

// Use .assign method to duplicate all properties to a new object
const anotherCircle = Object.assign(
  {
    color: "yellow", //this is an optional step (object could be empty {} ) to add other properties to the existing object
  },
  circle
);

console.log("another", anotherCircle);
// ---------------------------------------------------------------------------------
// Modifying Objects
// ---------------------------------------------------------------------------------
// Objects are dynamic, you can add or remove properties of an object after it has been created
const circle = {
  radius: 1,
};

circle.color = "yellow"; //add object properties
circle.draw = function () {}; //add object methods

delete circle.draw; //delete methods or properties

console.log("modified object", circle);
