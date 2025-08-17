// Callbacks

// Function to simulate an asynchronous operation
// This is the way of handling async code.
// A function is passed into another function as an argument, to be executed when the async code finishes.




console.log('start');

setTimeout(function () {
    console.log('This is a callback function executed after 2 seconds');
}, 2000);

console.log('end');



// Due to callback hell, we now have newer methods

// 1. Promises
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//  Promises can either be in theses 3 states:
// 1. Pending: Initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully.
// 3. Rejected: The operation failed.


// .then()  and .catch()
// .then() is used to handle the fulfilled state. What to do when the promise is resolved(fulfilled)
// .catch() is used to handle the rejected state(if an error occurs)

// Live Demo:

const myPromise = new Promise((resolve, reject) => {

    const success = false; // Simulating success or failure

    if (success) {
        resolve("Operation was successful!");
    } else {
        reject("Operation failed.");
    }

});


myPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });




// The Fetch API: Getting Data From The Web

// What is an API? 
// An API (Application Programming Interface) is a set of rules and protocols for building and interacting with software applications.

// The Fetch API is a modern way to make network requests in JavaScript, allowing you to retrieve resources from a server.

// We'll be fetching JSON data from a public API endpoint.
// JSON (JavaScript Object Notation) is a lightweight data interchange format that's easy for humans to read and write, and easy for machines to parse and generate.

// JSON Format data:
// {
//   "id": 1,
//   "username": "johndoe",
//   "email": "johndoe@example.com",
//   "firstName": "John",
//   "lastName": "Doe",
//   "createdAt": "2025-08-16T10:00:00Z"
// }   


//  Basic Fetch usage
// To get all 
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json()) // Convert the response to JSON
//     .then(data => {
//         console.log('This is your successful response: ', data);
//         //  for us to show it for each in html
//         data.forEach(user => {
//             console.log(user);
//             const userCard = document.querySelector('.user-card');
//             userCard.querySelector('h2').textContent = user.name;
//             userCard.querySelector('.username').textContent = user.username;
//             userCard.querySelector('.info strong').textContent = user.email;
//             userCard.querySelector('.info a').href = `mailto:${user.email}`;
//             userCard.querySelector('.info:nth-of-type(2) strong').textContent = user.phone;
//             userCard.querySelector('.info:nth-of-type(2) a').href = `tel:${user.phone}`;
//             userCard.querySelector('.info:nth-of-type(3) strong').textContent = user.website;
//             userCard.querySelector('.info:nth-of-type(3) a').href = `http://${user.website}`;
//             userCard.querySelector('.address').innerHTML = `${user.address.street}, ${user.address.suite}<br>${user.address.city}, ${user.address.zipcode}`;
//             userCard.querySelector('.company strong').textContent = user.company.name;
//             userCard.querySelector('.company em').textContent = user.company.catchPhrase;
//             userCard.querySelector('.company span').textContent = user.company.bs;
//         });
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });



fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json()) // Convert the response to JSON
    .then(data => {
        console.log('This is your successful response: ', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


// Creating a response to accommodate all data
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        console.log('This is your successful response: ', data);

        // Crafting our HTML for many data response
        const userList = document.querySelector('.user-list');
        data.forEach(user => {
            const userCard = document.createElement('div');
            userCard.classList.add('user-card');
            userCard.innerHTML = `
                    <h2>${user.name}</h2>
                    <div class="username">${user.username}</div>
                    <div class="info">
                        <strong>Email:</strong> <a href="mailto:${user.email}">${user.email}</a>
                    </div>
                    <div class="info">
                        <strong>Phone:</strong> <a href="tel:${user.phone}">${user.phone}</a>
                    </div>
                    <div class="info">
                        <strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a>
                    </div>
                    <div class="section-title">Address</div>
                    <div class="address">
                        ${user.address.street}, ${user.address.suite}<br>
                        ${user.address.city}, ${user.address.zipcode}
                    </div>
                    <div class="section-title">Company</div>
                    <div class="company">
                        <strong>${user.company.name}</strong><br />
                        <em>${user.company.catchPhrase}</em><br />
                        <span>${user.company.bs}</span>
                    </div>
                `;
            userList.appendChild(userCard);
        });

    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
