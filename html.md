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

CSS (Cascading Style Sheets) is a styling language used to describe the presentation of a document written in HTML. It allows you to control the layout, colors, fonts, and other visual aspects of your web pages. Below is basic documentation for CSS:

### Selector: Selectors target HTML elements to apply styles.

#### _1. Element Selector_
```css
p {
  color: blue;
}
```

#### _2. Class Selector_
```css
.highlight {
  background-color: yellow;
}
```

#### _3. ID Selector_
```css
#header {
  font-size: 24px;
}
```

### Properties and Values

CSS properties define the style, and values specify how the style should be applied.
```css
body {
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
}
```

### Comments
```css
/* This is a comment in CSS */
```

### CSS Box Model

Every HTML element can be considered as a box. The box model comprises the content, padding, border, and margin. Every HTML element can be considered as a box. The box model comprises the content, padd.

* Content: Actual content of the box.
* Padding: Clears an area around the content inside the box.
* Border: A border surrounding the padding.
* Margin: Clears an area outside the border.
* 
```css
.box {
  width: 200px;
  height: 150px;
  padding: 20px;  border: 2px solid #333;
  margin: 10px;
}
```

### CSS Colors

You can define colors using various formats such as names, hex codes, RGB, RGBA, etc.

#### _RGB Value:_
* rgb(red, green, blue)
* rgb(255, 0, 0) for red, rgb(0, 0, 255) for blue.
* rgba(red,green,blue,alpha) for adjusting opacity. Opacity varies from 0 to 1.

#### _HEX Value:_
* #rrggbb where rr, gg, and bb are hexadecimal values (00 to ff).
* #ff6347 for red-orange, #6a5acd for slate blue
* 3 digit hex is a shorthand
  Eg: #f00 for red

#### _HSL Values:_
* hsl(hue, saturation, lightness)
* Hue (0 to 360), Saturation (0% to 100%), Lightness (0% to 100%).
  Example: hsl(0, 100%, 50%) for pure red, hsl(240, 100%, 50%) for blue.


### Background properties: 

#### _Background color_
```css
 body{
background-color:  white;
}
```

#### _Background image_
```css
. body{
background-image: url(“gun.jpg”);
}
```

Properties are height, background-position, background-repeat,background-size, background-attachment etc 

### Borders
* border-style: Specifies the type of border like dotted, dashed, solid, double, groove, ridge, inset, outset, none, hidden.

* border-width: Sets the width of the four borders. Values can be a specific size (e.g., px, pt, cm, em) or predefined values: thin, medium, thick

* border-color: Set the color of border


### Margin

Used to create space around elements 
outside defined borders.
Individual side properties: margin-top, margin-right, margin-bottom, margin-left.

* Values: auto (browser-calculated), length (px, pt, etc.), %, inherit.
* Shorthand: margin: 25px 50px 75px 100px; (top, right, bottom, left).


### Padding
Generates space around an element's content inside defined borders. padding-top, padding-right, padding-bottom, padding-left.
* Values: length (px, pt, etc.), %, inherit.
 Padding is inside the element, affecting its content area. Use box-sizing: border-box; to include padding in element width.


### Height and Width
Used to set the height and width of an element.
* Values: auto, length (px, cm, etc.), %, initial, inherit.
Exclude padding, borders, and margins.
CSS Max-width sets the maximum width of an element.Useful for responsive design.


### Text
* text-align: Sets horizontal alignment of text (left, right, center, justify).
* Text Spacing:
* text-indent: Specifies first-line indentation.
* letter-spacing: Sets space between characters.
* Line height: Specifies space between lines.
* word-spacing: Sets space between words.


### Forms 

Use the width property to set the width of the input field.
```css
input[type=text] {
             width: 100%;
/*other properties*/
         }

```

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

