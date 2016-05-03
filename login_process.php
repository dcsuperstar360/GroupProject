<?php

session_start();

if (!empty($_POST)) {
  if ($_POST['username'] == 'something' && $_POST['password'] == 'something') {
    $_SESSION['username'] = $_POST['username'];
    header("Location: member.php");
    exit;
  }
}

?>
<form action="login.php" method="post">
Username: <input type="text" name="username" value="" /><br />
Password: <input type="password" name="password" value="" /><br />
<input type="submit" value="Log in" />
</form>