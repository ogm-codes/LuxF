<?php

require('dbconnect.php');

$email = $_POST['email'];
$password = $_POST['password'];

if (empty($email || $password)){
    $errormsg = "Please fill in all the fields";
}

?>