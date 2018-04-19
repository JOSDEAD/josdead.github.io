<?php
    $name =$_POST['name'];
    $email=$_POST['email'];
    $message= $_POST['message'];


    $email_from=$email;
    $email_subject="Nuevo mensaje del form";
    $email_body= "Nombre:  $name.\n".
                    "Email: $email.\n".
                    "Message: $message.\n";

    $to= "josemiguelmurillorodriguez@gmail.com"
    $headers= "From: $email_from \r\n";
    $headers .= "Reply-To: $email \r\n";
    mail($to,$email_subject,$email_body,$headers);
    header("Location: index.html");
?>