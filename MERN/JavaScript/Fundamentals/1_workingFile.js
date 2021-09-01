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

const courseSearch = courses.find(function (course) {
  return course.name === "a";
});

console.log("object found: ", courseSearch);

const courseIndexSearch = courses.findIndex(function (course) {
  return course.name === "b";
});

console.log("index of element: ", courseIndexSearch);
