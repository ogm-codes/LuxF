<?php

require('dbconnect.php');
print_r($_POST);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $email = $_POST['email'];
    $password = $_POST['user_password'];
    $sql = "SELECT user_password FROM users WHERE email = ?";
    $statement = $conn->prepare($sql);
    $statement->execute();

    $result = $stmt->get_result(); // Get the result

  if ($result->num_rows === 1) {
    $row = $result->fetch_assoc(); // Fetch user data

    // Verify password (assuming password is hashed)
    if (password_verify($password, $row['password'])) {
      // Login successful! ( redirect to protected page)
      session_start(); // 
      $_SESSION['user_id'] = $row['id']; // Store user ID in session (optional)
      header("Location: index.html"); // Redirect to protected page
    } else {
      $error_message = "Invalid email or password.";
    }
  } else {
    $error_message = "Invalid email or password.";
  }

  // Close the statement and connection
  $stmt->close();
  $conn->close();
}

?>