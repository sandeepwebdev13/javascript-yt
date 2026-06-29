// datatypes.js

console.log("===== JavaScript Data Types =====\n");

// 1. Number
let age = 25;
console.log("Number:");
console.log(age);
console.log(typeof age);
console.log("------------------------");

// 2. String
let name = "Github";
console.log("String:");
console.log(name);
console.log(typeof name);
console.log("------------------------");

// 3. Boolean
let isLoggedIn = true;
console.log("Boolean:");
console.log(isLoggedIn);
console.log(typeof isLoggedIn);
console.log("------------------------");

// 4. Undefined
let address;
console.log("Undefined:");
console.log(address);
console.log(typeof address);
console.log("------------------------");

// 5. Null
let salary = null;
console.log("Null:");
console.log(salary);
console.log(typeof salary); // object (JavaScript bug)
console.log("------------------------");

// 6. BigInt
let bigNumber = 1234567890123456789012345678901234567890n;
console.log("BigInt:");
console.log(bigNumber);
console.log(typeof bigNumber);
console.log("------------------------");

// 7. Symbol
let id = Symbol("123");
console.log("Symbol:");
console.log(id);
console.log(typeof id);
console.log("------------------------");

// 8. Object
let student = {
    id: 13,
    name: "Github",
    standard: "5th"
};

console.log("Object:");
console.log(student);
console.log(typeof student);
console.log("------------------------");

// Array (Object)
let fruits = ["Apple", "Banana", "Mango"];
console.log("Array:");
console.log(fruits);
console.log(typeof fruits);
console.log("------------------------");

// Function
function greet() {
    return "Hello World";
}

console.log("Function:");
console.log(greet());
console.log(typeof greet);
console.log("------------------------");