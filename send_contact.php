<?php

$name ="$name";
$email ="$email";
$message ="$message";

$header = "from: $name <$email>";
$to = "llewellynbh@gmail.com"

$send_contact=mail($to,$message,$header);

if($send_contact){
	echo "We have recieved your information";
}
else {
	echo "Error";
}