// SETS - set of unique values, whether primitive or reference

const set1 = new Set();

/// Add values to set
set1.add(100);
set1.add('A String');
set1.add({ name: 'John' });
set1.add(true);
set1.add(100); // will overwrite same value item

// Another way to construct a set
// const set2 = new Set([1, true, 'string']);
// console.log(set2);

console.log(set1);

// Get count
// console.log(set1.size);

// Check for values (stack references, not heap values)
// console.log(set1.has(100));
// console.log(set1.has(50 + 50));
// FALSE - object reference
// console.log(set1.has({ name: 'John' }));
// FALSE pointing to a memory location
// console.log({ name: 'John' } === { name: 'John' });

// Delete from set
// set1.delete(100);
// console.log(set1);

// ITERATING THROUGH SETS

// For..of
// for (let item of set1) {
//   console.log(item);
// }

// ForEach loop
// set1.forEach((value) => {
//   console.log(value);
// });

// CONVERT SET TO ARRAY
const setArr = Array.from(set1);
console.log(setArr);
