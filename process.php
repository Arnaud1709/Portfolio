<?php
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];
 
$to = 'arnaud.dlcrx@hotmail.fr';
 $subject = $name;
 $headers = 'From: '. $email. "\r\n" .
 'Reply-To: '. $email. "\r\n" .
 'X-Mailer: PHP/' . phpversion();

 mail($to, $subject, $message, $headers);
 
?>