# HTML

HTML, which stands for HyperText Markup Language, is the foundational language of the World Wide Web. Its primary purpose is to define the structure and presentation of documents on the internet, allowing web browsers to interpret and display information to users. HTML employs a tag-based system where elements are enclosed within tags to define their purpose and placement on a webpage. Let's take a dive into them.

### _Structure of html document:_
```html
<!DOCTYPE HTML>
<html>
 <head>
  <title> ... </title>
 </head>
 <body>
  ...
 </body>
</html>
```
* The <!DOCTYPE html> declaration defines that this document is an HTML5 document
* The <html> element is the root element of an HTML page
* The <head> element contains meta information about the HTML page
* The <title> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)
* The <body> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.

## HTML Basic tags

### _Heading_
```html
<h1> Hello world! </h1>
<h2> Hello world! </h2>
<h3> Hello world! </h3>
<h6> Hello world! </h6>
```
### _Paragraph_
```html
<body>
  <p> ... </p>
</body>
```
### _Break_
```html
<p>line with a <br> break. </p>
```
### _HTML links_
```html
<a href="https://www.google.com/">Click here</a>
```
### _HTML Images_
```html
<img src="https://www.tarento.com/images/common/logo.png" alt="Tarento logo">
```
You can also add attributes like height and width.

### _HTML Table_
```html
<table border = 1>
 <tr>
  <th> Sl.no </th>
  <th> Name </th>
  <th> Age </th>
 </tr>
 <tr>
  <td> 1 </td>
  <td> Abi </td>
  <td> 20 </td>
 </tr>
</table>
```
### _HTML List_

#### * Ordered List
```html
<ol>
 <li> Orange </li> 
 <li> Mango </li>
 <li> Apple </li>
</ol>
```
#### * Unordered List
```html
<ul>
 <li> Apple </li>
 <li> Orange </li>
 <li> Mango </li>
</ul>
```
#### * Nested List
```html
<ul>
 <li> Apple </li>
 <li> <ol> Orange </ol>
      <ol> Lemon </ol>
 </li>
 <li> Mango </li>
</ul>
```
### _Form_
```html
   <form>
     <h1>Login Page</h1>
            <label>First Name:</label>
            <input type="text" id="fname" name="fname" placeholder="Eg:John"><br><br>
            <label>Last Name:</label>
            <input type="text" id="lname" name="lname"><br><br>        
            <label>Gender:</label><br>

            <input type="radio" name="gender" value="male" >
            <label>Male</label><br>
            <input type="radio" name="gender" value="female">
            <label>Female</label><br>
            <input type="radio" name="gender" value="others">
            <label>Others</label><br><br>

            <label>Colours you prefer:</label><br>
            <input type="checkbox" name="color" value="red" >
            <label>Red</label><br>
            <input type="checkbox" name="color" value="green">
            <label>Green</label><br>
            <input type="checkbox" name="color" value="yellow">
            <label>Yellow</label><br>
            <input type="checkbox" name="color" value="black">
            <label>Black</label><br>
            <input type="checkbox" name="color" value="blue">
            <label>Blue</label><br>
            <input type="checkbox" name="color" value="white">
            <label>White</label><br><br>

            <label for="favcolor">Select your favorite color:</label>
            <input type="color" id="favcolor" name="favcolor"><br><br>
            <label for="email">Enter your email:</label>
            <input type="email" id="email" name="email"><br><br>
            <label>Userame:</label>
            <input type="text" id="uname" name="uname"><br><br>
            <label>Password:</label>
            <input type="password" id="pwd" name="pwd"><br><br>
            <input type="button" onclick="alert('Hello World!')" value="Click me!">
            <input type="submit" value="Submit">
            <input type="reset" value="Reset">

    </form>
```

# CSS
```css
body{
    font-family:Arial, Helvetica, sans-serif;
    background-image: url("bg.jpg");
    background-image:cover;
    background-position: center;
}

#loginForm{
    background-color: rgb(255, 255, 255);
    max-width:400px;
    margin:50px auto;
    opacity: 0.8;
    border-color: brown;
    border-radius: 8px;
    padding:20px ;
}

h1{
    text-align:center;
    color:#333333;
    
}


label{
   
    color:#555555;
}


input{
    padding:4px;
    margin-top:4px;
    margin-bottom:10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
}

input[type="checkbox"] {
    display: inline-block;
    margin-right: 10px;
}


.submitButton, .resetButton{
    background-color: #2b787c;
    color: #fff;
    padding: 10px 15px;
    border-style: dotted;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

.submitButton:hover{
    background-color: green;
    color:white;
}
.resetButton:hover{
    background-color:red;
    color:white;
}
```

