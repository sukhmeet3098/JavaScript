let marks = [97, 82, 75, 64, 51];
console.log(marks);
console.log(marks[1]);
marks[1] = 77;
console.log(marks);
console.log(marks.length);

let heroes = ["ironman", "thor", "spiderman", "antman"];
console.log(heroes);

// for loop
for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

// for of loop
for (let val of heroes) {
  console.log(val);
}

// Practice 1
let students = [85, 97, 44, 37, 76, 60];
let sum = 0;

for (let val of students) {
  sum += val;
}

let avg = sum / students.length;
console.log(`Average marks of the class = ${avg}.`);

// Practice 2
let items = [250, 645, 300, 900, 50];

// Using for of loop
// let i = 0;
// for (let val of items) {
//   console.log(`Price of the item at ${i}: ${val}`);
//   let offer = val / 10;
//   items[i] = items[i] - offer;
//   console.log(`Price After Offer: ${items[i]}`);
//   i++;
// }

// Using for loop
for (let i = 0; i < items.length; i++) {
  let offer = items[i] / 10;
  items[i] = items[i] - offer;
}

console.log(items);

// Arrays methods (Some methods change in the existing array but some methods return the new array)

let foodItems = ["tomatoes", "potatoes", "apple", "banana"];

foodItems.push("chips", "burger", "panner");
console.log(foodItems);

let deletedVal = foodItems.pop();
console.log(`Deleted ${deletedVal}`);

let stringResult = foodItems.toString();
consolr.log(stringResult);

let dc_heroes = ["superman", "batman"];
let marvel_heroes = ["thor", "spiderman", "ironman"];
let indian_heroes = ["krrish", "shaktiman"];

let heros = marvel_heroes.concat(dc_heroes, indian_heroes);
console.log(heroes);

heroes.unshift("antman"); // Add In the First
console.log(heroes);

let val = heroes.shift(); // Delete item from start
console.log(`Deleted ${val}`);

marvel_heroes = ["thor", "spiderman", "ironman", "antman", "Dr. Strange"];
console.log(marvel_heroes);

console.log(marvel_heroes.slice(1, 3));

let arr = [1, 2, 3, 4, 5, 6, 7];

//arr.splice(2, 2, 101, 102);

// Add Element
// arr.splice(2, 0, 101);

// Delete Element
// arr.splice(2, 1);

//Replace Element
// arr.splice(2, 1, 101);

// If we pass only index in splice method then it will return array frm the given index to till end. And also change the original array.
// arr.splice(4);

// Practice 3

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

let removeCompany = companies.shift();
console.log(`Removed ${removeCompany}`);

companies.splice(1, 1, "Ola");
console.log(companies);

companies.push("Amazon");
console.log(companies);
