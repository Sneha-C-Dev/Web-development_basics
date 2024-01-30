# JavaScript Basics

## Array Declaration and Initialization:-
```javascript
var myArray = []; // Empty array
var numbers = [1, 2, 3, 4]; // Array with initial values
var fruits = new Array("apple", "banana", "orange"); // Using the Array constructor
var grid = [[1,2,3],[4,5,6]];
const mixedArray = ["apple", 3.14, true, {}, [1, 2, 3]]

numbers[1] // Accesses the second element 
grid[0][1];
```

## Object Declaration and Initialization:-
```javascript
const person = { name: "Alice", age: 30 };
const myObject = new Object();

Accessing Properties:
person.name
person["age"]

Adding/Modifying Properties:
person.city = "New York";

Removing Properties:
delete person.age;
```
### DOM Finding and Changing HTML Elements:-
```javascript
const inputText = document.getElementById("userInput").value;
const outputParagraph = document.getElementById("output");
outputParagraph.innerHtml = "You entered: " + inputText;
```

### ES6 Updates:-

#### _Arrow Functions:_
```javascript
const sum = (a, b) => a + b; 
```
#### _Classes:_
```javascript
class Person { 
constructor(name) { this.name = name; } 
}
```
#### _Let and Const:_
```javascript
 for (let i = 0; i < 3; i++) {}
	const PI = 3.14159;
```
#### _Modules:_
```javascript
import greet from "./greet.js";
```
#### _Promises:_
```javascript
return new Promise((resolve, reject) => {
        resolve("File downloaded successfully!");
        reject("Download failed!");
  });
```
#### _New Array Methods:_
```javascript
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((number) => number * number);
```

# JavaScrit Form Handling

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Form</title>
    </head>
    <body>
        <form onsubmit="return validate()" onreset="resetForm()" action="msg.html">
            <h1>Login Page</h1>
            <label>Userame:</label>
            <input type="text" id="uname" name="uname">
            <label id ="luser" style = "color: red; visibility: hidden;">Invalid</label><br><br> 
            <label>Password:</label>
            <input type="password" id="pwd" name="pwd">
            <label id ="lpwd" style = "color: red; visibility: hidden;">Invalid Password</label><br><br>
            <input type="submit" value="Submit">
            <input type="reset" value="Reset">
        </form>
        <script>
            function validate()
            {
                var username = document.getElementById("uname");
                var password = document.getElementById("pwd");
               
                var user = username.value.trim();
                var pass = password.value.trim();
                if (user == ""){
                    //alert("Username cannot be blank");
                    uname.style.border = "solid 3px red"; 
                    document.getElementById("luser").style.visibility = "visible";
                    return false;
                }
                else if (pass == ""){
                    //alert("Password cannot be blank");
                    pwd.style.border = "solid 3px red";
                    document.getElementById("lpwd").style.visibility = "visible";
                    return false;
                }
                else if (pass.length < 5){
                    //alert("Password too short");
                    pwd.style.border = "solid 3px red";
                    document.getElementById("lpwd").style.visibility = "visible";
                    return false;
                }
                else {
                    return true;
                }
               
            }
            function resetForm() // reset the form to initial state 
            {
                uname.style.border = ""; 
                document.getElementById("luser").style.visibility = "hidden"; 
                pwd.style.border = ""; 
                document.getElementById("lpwd").style.visibility = "hidden"; 
            }
        </script>
    </body>
</html>
```
