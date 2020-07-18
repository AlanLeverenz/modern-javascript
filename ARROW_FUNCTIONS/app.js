// const sayHello = function () {
//   console.log('Hello');
// };

// const sayHello = () => {
//   console.log('Hello');
// };

// One line function does not need braces
// const sayHello = () => console.log('Hello');

// One line returns
// const sayHello = () => 'Hello'

// Same as above
// const sayHello = function () {
//   return 'Hello';
// };

// const sayHello = () => ({
//   msg: 'Hello',
// });

// Single parameter does not need parentheses
// const sayHello = (name) => console.log(`Hello ${name}`);
// sayHello('Brad');

// Multiple parameters need parentheses
// const sayHello = (firstName, lastName) =>
//   console.log(`Hello ${firstName} ${lastName}`);
// sayHello('Brad', 'Traversy');

const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function (name) {
//   return name.length;
// });

// Shorter
// const nameLengths = users.map((name) => {
//     return name.length;
//   });

// Shortest
const nameLengths = users.map((name) => name.length);

console.log(nameLengths);
