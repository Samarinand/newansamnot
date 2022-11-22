<?php
   use PHPMailer\PHPMailer\PHPMailer;
   use PHPMailer\PHPMailer\Exception;

   require 'phpmailer/src/Exception.php';
   require 'phpmailer/src/PHPMailer.php';

   $mail = new PHPMailer(true);
   $mail ->CharSet = 'UTF-8';;
   $mail ->setLanguage ('ru', 'phpmailer/language/');
   $mail ->IsHTML(true);

   $mail  ->setFrom('samarinand@gmail.com', 'Балалаечник');
   $mail ->addAddress('samarinand22@gmail.com');
   $mail ->Subject = 'Привет! Это  "балалалечник"';
   $body = '<h1>  Встречайте суперписьмо!</h1>';

   if(trim(!empty($_POST['name']))) {
    $body.='<p><srtong> Имя:</srtong> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['email']))) {
        $body.='<p><srtong> E-mail:</srtong> '.$_POST['email'].'</p>';
        }
   $mail->Body=$body;

   if (!$mail->send()){
    $message = 'Ошибка';
   } else {
    $message = 'Данные отправлены!';
   }
     $response = ['message'=> $message];
     header('Content-type: application/json');
     echo json_encode($response);
?>
