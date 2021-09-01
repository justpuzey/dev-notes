// ---------------------------------------------------------------------------------
// Factory Functions
// ---------------------------------------------------------------------------------
//Does not use Classes or NEW keyword
//Function name uses Camel-notation
function createFactoryCircle(radius, location) {
  return {
    radius, //shorthand used for key-value pair with same name (radius: radius)
    location, //expects object with x and y coordinates { x:1 , y:1}
    isVisible: true,
    draw() {
      console.log(
        `circle drawn with factory function at x:${location.x}  y:${location.y} with a radius of:${radius}`
      );
    },
  };
}
//Create Object
const circle1 = createFactoryCircle(2, { x: 1, y: 2 });
console.log(circle1.draw());

// ---------------------------------------------------------------------------------
// Constructor Functions
// ---------------------------------------------------------------------------------
//Function name uses Pascal-notation
function ConstructorCircle(radius, location) {
  this.radius = radius;
  this.location = location; //expects object with x and y coordinates { x:1 , y:1}
  this.draw = function () {
    console.log(
      `circle drawn with constructor function at x:${location.x} y:${location.y} with a radius of:${radius}`
    );
  };
}

//using 'new' keyword creates empty object and assigns attributes from parent object
const circle2 = new ConstructorCircle(6, { x: 15, y: -2 }).draw();
