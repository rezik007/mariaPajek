<?php
// Fetching Values from URL.
$firstName = $_POST['firstName1'];
$secondName = $_POST['secondName1'];
$email = $_POST['email1'];
$telephone = $_POST['telephone1'];
$message = $_POST['message1'];
$email = filter_var($email, FILTER_SANITIZE_EMAIL); // Sanitizing E-mail.
// After sanitization Validation is performed
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    if (!preg_match("/^[0-9]{9}$/", $telephone)) {
        echo "<span>Wprowadź poprawny numer telefonu!</span>";
    } else {
        $subject = 'Wiadomość z formularza mariapajek.pl od: '.$firstName.' '.$secondName;
// To send HTML mail, the Content-type header must be set.
        $headers = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
        $headers .= 'From:' . $email. "\r\n"; // Sender's Email
        $template = '<div style="padding:50px; color:white;">'
            . 'Imie i nazwisko:' . $firstName .' '.$secondName. '<br/>'
            . 'Email:' . $email . '<br/>'
            . 'Numer telefonu:' . $telephone . '<br/>'
            . 'Treść wiadomości:' . $message . '<br/><br/></div>';
        $sendmessage = "<div style=\"background-color:#7E7E7E; color:white;\">" . $template . "</div>";
// Message lines should not exceed 70 characters (PHP rule), so wrap it.
        $sendmessage = wordwrap($sendmessage, 70);
// Send mail by PHP Mail Function.
        mail("maria.pajek.mp@gmail.com", $subject, $sendmessage, $headers);
        echo "Wiadomość została wysłana!";
    }
} else {
    echo "<span>Nieprawidłowy adres email!</span>";
}
?>