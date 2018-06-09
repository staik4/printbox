<?php
	$data = $_POST['data'];

	$data = str_replace('data:image/png;base64,', '', $data);
	$data = str_replace(' ', '+', $data);

	$data = base64_decode($data);
	$file = "images/" . uniqid() . '.png';
	$success = file_put_contents($file, $data);

	$sizeApplication = $_POST['sizeApplication'];
	$sizeProduct = $_POST['sizeProduct'];
	$qual = $_POST['qual'];
	$packing = $_POST['packing'];
	$telOrder = $_POST['telOrder'];
	$nameOrder = $_POST['nameOrder'];
	$emailOrder = $_POST['emailOrder'];
	$payment = $_POST['payment'];
	$delivery = $_POST['delivery'];
	$packImg = $_POST['dataUrlPackImg'];
	$downImg = $_POST['downImg'];
	// echo $downImg;
	$downImg = str_replace('data:image/jpeg;base64,', '', $downImg);
	$downImg = str_replace(' ', '+', $downImg);

	$downImg = base64_decode($downImg);
	$file1 = "images/downimg" . uniqid() . '.png';
	$successs = file_put_contents($file1, $downImg);

	$downImgPack = str_replace('data:image/jpeg;base64,', '', $downImgPack);
	$downImgPack = str_replace(' ', '+', $downImgPack);

	$downImgPack = base64_decode($downImgPack);
	$file1 = "images/downimg" . uniqid() . '.png';
	$successs_packImg = file_put_contents($file2, $downImgPack);
	// echo $data1;
	// echo $file1;

	// $file_img = $_FILES;
	// var_dump($_FILES);
	// $path2 = $_POST['name'];
	// copy("asd", $path2)) $picture2 = $path2;
// if (!empty($_FILES['blobFile']['tmp_name']))

// 	{

// 	// Закачиваем файл

//

// 		if (copy($_FILES['blobFile']['tmp_name'], $path2)) $picture2 = $path2;

// 	}

	// $ret = fopen("js5ac9f866b16ef.png", 'r');
	// $contents = file_get_contents("js5ac9f866b16ef.png");
	// // fread($ret, $imagecontent);
	// // fclose($ret);
	// $base64 = 'data:image/PNG;base64,' . base64_encode($contents);
	//echo $base;


//$mail_to = "staik4@yandex.ru";
$mail_to = "staik4@yandex.ru";
$thm = "Заказ";
$msg = "Размер нанесения: ".$sizeApplication."<br>"."Размер изделия : ".$sizeProduct."<br>"."Количество: ".$qual."<br>"."Упаковка: ".$packing."<br>"."Телефон: ".$telOrder."<br>"."ФИО :".$nameOrder."<br>".$emailOrder."<br>"."Оплата: ".$payment."<br>"."Доставка: ".$delivery;
$picture  = $file;
$picture2 = $file1;
$picture3 = $file2;
//$files = array($picture, $picture2);

// var_dump($files);

// echo $picture, $picture2;


function send_mail($to, $thm, $html, $path, $path2, $path3)

	{
		$boundary = "--".md5(uniqid(time())); // генерируем разделитель
		$headers .= "MIME-Version: 1.0\n";

		$headers .="Content-Type: multipart/mixed; boundary=\"$boundary\"\n";

		$body = "--$boundary\n";
		$body .= "Content-type: text/html; charset='utf-8'\n";


		// $body .= $html."\n";
		$body .="Content-Transfer-Encoding: 8bit\n\n$html\n\n";
		$body .= "--$boundary\n";

		//echo $body;

		$attachments = array($path, $path2, $path3);


		// var_dump($attachments);
		for($x=0; $x < count($attachments); $x++) {
			$filename =  $attachments[$x];
			//echo $filename;
			$fp = fopen($filename,"r");
			$file = fread($fp, filesize($filename));
			//echo $file;

			$body .= "--$boundary\n";

			$body .= "Content-Type: application/octet-stream\n";

			$body .= "Content-Transfer-Encoding: base64\n";

			$body .= "Content-Disposition: attachment; filename = \"".$filename."\"\n\n";
			$body .= chunk_split(base64_encode($file))."\n";

			$body .= "--$boundary\n";
			if ($x == 1) {
				echo $filename;
			}


			// echo $message_part, $x;

		}

		//echo $body;

		//mail($to, $thm, $body, $headers);


		if(!mail($to, $thm, $body, $headers))
		{

			echo "К сожалению, письмо не отправлено"."\n";


			exit();

		} else {


			echo "письмо отправилось";
			// echo $to."\n";
			// echo $thm."\n";
			// echo $headers."\n";
	 	// echo $multipart;
		}

	}

	//base64_to_img_convert($_POST['data'], $pathToFile);

	// echo $data;

send_mail($mail_to, $thm, $msg, $picture, $picture2, $picture3);
 ?>
