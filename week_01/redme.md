# Variable in JavaScript:
In JavaScript, a variable is a named container used to store data values that your program can use and manipulate later. ( [W3 School](https://www.w3schools.com/js/js_variables.asp) )

There are three main way to declare variable in mordan JavaScript.

###  `let` :
Used to declare variables that can be reassigned later. It is block-scoped (only accessible within the curly braces `{}` where it's defined).
```java
let score = 10;
score = 20; // This is allowed
```
### `const` :
Used to declare variables that cannot be reassigned after their initial assignment. It is also block-scoped. This is generally the preferred choice when the value won't change.
```java
const pi = 3.14159;
// pi = 3.14; // This would cause an error
```
### `var` :
The older way to declare variables. It is function-scoped (or globally scoped) and allows redeclaration and reassignment. It is generally avoided in modern code in favor of let and const due to potential bugs related to scope.
```java
var name = "Leo";
var name = "Brave"; // Allowed, but can be confusing
```

# Scope
Scope in JavaScript determines where variables and functions are accessible within your code. It acts like a set of nested rules: code inside a "child" scope can see variables from its "parent" scope, but code in the parent cannot see variables inside the child. ( [MDN Docs](https://developer.mozilla.org/en-US/docs/Glossary/Scope) )

Here is a deep dive into the different types and rules of scope in modern JavaScript.

## 1. Types of Scope
## Global Scope:
Variables declared outside any function or block are globally scoped. They are accessible from anywhere in your code.
```java
const globalVar = "I am everywhere";

function checkGlobal() {
  console.log(globalVar); // ✅ Works
}
```
### Function Scope (Legacy var)
Variables declared with var inside a function are function-scoped. They are accessible anywhere within that function, even if declared inside a block like an if statement or for loop.
```java
function testVar() {
  if (true) {
    var insideIf = "I leak out";
  }
  console.log(insideIf); // ✅ "I leak out" (Accessible here!)
}
```
### Block Scope (Modern let & const)
Variables declared with let and const are block-scoped. A "block" is any code wrapped in curly braces {}. These variables cannot be accessed outside their specific block.
```java
function testBlock() {
  if (true) {
    const insideBlock = "I am trapped";
    let insideBlockLet = "Me too";
  }
  // console.log(insideBlock); // ❌ ReferenceError: insideBlock is not defined
  // console.log(insideBlockLet); // ❌ ReferenceError: insideBlockLet is not defined
}
```
## 2. Lexical Scoping (Scope Chaining)
JavaScript uses lexical scoping, meaning the scope is determined by where the function is written in the code, not where it is called. Inner functions have access to variables in their outer (parent) scopes.

This concept is the foundation of Closures.
```java
function outerFunction() {
  const outerVar = "I am from outer";

  function innerFunction() {
    // Inner function can see 'outerVar'
    console.log(outerVar); 
  }

  return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // ✅ Logs: "I am from outer"
```
Even though ```outerFunction``` has finished executing, ```myClosure``` still "remembers" the environment where it was created.
## 3. The Temporal Dead Zone (TDZ)
This is a critical concept for let and const. If you try to access a variable before it is declared in the code, you get a ReferenceError.

Unlike var (which is hoisted and initialized as undefined), let and const are hoisted but not initialized. The period from the start of the block until the declaration is the Temporal Dead Zone.
```java
console.log(hoistedVar); // ✅ undefined (var is hoisted)
var hoistedVar = "I exist";

// console.log(tdzVar); // ❌ ReferenceError: Cannot access 'tdzVar' before initialization
let tdzVar = "I am safe";
```
## 4. Scope Resolution Order (LEGB Rule)
When JavaScript looks for a variable, it checks scopes in this specific order:

Local: Is it in the current function/block?
Enclosing: Is it in a parent function? (Check up the chain)
Global: Is it in the main script?
Built-in: Is it a built-in object like `console` or `Math`?
If it's not found anywhere, it throws a `ReferenceError`.

# Closures
A Closure happens when a function "remembers" and continues to access variables from its Lexical Scope, even after its parent function has finished running.

Think of a closure as a backpack. When a function is born, it packs all the variables it needs from its surrounding environment into its invisible backpack. Wherever you take that function later, it still has its backpack.

```java
function createCounter() {
  let count = 0; // Private variable

  return {
    increment: () => count++,
    decrement: () => count--,
    getCount: () => count
  };
}

const counter = createCounter();
console.log(counter.count); // undefined (cannot access directly)
console.log(counter.getCount()); // 0
```

### Data Privacy 
In JavaScript, we don't have traditional private variables (though # was introduced recently for classes). Closures allow us to create hidden variables that no outside code can change directly.

# Function
In JavaScript, a `function` is a specific block of code designed to perform a particular task. Once you write a function, you can reuse it as many times as you like.

### Function Declaration
This is the traditional way to write a function. The most important feature of a Function Declaration is Hoisting—you can call the function before you actually write it in the code.
```java
// Calling the function before it is declared! (Hoisting at work)
sayHello("Rahul"); 

function sayHello(userName) {
    console.log("Hello, " + userName + "!");
}
```
### Function Expression
Here, we create a function without a name (an anonymous function) and store it inside a variable (const or let). Because it is tied to a variable, it is NOT hoisted. You must define it before you use it.

```java
// calculateArea(5, 10); // ❌ ReferenceError: Cannot access before initialization

const calculateArea = function(length, width) {
    return length * width;
};

// Calling it after declaration
console.log(calculateArea(5, 10)); // ✅ Output: 50
```

Use `const` for Function Expressions so you don't accidentally overwrite your function later.

### Arrow Function
Introduced in ES6 (2015), Arrow Functions provide a shorter and cleaner syntax. They drop the function keyword and use an arrow =>. They are heavily used in modern JavaScript (like React).

```java
// Traditional Function Expression
const addNumbersOld = function(a, b) {
    return a + b;
};

// Modern Arrow Function
const addNumbersNew = (a, b) => {
    return a + b;
};

console.log(addNumbersNew(10, 20)); // Output: 30
```

## Implicit Return
If your arrow function has only one line of code that returns a value, you can remove the curly braces {} and the return keyword. It returns the value automatically!
```java
// One-liner Arrow Function!
const multiply = (a, b) => a * b;

console.log(multiply(5, 4)); // Output: 20
```

### Parameters vs Arguments
People often confuse these two terms.

Parameters: The placeholders you write when creating the function.
Arguments: The actual values you pass when calling the function.
```java
// Here, 'name' and 'age' are PARAMETERS
function introduce(name, age) {
    console.log(`Hi, I am ${name} and I am ${age} years old.`);
}

// Here, "Ayan" and 25 are ARGUMENTS
introduce("Ayan", 25);
```

### The `return` Keyword
A function can do some work and print something to the console, but if you want to use the result of that function later in your code, you MUST `return` it. If a function doesn't have a `return` statement, it returns `undefined` by default.

```java
function getDiscountPrice(price) {
    let discount = price * 0.10; // 10% discount
    let finalPrice = price - discount;
    
    return finalPrice; // We are sending the result back out!
}

// Now we can save the returned value in a variable
const myShirtPrice = getDiscountPrice(1000); 
console.log(myShirtPrice); // Output: 900
```

