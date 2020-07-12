// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting function assigned to prototype
Person.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName}`;
};

// create instance of Person constructor
const person1 = new Person('John', 'Doe');

console.log(person1.greeting());

// Customer constructor, use 'call' method to include Person objects
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prototype method 'greeting()' as new object
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer() by adding as constructor
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

// Customer greeting replaces Person greeting
Customer.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName} welcome to our company.`;
};

console.log(customer1);

console.log(customer1.greeting());

/*
Customer {firstName: "Tom", lastName: "Smith", phone: "555-555-5555", membership: "Standard"}
firstName: "Tom"
lastName: "Smith"
membership: "Standard"
phone: "555-555-5555"
__proto__: Person
constructor: ƒ Customer(firstName, lastName, phone, membership)
greeting: ƒ ()
__proto__: Object
*/
