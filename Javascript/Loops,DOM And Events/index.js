// Loops: Automating Repetitive Tasks

//  What are they? 
//  A way to execute same block of code multiple times without rewriting the code.

// Why are they powerful?
// They save us from writig repettitve code and are perfect for working with arrays or collections of data.

// The most common types of loops in JavaScript are:
// 1. for loop: The most commonly used loop, which iterates a specific number of times.

//  Breaking down the for loop syntax:
// 1. Initialization: let i = 0 (starting point); // This sets the starting point of the loop.
//2. Condition:   (when to stop); i < 5 or 1 , array.length (loop will run as long as this condition is true); // This checks if the loop should continue.
//3. Increment/Decrement:  i++ (how to advance); // This updates the loop variable after each iteration.

//  Rewire the for loop example to iterate through an array of numbers and print each number to the console.
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]); // This will print each number in the array
}
// 2. The for...of loop: a simpler, more readable alternative specifically for arrays. 

for (const number of numbers) {
    console.log(number); // This will print each number in the array
}

// 3. For Each Loop 
const array = [1, 2, 3, 4, 5];
// The forEach method executes a provided function once for each array element.
// It is a method available on arrays and is used to iterate over each element in the array
array.forEach(element => {
    console.log(element); // This will print each element in the array
});

// Differences between traditional loop and for each: 
// 1. Control: 
// You cannot break/stop a foreach loop.It wil always run once for every elemnt 
// while you have full control in traditional loop. 

// 2. Async/Await: 
// You cannot use async/await inside a forEach loop.
// while
// you can use async/await in traditional for loop. 




// DOM [Document Object Model]
//  THe bridge between HTML and JS. 

// Finding Element on the page(DOM Selection)
// We have 3 ways of selecting element from JS. 
// 1. Use of ID: document.getEelementById('myID')
// 
// 2. Query Selector:
// a. Selecting the first element that matches a CSS selector (tag, class or ID)
// b. Query selector all : sleects all elemst that  matchesa css selector


document.getElementById('btn1') // GetelemntbyID

// Query selector By tag name:
document.querySelector('button')

// Query Selector By Class
document.querySelector('.btn2')

// Query Selector BY ID
document.querySelector('#btn1')

// Query Selector all
document.querySelectorAll('btn1');




// Modifying Elements
// 1. Changing Text Content: 




// 2. Use of innerHTML:
// Gets or sets the HTML content of an element, allowing you to insert HTML tags and content.
document.querySelector('.btn2').innerHTML = '<strong>Click Me!</strong>'; // This will change the button text to bold



// Form Handling

const form = document.querySelector('form');
// Without preventing default
// form.addEventListener('submit', (event) => {

//     // Form Details
//     const username = document.getElementById('username').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     console.log('Username:', username);
//     console.log('Email:', email);
//     console.log('Password:', password);
// } );


// With preventing event default
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Form Details
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);


    // Save to localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);


    //  To retrieve details for logging in
    const storedUsername = localStorage.getItem('username');
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');


    console.log('Stored Username:', storedUsername);
    console.log('Stored Email:', storedEmail);
    console.log('Stored Password:', storedPassword);

    localStorage.getItem('username');
    localStorage.getItem('email');
    localStorage.getItem('password');

});
