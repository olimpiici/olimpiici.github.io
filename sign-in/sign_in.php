<?php
// Check for empty fields
if(empty($_POST['firstName'])      ||
   empty($_POST['lastName'])     ||
   empty($_POST['email'])	  ||
   empty($_POST['phone'])	  ||
   empty($_POST['city'])	  ||
   empty($_POST['school'])	  ||
   empty($_POST['grade'])	  ||
   empty($_POST['group'])	  ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	   echo false;
	   return false;
   }

$firstName = strip_tags(htmlspecialchars($_POST['firstName']));
$lastName = strip_tags(htmlspecialchars($_POST['lastName']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$city = strip_tags(htmlspecialchars($_POST['city']));
$school = strip_tags(htmlspecialchars($_POST['school']));
$grade = strip_tags(htmlspecialchars($_POST['grade']));
$group = strip_tags(htmlspecialchars($_POST['group']));

$servername = "localhost";
$username = "lopitala_slavkov";
$password = "2k%^#6%wl!#1";
$dbname = "lopitala_academy";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO Registered (firstname, lastname, email, phone, city, school, grade, class)
VALUES ('$firstName', '$lastName', '$email_address', '$phone', '$city', '$school', '$grade', '$group')";
if ($conn->query($sql) === TRUE) {
    echo true;
    return true;
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
    echo false;
    return false;
}

$conn->close();

?>
