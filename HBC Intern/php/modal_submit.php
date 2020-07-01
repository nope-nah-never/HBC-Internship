<?php

header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"));

echo "Hello you are now subscribed with the email ID : $data->email"; 

?>
