// ---------------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------------

//Primitive or Value Types
const valueTypes = {
  number: "Number",
  string: "String",
  boolean: "Boolean",
  symbol: "Symbol",
  undefined: "undefined",
  null: "Null",
};

//Reference or Object Types
const referenceTypes = {
  object: "Object",
  function: "Function",
  array: "Array",
};

// when variable b is set to = a, the value of a is copied to b because a is a primative type value
// so when a is later updated to 20, b is unaware of the change
let a = 10;
let b = a;

a = 20;
console.log(`a:${a}, b:${b}`);

// when 'd' is set to = 'c', the address of the object is copied to d,
// when 'c' is updated to 20, both 'c' and 'd' show the same value because they both reference the same object
let c = { value: 10 };
let d = c;

c.value = 20;
console.log(`c:${c.value}, d:${d.value}`);

//The Console will display number that has not been incremented since value of the primative number
//was copied to the function and the scope of the incremented number stays within the function
let primativeNumber = 10;

function increase(primativeNumber) {
  primativeNumber++;
}

increase(primativeNumber);
console.log(`Primative Number: ${primativeNumber}`);

//The Console will show incremented number since the reference was passed to increase()
let referenceNumber = { value: 10 };

function increase(referenceNumber) {
  referenceNumber.value++;
}

increase(referenceNumber);
console.log(`Reference Number: ${referenceNumber.value}`);
