<?php 

	$email = $_POST['emailNewIdea'];
	$tel = $_POST['telNewIdea'];
	$message = $_POST['textNewIdea'];

	$to = "printboxperm@yandex.ru";
	$subject = "От посетителя сайта";
	$text =  "Написал(а): \n Контактный email - $email\n\n Текст письма: $message\n Телефон - $tel";

	$header.= "Content-type: text/html; charset=utf-8\r\n";
	$header .= "MIME-Version: 1.0\r\n";
	$sending = mail($to, $subject, $text, $headers);

	if($sending) echo " Ваше письмо отправлено!!";
?>