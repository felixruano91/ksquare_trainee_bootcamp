// write a function called sum that takes
// to arguments: a and b, both numbers.
// Return the sum of.
function sum(a, b) {
  // @TODO
  return console.log(a + b);
}

sum(1, 2); // 3

// write a function called log data that
// prints into the console the
// variable data
var data = 10;

function logData() {
  // @TODO
  console.log(data);
}

logData();

// write a function called logNumber that
// prints to the console the variable
// num passed as an argument.
// If the variable is not passed (undefined)
// print 0 instead
function logNumber(num = 0) {
  console.log(num);
}

logNumber(10); // 10
logNumber(); // 0

// write a function called logAsArray
// that takes n amount of arguments
// and print an array containing
// all of the elements
function logAsArray(...nums) {
  console.log(nums);
}

logAsArray(1, 2); // [1,2]
logAsArray(1, 2, 3); // [1,2,3]
logAsArray(1, 2, 3, 4, 5); // [1,2,3,4,5]

// write a function called logArray
// that takes an array as argument
// and prints every element of
// the array
function logArray(nums) {
  nums.forEach(nums => {
    console.log(nums)
  });
}

logArray([1, 2, 3, 4, 5]);
// 1
// 2
// 3
// 4
// 5

// Declare a function called Car and three
// strings as its arguments, brand, model and year
// and execute it as a function as constructor
// to generate a car object with the
// properties model and year.
function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

var teslaS = new Car('Tesla', 'Model S', '2019');
console.log(teslaS);

// Let calculateRectanglePerimenter be a function
// returns the perimeter when its applied to
// a rectangle object.
function calculateRectanglePerimeter() {
  return console.log(this.height * 2 + this.width * 2)
}

calculateRectanglePerimeter.apply({
  height: 2,
  width: 2
}); // 8


// Write a function called calculateCirclePerimeter
// and create another function called boundCalculateCirclePerimeter
// that is the result of binding the first function
// to a circle object
function calculateCirclePerimeter() {
  return console.log(this.radius * 2 * Math.PI);
}

var boundCalculateCirclePerimeter = calculateCirclePerimeter.bind({
  radius: 2
});

boundCalculateCirclePerimeter(); // ~ 12.56

// CODE CHALLENGES

// Write a function called reverseString that
// takes a string as an argument and
// returns it reversed
function reverseString(str) {
  return console.log(str.split("").reverse().join(""));
}

reverseString("hola"); // aloh

// Write a function called sortString that
// takes a string as an argument and
// returns it sorted alphabetically
function sortString(str) {
  return console.log(str.split('').sort().join(''));
}

sortString("david"); // 'addiv'

// Write a function called arePalindromes that
// takes two strings as arguments and
// return true if one is the palindrome
// of the other returns returns false otherwise
function arePalindromes(a, b) {
  const palA = a.split('').join('').split('').sort('').join('');
  const palB = b.split('').join('').split('').sort('').join('');
  return palA == palB;
  //a = a.split('').reverse('').join('');
  //return console.log(a === b);
}

arePalindromes("anita lava la tina", "anit al aval atina"); // true
arePalindromes("avid", "diva"); // true
arePalindromes("juan", "jose"); // false
