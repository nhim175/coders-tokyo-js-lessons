// JSON object
// 1. stringify - Convert an object to a JSON string
// 2. parse - Convert a JSON string to an object
var myDog = { name: 'Milu', age: 1, dead: false };
var myDogString = JSON.stringify(myDog);

var myCatString = '{"name": "Tom", "age": 2, "dead": true}';
var myCat = JSON.parse(myCatString);
console.log(myCat);

// Exercise
// 1. Show all students
// 2. Create a new student
// 3. Save & Exit
// > 1.
// Save to ./data.json -> fs.readFileSync, JSON.parse
// > 2.
// > Your name?
// > Your age?
// > Your class?
// > 3.