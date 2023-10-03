<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Login</title>
</head>
<body>
<form action="Register" method="post">

<table>
<%-- Input form for user data --%>
<tr><td>User Name: </td><td> <input type="text" name ="uname"> </td> </tr>
<tr><td>Password: </td><td> <input type="password" name ="pword"> </td> </tr>
<tr><td></td><td> <input type="submit" value ="Create Account"> </td> </tr>
</table>
</form>

</body>
</html>