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
