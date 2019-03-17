<?php

if (isset($_POST['send'])) {
$name = $_POST['name'];
$subject = $_POST['subject'];
$email = $_POST['email'];
$message = $_POST['message'];

$mailTo =  "bakingforjoy@gmail.com";
$headers = "From: ".$email;
$txt = "You have received an email from ".$name.".\n\n".$message;

mail($mailTo, $subject, $txt, $headers);
header("Location: index.php?mailsend");

}
 ?>
