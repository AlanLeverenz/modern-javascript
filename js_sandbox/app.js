// Create some arrays

const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 1 }, new Date()];

let val;

// Get array length
val = numbers.length;

// check if is array
val = Array.isArray(numbers);

// get single value
val = numbers[3];
val = numbers[0];

// Insert into array
numbers[2] = 100;

// Find index of value
val = numbers.indexOf(36);

// mutating arrays
// add on to end
// numbers.push(250);
// // add on to front
// numbers.unshift(120);
// // take off from end
// numbers.pop();
// // take off from front
// numbers.shift();
// // splice values (where start and end are)
// numbers.splice(1, 3);
// // reverse the array
// numbers.reverse();
// concatenate array;
// val = numbers.concat(numbers2);
// // sort
// val = fruit.sort();
// // sort, use compare function
// val = numbers.sort(function (x, y) {
//   return x - y;
// });
// // reverse sort numbers
// val = numbers.sort(function (x, y) {
//   return y - x;
// });

// Find
function under50(num) {
  return num < 50;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);
