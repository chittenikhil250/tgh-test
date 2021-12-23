<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
$to = "chittenikhil250@gmail.com";
$subject = "Message From thegreathoneyco.com";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message;
$headers = "From: noreply@tghc.in" . "\r\n" .
"CC: chnikhil250@gmail.com";
if(isset($_POST['submit'])){ 
    mail($to,$subject,$txt,$headers);
}
header("Location:ordernow.html");
?> 