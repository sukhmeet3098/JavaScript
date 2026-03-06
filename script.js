// This is Single Line Comment
console.log("Hello World!!");

/* This is a 
multi line Comment */

//Artimetic Opertor
// let a = 5;
// let b = 2;

// console.log("a + b: ", a + b);
// console.log("a - b: ", a - b);
// console.log("a * b: ", a * b);
// console.log("a / b: ", a / b);
// console.log("a % b: ", a % b);
// console.log("a ** b: ", a ** b);

//Uniary Opeartors
// a++;
// console.log("a = ", a);
// a--;
// console.log("a = ", a);

// Pre(++a) and Post(a++) Increment
// console.log("a = ", ++a);
// console.log("a = ", a);

// console.log("a = ", a++);
// console.log("a = ", a);

// Pre(--a) and Post(a--) Decrement
// console.log("a = ", --a); // 4
// console.log("a = ", a); //4

// console.log("a = ", a--); //5
// console.log("a = ", a); //4

// Assignment Operator

// let a = 5;
// let b = 2;

// a += 4; // a = a + 4 = 5 + 4 = 9
// a /= 4; // a = a / 4 = 5 / 4 = 1.25
// b -= 4; // b = b - 4 = 2 - 4 = -2
// b *= 4; // b = b * 4 = 2 * 4 = 8
// a %= 4; // a = a % 4 = 5 % 4 = 1
// b **= 4; // b = b ** 4 = 2 ** 4 = 16

//Comparison Operators

// let a = 5;
// let b = 2;

// console.log("a == b: ", a == b); // false
// console.log("a === b: ", a === b); // false
// console.log("a != b: ", a != b); // true
// console.log("a !== b: ", a !== b); // true
// console.log("a > b: ", a > b); // true
// console.log("a >= b: ", a >= b); // true
// console.log("a <= b: ", a <= b); // false
// console.log("a < b: ", a < b); // false

// Logical Operators

// let a = 6;
// let b = 5;

// // AND Operator &&
// console.log("(a > b) && (a === 6) = ", a > b && a === 6); // true
// console.log("(a < b) && (a === 6) = ", a < b && a === 6); // false

// // OR Operator ||

// console.log("(a > b) || (a === 6) = ", a < b || a === 6); // true
// console.log("(a < b) || (a === 6) = ", a < b || a === 5); // false

// // NOT Operator !
// console.log("!(a === 6) = ", !(a === 6)); // false
// console.log("!(a === 5) = ", !(a === 5)); // true

// Conditional Statements

// let age = 25;
// //IF statement
// if (age <= 18) {
//   console.log("Adult");
// }

// if (age < 18) {
//   console.log("Not Adult");
// }

// //IF - ELSE Statement
// if (age >= 18) {
//   console.log("Adult");
// } else {
//   console.log("Not Adult");
// }
// // ELSE IF Statement
// if (age < 18) {
//   console.log("Teenager");
// } else if (age < 60) {
//   console.log("Senior");
// } else {
//   console.log("Middle");
// }
// // Ternary Operators

// // condition ? true output : false output;
// age > 18 ? console.log("Adult") : console.log("Not Adult");

// Problem Statement 1 (Check number is multiple of 5.)

// let num = prompt("Enter a Number");

// if (num % 5 === 0) {
//   console.log(num, "is a multiple of 5.");
// } else {
//   console.log(num, "is NOT a multiple of 5.");
// }

// // Problem 2 (Give Grades to Students Accordingly to their scores.)

// let score = prompt("Enter the Marks");

// if (score >= 90 && score <= 100) {
//   console.log("Grade: A");
// } else if (score >= 70 && score <= 89) {
//   console.log("Grade: B");
// } else if (score >= 60 && score <= 69) {
//   console.log("Grade: C");
// } else if (score >= 50 && score <= 59) {
//   console.log("Grade: D");
// } else {
//   console.log("Grade: F");
// }

// Loops

// let sum = 0;
// For Loop
// for(let i = 1; i <= n; i++){
//   sum = sum + i;
// }
// console.log("sum = ", sum);

// While Loop
// let i = 1;
// while (i <= 5) {
//   sum = sum + i;
//   i++;
// }
// console.log("sum = ", sum);

// do-while loop
// let i = 20;
// do {
//   console.log("Sukhmeet Singh");
//   i++;
// } while (i <= 5);

// For of Loop (Used in String and Arrays)

// let str = "Sukhmeet";
// let size = 0;
// for (let val of str) {
//   console.log("value is:", val);
//   size++;
// }
// console.log(size);

// For in Loop (Used in Objects and Arrays)

// const student = {
//   name: "Sukhmeet Singh",
//   age: 28,
//   cgpa: 9.85,
//   isPass: true,
// };

// for (let key in student) {
//   console.log("key=", key, "value= ", student[key]);
// }

//Problem 1 : Print all even numbers

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// Problem 2: Create the Game to Guess the right number.
// let gameNum = 25;
// let userNum = prompt("Enter the Game Number:");

// while (userNum != gameNum) {
//   userNum = prompt("You entered the wrong number. Guess Again:");
// }
// console.log("Congratulations, You guess the right number..");

// Strings (Immutable in Nature)

// let str = "Sukhmeet";
// console.log(str.length);
// console.log(str[0]);

// // Template Literals

// let output = `This is an template literals. ${1 + 2 + 3}`;
// console.log(output);

// // String Interpolation
// const obj = {
//   item: "pen",
//   price: 10,
// };

// output = `The cost of ${obj.item} is ${obj.price} rupees.`;
// console.log(output);

// Strings In-Built Methods

// let str = "Sukhmeet Singh";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// // Trim to remove starting and ending white spaces.
// let str1 = "         Sukhmeet Singh        ";
// console.log(str1.trim());

// //Slice to get some part of the string slice(startindex, endindex (optional))
// console.log(str.slice(1, 4));

// // Concat Two Strings
// let firstName = "Sukhmeet";
// let lastName = "Singh";

// console.log(firstName.concat(lastName));
// console.log("My Full Name is:", firstName + lastName);

// // Replace is used to replace certain character or string with replace one charcter or string replace(searchVal, replaceVal)
// let str2 = "hello";
// console.log(firstName.replace("lo", "p")); // replace only first ocuurance string found in the string.

// str = "hellolololo";
// console.log(str.replaceAll("lo", "p"));

// //charAt is used to fetch the particular character from the string.
// console.log(str.charAt(0));
