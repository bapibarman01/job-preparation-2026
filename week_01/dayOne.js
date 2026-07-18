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
    //console.log(age); 
    let age = 30;
}

//  showAge();  // ReferenceError: Cannot access 'age' before initialization

const user = { name: "Ayan", role: "User" };

user.role = "Admin";
console.log(user.role); // "Admin"

//  user = { name: "Ayan", role: "SuperAdmin" };  // TypeError: Assignment to constant variable.

//  Scope

let globalVariable = 'I am a global variable';

function outerFunction() {
    let outerVariable = 'I am inside outer';

    function innerFunction() {
        let innerVariable = 'I am inside inner';

        console.log(globalVariable)
        console.log(outerVariable)
        console.log(innerVariable)
    }
    innerFunction();
    // console.log(innerVar); // ❌ Error! outerFunction cannot see inside innerFunction
}

outerFunction();

//  Closure

function makeGreeting(greetingWord) {
    return (name) => {
        console.log(`${greetingWord}, ${name} !`);
    }
}

const hii = makeGreeting('Hii');
const hello = makeGreeting('Hello');

hii('Rahul');
hello('Arjun');


function createBankTransfer() {
    let balance = 1000; //  privet / hidden

    return {
        deposit: function(amount) {
            balance += amount;
            console.log(`Deposited ${amount}. New balance: ${balance}`);
        },
        withdraw: function(amount) {
            if(anount <= balance || amount > 0) {
                amount -= balance;
                console.log(`Withdraw ${amount}. New balance: ${balance}`);
            } else {
                console.log('Insufficient funds!');
            }
        },
        checkBalance: function() {
            console.log(`Current Balance: ${balance}`);
        }
    }
}

const myAccount = createBankTransfer();

myAccount.deposit(200);
myAccount.checkBalance();

console.log(myAccount.balance); //  undefined (Secure!)



function registerUser({name, email, role = 'User', isActive = true}) {
    if(!name || !email) {
        console.log('Name and email must be required');
        return;
    }
    const newUser = {
        name,
        email,
        role: role,
        starus: isActive? 'Active' : 'Inactive',
        createdAt: new Date().toLocaleString()
    }
    console.log('User successfully registered', newUser);
}

registerUser({
    email: 'abc@gmail.com',
    name: 'Rahul',
    role: 'Admin',
    isActive: false
})



// Helper Function
const applyDiscount = (price, discountPercent = 0) => {
    return price - (price * (discountPercent / 100));
}
// Helper Function
const applyTax = (price, taxPercent) => {
    return price + (price * (taxPercent / 100));
}

//  MainFunction
function calculateFinalBill(cardTotal, discountAmount = 0) {
    const afterDiscount = applyDiscount(cardTotal, discountAmount);
    const finalPrice = applyTax(afterDiscount, 18);

    return finalPrice;
}

const myBill = calculateFinalBill(1000, 10)
console.log("Final Amount to Pay: ₹" + myBill);