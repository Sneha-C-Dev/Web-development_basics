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
