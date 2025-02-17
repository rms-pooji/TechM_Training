// Define the student object with properties and a nested address object
let student = {
    id: 123,
    name: "Jack Sparrow",
    department: "CS",
    college: "ABC University",
    email: "jack.sparrow@example.com",
    address: {
        doorNo: "123",
        street: "Main St",
        area: "City Center",
        pincode: "123456"
    }
};

// Function to display all student details
function displayAllDetails() {
    console.log(`ID: ${student.id}`);
    console.log(`Name: ${student.name}`);
    console.log(`Department: ${student.department}`);
    console.log(`College: ${student.college}`);
    console.log(`Email: ${student.email}`);
    console.log(`Address: ${student.address.doorNo}, ${student.address.street}, ${student.address.area}, ${student.address.pincode}`);
}

// Function to display only id, name, and email
function displayIdNameEmail() {
    console.log(`ID: ${student.id}`);
    console.log(`Name: ${student.name}`);
    console.log(`Email: ${student.email}`);
}

// Invoke the functions to display all details and id, name, email
displayAllDetails();
displayIdNameEmail();

// Add a new property to student (address is already added)
student.address.doorNo = "456"; // Updating door number for demonstration

// Deleting the email property from the student object
delete student.email;

// Deleting the displayIdNameEmail function
delete displayIdNameEmail;

// Invoke the function to display details again (after deletion)
console.log("\nAfter deletion of email and the function displayIdNameEmail:");
displayAllDetails();

// Try invoking the deleted function (this will result in an error)
// displayIdNameEmail(); // Uncommenting this will cause an error since the function is deleted
