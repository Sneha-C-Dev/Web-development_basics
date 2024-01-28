# JavaScrit Form Handling

```html

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Form</title>
    </head>
    <body>
        <form onsubmit="return validate()" action="msg.html">
            <h1>Login Page</h1>
            <label>Userame:</label>
            <input type="text" id="uname" name="uname"><br><br>
            <label>Password:</label>
            <input type="password" id="pwd" name="pwd"><br><br>
            <input type="submit" value="Submit">
        </form>
        <script>
            function validate()
            {
                var username = document.getElementById("uname");
                var password = document.getElementById("pwd");
               /* basic validation
                if (username.value == "" || password.value == "")
                {
                    alert("Blank credentials");
                    return false;
                }
                else{
                    return true;
                }
                */
               
                // customized validation
                var user = username.value.trim();
                var pass = password.value.trim();
                if (user == ""){
                    alert("Username cannot be blank");
                    return false;
                }
                else if (pass == ""){
                    alert("Password cannot be blank");
                    return false;
                }
                else if (pass.length < 5){
                    alert("Password too short");
                    return false;
                }
                else {
                    return true;
                }
               
            }
        </script>
    </body>
</html>
```
