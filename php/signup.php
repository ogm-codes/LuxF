<?php
//database connection
require('dbconnect.php');

if ($_SERVER['REQUEST_METHOD']) {
    //GET User input
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirmedpassword = $_POST['confirmedpassword'];

    if (empty($email) || empty($password) || empty($confirmedpassword)) {
        $errormsg = "please fill in all the fields";
    } else if ($password !== $confirmedpassword) {
        $errormsg = "passwords do no match";
    } else {
        
    }
}
?>