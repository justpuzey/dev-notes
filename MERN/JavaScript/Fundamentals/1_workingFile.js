// ---------------------------------------------------------------------------------
// Add Elements to an Array
// ---------------------------------------------------------------------------------

const numbers = [3, 4];

// add to end of array
numbers.push(5, 6);

// add to beginning of array
numbers.unshift(1, 2);

// add in middle of array
numbers.splice(2, 0, "a", "b");

console.log(numbers);

// ---------------------------------------------------------------------------------
// Remove Elements from an Array
// ---------------------------------------------------------------------------------
const array2 = [1, 2, 3, 4, 5, 6, 7];
console.log("initial array: ", array2);

// remove from end of array
array2.pop();
console.log("remove last value pop(): ", array2);

// remove from beginning of array
array2.shift();
console.log("remove last value shift(): ", array2);

// remove from middle of array
array2.splice(2, 1); //splice(index,# of items to remove)
console.log("remove value from specific index splice(): ", array2);

// clearing all values to array
array2.length = 0;

array2.splice(0, array2.length);

// ---------------------------------------------------------------------------------
// Finding Elements in an Array
// ---------------------------------------------------------------------------------

// Finding primitive types in array-----------------------------------------
const array1 = [1, 2, 3, 1, 4];

console.log("not found: ", array1.indexOf("a", 4)); //optional "start from" index
console.log("index of: ", array1.indexOf(2));
console.log("last index: ", array1.lastIndexOf(1));
console.log("value exists in array: ", array1.includes(4));

// Finding Object types in array-------------------------------------------
const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
];

// Find Object
const courseSearch = courses.find(function (course) {
  return course.name === "a";
});

console.log("object found: ", courseSearch);

// Return Index of Object
const courseIndexSearch = courses.findIndex(function (course) {
  return course.name === "b";
});

console.log("index of element: ", courseIndexSearch);

// ---------------------------------------------------------------------------------
// Combining and Slicing Arrays
// ---------------------------------------------------------------------------------

// Concatinating an Array
//----------------------------------------------------------------------------------
const first = [1, 2, 3, 1, 4];
const second = [5, 6, 7];

// Using concat() method
const combined = first.concat(second);
console.log("concat:", combined);

// Using spread operator
const combinedSpread = [...first, "additional element", ...second];
console.log("spread:", combinedSpread);

// Slicing an Array
//----------------------------------------------------------------------------------
// Creates new array with elements pulled from existing array
// Any primative data is copied into array
// Any object references are copied into array

const origArray = [1, 2, 3, 4, 5, 6, 7];

// Using slice() method
const slice1 = origArray.slice(2, 4); //Start and End Index
console.log("slice range:", slice1);

const slice2 = origArray.slice(4); //Only start Index given
console.log("slice half:", slice2);

// Duplicating an Array
//----------------------------------------------------------------------------------

// Using slice() method
const duplicate1 = origArray.slice(); //Duplicate full array
console.log("duplicate w/ slice():", duplicate1);

// Using spread operator
const duplicate2 = [...origArray];
console.log("duplicate w/ spread:", duplicate1);

// ---------------------------------------------------------------------------------
// Iterating an Array
// ---------------------------------------------------------------------------------
const iterateNums = [1, 2, 3, 4];

// for...of loop
//----------------------------------------------------------------------------------
for (let number of iterateNums) console.log("for...of:", number);

// forEach with call-back function
//----------------------------------------------------------------------------------
iterateNums.forEach(function (number) {
  console.log("forEach:", number);
});

// forEach with => function
iterateNums.forEach(
  (number, index) => console.log("forEach =>:", number, "index:", index) // index is not available as part of for...of
);
