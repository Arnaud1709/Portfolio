<?php
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];
 
$EmailTo = "arnaud.dlcrx@hotmail.fr";
$Subject = "Nouveau Message reçu";
$Body = $message;

 
// send email
mail($EmailTo, $Subject, $Body, "From:".$email);

?>