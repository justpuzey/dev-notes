// ---------------------------------------------------------------------------------
// String Objects
// ---------------------------------------------------------------------------------
// Eventhough strings are primitive value types, string litterals are wrapped in constructor function

// String primitive
const message = "This is my first message. ";

// String object
const anotherString = new String("This is a second message");

// String methods
console.log(message.length);
console.log(message[0]);
console.log(message.includes("my"));
console.log(message.startsWith("This"));
console.log(message.indexOf("my"));
console.log(message.replace("first", "updated"));
console.log(message.toLocaleUpperCase());
console.log(message.trim());
console.log(message.split(" ")); //returns array of string seperated by all found instances of parameter that was passed

// Template Literals
// ---------------------------------------------------------------------------------

const name = "John";

// use placeholders to dynamically insert any expression
const anotherMessage = `Hi ${name}. This is another message`;
