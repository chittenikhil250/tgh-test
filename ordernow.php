<?php 
error_reporting(-1);

// if(isset($_POST['submit']))
// {
$name = $_POST['name']; 
$phone = $_POST['phone']; 
$email = $_POST['email']; 
$email = $_POST['email']; 
$location = $_POST['address-line-1']; 
$area = $_POST['address-line-2']; 

$from_add = "orders@thegreathoneyco.com"; 
$to_add = "chnikhil250@gmail.com"; 
$subject = "Your Subject Name";
$message = "Name:$name \n Sites: $submit_links";

$headers = 'From: orders@thegreathoneyco.com' . "\r\n" .

'Reply-To: chnikhil250@gmail.com' . "\r\n";

if(mail($to_add,$subject,$message,$headers)) 
{
    $msg = "Mail sent";

 echo $msg;
} 

print "<p>Thanks $name</p>" ;
// }


?>