// // Function Declaration
// function myFunction(){
//   console.log("Hello!!!");
// }
// // Call The Function
// myFunction();

// Function Sum of Two Numbers
// function sum(x, y) {
//   s = x + y;
//   return s;
// }

// let value = sum(3, 4);
// console.log(val);

// Sum Function
// function sum(x, y) {
//   let s = x + y;
//   return s;
// }

// // SumArrow
// const sumArrow = (a, b) => {
//   console.log(a + b);
// };

// sumArrow(3, 4);

// // Multiple Function
// function mul(a, b) {
//   let result = a * b;
//   return result;
// }

// // MultiplyArrow
// const mulArrow = (a, b) => {
//   return a * b;
// };
// let result = mulArrow(3, 4);
// console.log(mulArrow);
// console.log(result);

// Create Function To CountVowels
// function countVowels(str) {
//   let count = 0;
//   for (let val of str) {
//     if (
//       val === "a" ||
//       val === "e" ||
//       val === "i" ||
//       val === "o" ||
//       val === "u"
//     ) {
//       count += 1;
//     }
//   }
//   return count;
// }

// let result = countVowels("Hello");

// Arrow function;
// const countVowels = (str) => {
//   let count = 0;
//   for (let val of str) {
//     if (
//       val === "a" ||
//       val === "e" ||
//       val === "i" ||
//       val === "o" ||
//       val === "u"
//     ) {
//       count += 1;
//     }
//   }
//   return count;
// };

// ForEach Loop For Arrays Strings

// let arr = [1, 2, 3, 4, 5];

// // Using Simple Function Declaration
// // arr.forEach(function printValues(val) {
// //   console.log(val);
// // });

// // Using Arrow Function (Preferd One in Companies)
// arr.forEach((val, index, arr) => {
//   console.log(val, index, arr); // Index, arr are the optional ones and only accepts in array no in the string.
// });

// let arr = [2, 3, 4, 5, 6];

// First Approach
// arr.forEach((val) => {
//   console.log(num * num);
// });

// Second Approach
// const calSquare = (num) => {
//   console.log(num ** 2);
// };

// arr.forEach(calSquare);

// Map Method In Array (Similar to forEach but it will return new array after doing some operations on the value).

// Print Each Value
// arr.map((val) => {
//   console.log(val);
// })

// let newArr = arr.map((val) => {
//   return val * 2;
// });

// console.log(arr);
// console.log(newArr);

// Filter Method
// let num = [1, 2, 3, 4, 5, 6, 7];

// let newArr = num.filter((val) => {
//   return val % 2 == 0;
// });

// console.log(num);
// console.log(newArr);

//Reduce method (Means return the single value after doing operations on the values.)
// Sum of each element in array
let num = [1, 2, 3, 4];

// const output = num.reduce((prev, curr) => {
//   return prev + curr; // Here after sum, result gets store into the prev variable until the current not fetch the value means after the last value addition with prev variable then that prev value return to the output variable
// });
// console.log(output); //10

//Print max element from the arr.
const output = num.reduce((prev, curr) => {
  return prev > curr ? prev : curr;
});

console.log(output);
