// Print onr the console.

// console.log("Welcome to Apna College!");
// console.log("Sukhmeet Singh");
// console.log("Hello JS!!!");

// Variable and DataTypes;

//Primitive DataType (7) -> Number, String, Boolean, Undefined, Null, BigInt, Symbol.

let fullName = "Sukhmeet Singh"; // String DataType

let age = 24; // Number DataType
console.log(typeof age);

let totalPrice = 2458.36;
let isFollow = true; // Boolean DataType

let big = BigInt("123");
console.log(typeof big);

let z = Symbol("Hello!");
console.log(typeof z);

let x = null; // Null DataType

let y; // Undefined Datatypes
console.log(typeof y);

const PI = 3.14;

// Declaration Of Object

const student = {
  fullName: "Rahul Kumar",
  age: 24,
  cgpa: 8.2,
  isPass: true,
};

console.log(student);
console.log(typeof student);

// Both Ways are correct to get the value of the particular key
console.log(student.age);
console.log(student["age"]);
console.log(typeof student); // Object return
console.log(typeof student.age); // Number return

// Change the value of the key
student["age"] = student["age"] + 1;
student.fullName = "Rahul Sharma";

console.log(student);

let profile = {};
console.log(typeof profile);
console.log(profile);

console.log(fullName);
