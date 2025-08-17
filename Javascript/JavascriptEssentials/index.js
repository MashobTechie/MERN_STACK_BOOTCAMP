console.log('Hello World!');

// Variable Declaration
// 1. let: used for variables whose value might change in the future
let x = 20;


// 2. const: used for variables whose value should not change
// It is a constant variable and must be initialized at the time of declaration
const y = 25;   

//  3. var:It's an older way to declare variables. 
// It has function scope and can be re-declared and updated.
// It is not recommended to use var in modern JavaScript.
var z = 30;

var z = 35; // Re-declaring 'z' is allowed with 'var'


// Operators
// Arithmetic: +, - , *, /, % (modulus)
let sum = x + y; // Addition
console.log(sum )
let difference = x - y; // Subtraction
console.log(difference)
let product = x * y; // Multiplication
console.log(product)
let quotient = x / y; // Division
console.log(quotient)
let remainder = x % y; // Modulus
console.log(remainder)  

// Assignment: =, +=, -=, *=, /=, %=
// = is used to assign a value to a variable
//  += is used to add a value to a variable and assign the result back to that variable
x = x + 5; // instead of this we can use
x += 5; // This is equivalent to x = x + 5

// same thing applies to -=, *=, /=, %=
// y -= 5; // This is equivalent to y = y - 5
// z *= 2; // This is equivalent to z = z * 2

// Logical: && (AND), || (OR), ! (NOT)
// Comparison: ==, ===, !=, !==, >, <, >=, <=
// == is used for equality comparison (checks value only)
// === is used for strict equality comparison (checks value and type)
// != is used for inequality comparison (checks value only)
// !== is used for strict inequality comparison (checks value and type)
// >, <, >=, <= are used for greater than, less than, greater than or equal to, less than or equal to comparisons respectively



// Day 2
// Differences between == and ===

//  Control Flow
// Conditional Statements: if, else if, else

let openHour= 9
let closedHour = 17

// To check if the store is open
let currentHour = 20;

// To check if the store is open
//  if (condition){
//      code to execute if condition is true
// }

if (currentHour >= openHour && currentHour < closedHour) {
    console.log("The store is open.")
} else {
    console.log("The store is closed.")
}


//  The reason we use && is because we want to check if the current hour is both greater than or equal to the open hour and less than the closed hour.
//  The reaon we used else is because we have two conditions to check: if the store is open or closed.


//  if-else statements can be nested to check multiple conditions
// Scenario: Calculating student grade

let studentScore = 25;
let grade; // Variable to store the grade

if (studentScore >= 70) {
    grade = 'A'; // Assign 'A' if score is 70 or above
    console.log("Grade:", grade);
}
else if (studentScore >= 60) {
    grade = 'B'; // Assign 'B' if score is 60 or above
    console.log("Grade:", grade);
}
else if (studentScore >= 50) {
    grade = 'C'; // Assign 'C' if score is below 60
    console.log("Grade:", grade);
}
else if (studentScore >= 40) {
    grade = 'D'; // Assign 'D' if score is below 50
    console.log("Grade:", grade);
}
else {
    grade = 'F'; // Assign 'F' if score is below 40
    console.log("Grade:", grade);
}


//  Switch Statement
//  A switch statement is used to perform different actions based on different conditions.

//Format:
// switch (expression) {
//     case value1: 
//         // code to execute if expression === value1
//         break;       


let day = 6; // Example day of the week (1-7)


switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

//  Data Types
//  Web development is basically all about collecting data and rendering it to the user
//  JavaScript has several data types, including:

// 1. String: Represents a sequence of characters, enclosed in single or double quotes
let username = "John Doe"; // String
console.log(username);
// To check the data type of a variable, we can use the typeof operator
console.log(typeof username); // Output: string

// 2. Number: Represents numeric values, both integers and floating-point numbers
let age = 30; // Number
console.log(age);
console.log(typeof age); // Output: number

// 3. Boolean: Represents a logical value, either true or false. Your boolean variable should be in form of action words
let isLoggedIn = false; // Boolean
if (isLoggedIn) {
    console.log("User is logged in");
}else{
    console.log("User is not logged in");
}

// 4. Null: Represents an intentional absence of any value. It is a special value that indicates "no value" or "empty".
let totalAbsent = null; // Null

//5. Undefined: Represents a variable that has been declared but not assigned a value. It is the default value of uninitialized variables.
let userScore; // Undefined
console.log(userScore); // Output: undefined

// 6. Object: Represents a collection of key-value pairs, where keys are strings and values can be of any data type.

// Take car as an example
let car = {
    brand : 'Toyota', // value is a string
    year: 2010 // value is a number
}
console.log(car);


// 7. Array: Represents an ordered collection of values, which can be of any data type. Arrays are a special type of object in JavaScript.

let carBrand = [ 'Toyota', 'Honda', 'Ford', 'BMW' ]; // Array of strings
console.log(carBrand);

let studentGrades = {
    maths: 60,
    english : 40
}


