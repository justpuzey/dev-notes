// ---------------------------------------------------------------------------------
// Constructor Functions
// ---------------------------------------------------------------------------------
//Every object in JavaScript is created using built-in constructor functions
//You could

let x = {};
// when object literal is used, behind the scenes, JavaScript is creating a new object using constructor function
let y = new Object();

new String(); // constructor creation of new string vs. string literal '',"",``
new Boolean(); // true, false
new Number(); // 1, 2, 3,...

//all functions are created using Function constructor

//Example 1 (typical function where constructor is used behind-the-scenes by JavaScript)
// ---------------------------------------------------------------------------------
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle1 = new Circle(4);
console.log(circle1.constructor); //you can access the constructor to view the constructor function

//Example 2 (function created using explicit call to the Function() constructor)
// ---------------------------------------------------------------------------------
const Circle2 = new Function(
  "radius",
  `
this.radius = radius;
this.draw = function () {
    console.log("draw");
}
`
);

console.log(Circle2);
