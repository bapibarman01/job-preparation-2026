var a = 10;
let b = 20;

if (true) {
    var a = 30;
    let b = 40;
    console.log("Inside:", a, b); // Inside: 30 40
}

console.log("Outside:", a, b); // Outside: 30 20

let age = 25;

function showAge() {
    console.log(age); 
    let age = 30;
}

showAge();  // ReferenceError: Cannot access 'age' before initialization

const user = { name: "Ayan", role: "User" };

user.role = "Admin";
console.log(user.role); // "Admin"

user = { name: "Ayan", role: "SuperAdmin" };  // TypeError: Assignment to constant variable.