// ====================================================================
// 1. Set Up Your Data
// ====================================================================

// Create a variable to hold our contact list array.
let contactList = [
  // Each item in the array is a contact object with a name and number.
  {
    name: "John Doe",
    number: "555-1234"
  },
  {
    name: "Jane Smith",
    number: "555-5678"
  },
  {
    name: "Peter Jones",
    number: "555-9012"
  }
];


// ====================================================================
// 2. Write Your Functions
// ====================================================================

// Function 1: Adds a new contact to the list.
function addContact(contactName, contactNumber) {
  // Create a new contact object using the provided parameters.
  const newContact = {
    name: contactName,
    number: contactNumber
  };
  
  // Use the push() method to add the new contact to the end of the array.
  contactList.push(newContact);
  
  // Log the updated list to show the new contact.
  console.log("New contact added. The updated list is:");
  console.log(contactList);
}

// Function 2: Displays all contacts in the list using individual console.log() calls.
function displayContacts() {
  console.log("Displaying all contacts:");
  // Access and log each contact individually by its index.
  console.log("Name: " + contactList[0].name + ", Number: " + contactList[0].number);
  console.log("Name: " + contactList[1].name + ", Number: " + contactList[1].number);
  console.log("Name: " + contactList[2].name + ", Number: " + contactList[2].number);
  // You would need to add more of these if the list grows, which is why loops are useful later.
}

// Function 3: Searches for a contact by name.
function searchContact(searchName) {
  console.log("Searching for: " + searchName);
  
  // Use a series of if/else if/else statements to check each contact.
  if (contactList[0].name === searchName) {
    console.log("Contact Found! Name: " + contactList[0].name + ", Number: " + contactList[0].number);
  } else if (contactList[1].name === searchName) {
    console.log("Contact Found! Name: " + contactList[1].name + ", Number: " + contactList[1].number);
  } else if (contactList[2].name === searchName) {
    console.log("Contact Found! Name: " + contactList[2].name + ", Number: " + contactList[2].number);
  } else {
    console.log("Contact not found.");
  }
}

// Function 4: Deletes a contact from the list based on its index.
function deleteContact(index) {
  console.log("Deleting contact at index: " + index);
  
  // Use the splice() method to remove 1 item at the specified index.
  contactList.splice(index, 1);
  
  // Log the updated list to show the contact has been removed.
  console.log("Contact deleted. The updated list is:");
  console.log(contactList);
}


// ====================================================================
// 3. Test Your Functions
// ====================================================================

console.log("--- Initial Contact List ---");
console.log(contactList);

console.log("\n--- Testing addContact() ---");
addContact("Sam Wilson", "555-3333");

console.log("\n--- Testing displayContacts() ---");
displayContacts();

console.log("\n--- Testing searchContact() with an existing name ---");
searchContact("Jane Smith");

console.log("\n--- Testing searchContact() with a name that does not exist ---");
searchContact("Bruce Wayne");

console.log("\n--- Testing deleteContact() ---");
deleteContact(1); // Deletes "Jane Smith" from the list.
