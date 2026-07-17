## Variable in JavaScript:
In JavaScript, a variable is a named container used to store data values that your program can use and manipulate later. ( [W3 School](https://www.w3schools.com/js/js_variables.asp) )

There are three main way to declare variable in mordan JavaScript.

### 1. ```let``` :
Used to declare variables that can be reassigned later. It is block-scoped (only accessible within the curly braces {} where it's defined).
```java
let score = 10;
score = 20; // This is allowed
```
### 2. ```const``` :
Used to declare variables that cannot be reassigned after their initial assignment. It is also block-scoped. This is generally the preferred choice when the value won't change.
```java
const pi = 3.14159;
// pi = 3.14; // This would cause an error
```
### 3.```var``` :
The older way to declare variables. It is function-scoped (or globally scoped) and allows redeclaration and reassignment. It is generally avoided in modern code in favor of let and const due to potential bugs related to scope.
```java
var name = "Leo";
var name = "Brave"; // Allowed, but can be confusing
```