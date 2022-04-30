<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You</title>
</head>
<body>
    <?php
    $visitor = $_POST['visitor-name'];
    $groupNum = $_POST['visitor-count'];
    $visitDate = $_POST['visit-date'];
    $favPlace = $_POST['favorite-place'];
    $rating = $_POST['rate-town'];
    $destination_email = "jas6417@rit.edu, RITISTprofessor@gmail.com";
    $email_subject = "Old Saybrook, CT - Visitor Jacob Schneider";
    $email_body = "Visitor Name - $visitor\n";
    $email_body .= "Number of visitors - $groupNum\n";
    $email_body .= "Date of Visit - $visitDate\n";
    $email_body .= "Favorite Place - $favPlace\n";
    $email_body .= "Rating - $rating\n";
    mail($destination_email, $email_subject, $email_body);
    echo "Data Sent\n";
    ?>
    <a href="./index.php">Home Page</a>
</body>
</html>