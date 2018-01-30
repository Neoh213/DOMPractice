<?php

	$name = @trim(stripslashes($_POST['name']));
	$email = @trim(stripslashes($_POST['email']));
	$subject = @trim(stripslashes($_POST['subject']));
	$message = @trim(stripslashes($_POST['message']));

	$email_from = $email;
	$email_to = 'djrumph@gmail.com'; //replace with your email

	$body = 'Name: ' . $name . "\n\n" . 'Email: ' . $email . "\n\n" . 'Subject: ' . $subject . "\n\n" . 'Message: ' . $message;

	$success = @mail($email_to, $body, 'Name: ' . $name . "\n\n" . 'Email: ' . $email . "\n\n" . 'Subject: ' . $subject . "\n\n" . 'Message: ' . $message);

?>

<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<script>alert("Thank you for your message. Someone will contact you soon. Have a great day!");</script>
	<meta HTTP-EQUIV="REFRESH" content="0; url=http://darrylrumph.com/#contact">
</head>
