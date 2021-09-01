// ---------------------------------------------------------------------------------
// Date Objects
// ---------------------------------------------------------------------------------

const now = new Date();
//Date 1 Format---------------------------
//Can accept the following values:
// String - Can pass a string
// Number - Number of ms from Jan 1 1970
// Date Object
const date1 = new Date("May 11 1018 09:00");

// Date 5 format-----------------------------
// Month is zero-based, so Dec is 11 and Jan is 0
const date5 = new Date(2018, 4, 11, 9); // Yr,Mo,D,Hr,Min,Sec,Ms

// Get/Set methods
console.log("Year: ", now.getFullYear());
now.setFullYear(2018);
console.log("Updated Year: ", now.getFullYear());

// Date Outputs
console.log("toDateString: ", now.toDateString());
console.log("toTimeString: ", now.toTimeString());
console.log("toIsoString: ", now.toISOString()); //commonly used to send and retrieve date data
