// Why is if/else statement important?
// How do we check for strict equality between two variables in an if statement? 

let num1 = 3;
let num2 = '3';

if (num1 === num2) {
    console.log(num1 + ' is a ' + typeof num1 + ' while ' + num2 + ' is a ' + typeof num2 + ' hence, they are strictly equal.');
} else {
    console.log(num1 + ' is a ' + typeof num1 + ' while ' + num2 + ' is a ' + typeof num2 + ' hence, they are not equal.');
}


// FUNCTIONS

//  Understand what functions are and how to write reusable blocks of code.
// Use Case:Comparing the equality of two variables
function compareVariables(var1, var2) {
    if (var1 === var2) {
        console.log(var1 + ' is strictly equal to ' + var2);
    } else {
        console.log(var1 + ' is not strictly equal to ' + var2);
    }
}

compareVariables(5, '5'); // Example usage of the function
compareVariables(10, 10); // Another example usage of the function
compareVariables('hello', 'hello'); // Another example usage of the function

// Functions are the builidng blocks of our app. 
// What are functions?
// Function is a block of code that performs a specific task.


// Why use them?
// Functions allow us to write reusable code, making our programs more organized and efficient.


//  Function Declaration:
// There's two ways to declare a function in JavaScript: function declaration and function expression.


// 1.Standard Function Declaration

function greet(params) {
    console.log("Hello, World!");
}

// Invoking the function
greet(); // This will call the function and execute its code

// Standard declaration with parameters
//  Why use parameters?
//  Parameters allow us to pass values into the function, making it more flexible and reusable.

// We have a function to add two numbers

//  Noramlly, we would write it like this:
let a = 5;
let b = 10;
function addNumbers() {
    let sum = a + b;
    console.log("The sum is: " + sum);
}
// Calling the function
addNumbers(); // This will output: The sum is: 15
// Now, I don't have the flexibility to change the values of a and b without modifying the function itself and the variables.

// The best practice for this case is to use parameters in the function declaration:
function addNumbersWithParams(number1, number2) {
    let sum = number1 + number2;
    console.log("The sum is: " + sum);
}
// Calling the function with parameters by passing an arguments
addNumbersWithParams(6, 10);
addNumbersWithParams(5, 15);

// Returning Values from Functions
// Functions can also return values using the return statement.
function addNumbers(number1, number2) {
    return number1 + number2; // This will return the sum of the two numbers
}
// noramlly, we would write it like this:
addNumbers(5, 10); // This will output: 15

// Using the returned value,
let result = addNumbers(5, 10);
console.log("The result is: " + result); // This will output: The result is

// Next usage of the function
let anotherResult = addNumbers(20, 30);
console.log("The result is: " + anotherResult); // This will output: The result is: 50


// 2. Different ways to declare a function
// Normal Functions Declaration
function multiplyNumbers(num1, num2) {
    return num1 * num2; // This will return the product of the two numbers
}
// Calling the function
let product = multiplyNumbers(5, 10);

console.log("The product is: " + product); // This will output: The product is: 50

// Function Expression: Instead of using the function keyword, we assign the function to a variable with the use of the const or let keyword.
const multiplyNumber = function (num1, num2) {
    return num1 * num2; // This will return the product of the two numbers
}

// Calling the function
let ourProduct = multiplyNumbers(5, 10);

console.log("The product is: " + ourProduct); // This will output: The product is: 50

// Arrow Function: A more concise way to write functions using the arrow syntax.
const divideNumbers = (num1, num2) => {
    // pass your code here
}



// ARRAYS
// Learn how to create and manipulate arrays in JavaScript.
// Use Case: Storing a list of items


//  What are they? 
// Array is a single variable that can hold multiple values, stored in a specific order.
// They are used to store multiple values in a single variable, making it easier to manage collections of data.


// Collection of car :
let cars =
    [
        'Toyota',
        'Honda',
        'Ford',
        'Chevrolet',
        'Nissan'
    ]

let fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];

// Accessing Elements in an Array
// Arrays are zero-indexed, meaning the first element is at index 0.
//  For you to access the first element, you would use index 0.
 console.log(fruits[0]); // Output: Apple

console.log(cars[2]); // Output: Ford



//  Properties and Methods of Arrays
// Arrays have properties and methods that allow you to manipulate them easily.
//  Writing a metod or a property is gotten by using dot notation (.) after the array variable name.

// 1. Length Property
// The length property returns the number of elements in an array.
console.log("Number of cars: " + cars.length); // Output: 5
console.log("Number of fruits: " + fruits.length); // Output: 5


// 2. Push Method
// The push method adds a new element to the end of an array.
fruits.push("Pineapple");
console.log("Updated fruits: " + fruits);
console.log('New number of fruits: ' + fruits.length    )

// 3. Pop Method
// The pop method removes the last element from an array.
fruits.pop();
console.log("Updated fruits after pop: " + fruits);

// 4. Shift Method
// The shift method removes the first element from an array.
fruits.shift();
console.log("Updated fruits after shift: " + fruits);
console.log('Updated number of fruits after shift:' + fruits.length)

// 5. Unshift Method
// The unshift method adds a new element to the beginning of an array.
fruits.unshift("Strawberry");
console.log("Updated fruits after unshift: " + fruits);

// 6. Splice Method
// The splice method can add or remove elements from an array at a specific index.
//  The index is written in the form of [start, deleteCount, item1, item2, ...]
fruits.splice(4, 3, "Blueberry" );
console.log("Updated fruits after splice: " + fruits);

// 7. Slice Method
// The slice method returns a shallow copy of a portion of an array.
// It is written in the form of [start, end ]
let citrus = fruits.slice(1, 4);
console.log("Citrus fruits: " + citrus);


// 8. IndexOf Method
// The indexOf method returns the index of the first occurrence of a specified element in an array

//  It is written in the form nameOFArray.indexOf('whatyou'reloookingfor')
console.log("Index of 'Banana': " + fruits.indexOf("Banana")); // Output: 1