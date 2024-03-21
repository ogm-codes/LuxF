<?php
//database connection
$dbConnection = mysqli_connect('localhost','root','','luxFdb');

if ($dbConnection->connect_error) {
    die("Connection failed".$dbConnection->connect_error);
} else {
    echo "connection sucessful";
}
?>