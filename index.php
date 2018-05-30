<!DOCTYPE html>
<html>
<head>
	<title>Printbox</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="OwlCarousel/docs/assets/owlcarousel/assets/owl.theme.default.min.css">
	<link rel="stylesheet" href="OwlCarousel/docs/assets/owlcarousel/assets/owl.carousel.min.css">
	<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
	<link rel="stylesheet" type="text/css" href="css/slick.css">
	<link rel="stylesheet" type="text/css" href="css/slick-theme.css">
	<link rel="stylesheet" href="css/consctructor.css">
	<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/jquery-ui.min.js"></script>
	<script src="OwlCarousel/dist/owl.carousel.js"></script>
	<script src="OwlCarousel/dist/owl.carousel.min.js"></script>
	<script src="js/slick.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="js/rotate/jquery.ui.rotatable.js"></script>
	<link rel="stylesheet" href="js/rotate/jquery.ui.rotatable.css">
	<!-- <script type="text/javascript"> -->
	<script>
	  $(document).ready(function(){


	    // .on("click", function(e){
	    // 	e.preventDefault();

	    //     console.log($(this), "this");
	    //     $('html, body').stop().animate({
	    //         scrollTop: $(anchor.attr('href')).offset().top
	    //     }, 777);

	    // });
	});
</script>
	<script src="js/main.js"></script>
</head>
<body>
	<section id="header">
		<div class="container">
			<div class="row">
				<div class="header d-flex justify-content-between flex-wrap" style="width: 100%">
					<div class="adress col-xl-4 col-lg-3 col-md-12 col-12">
						<span class="adress-text">г. Пермь ТРК «Колизей Синема», 3 этаж</span>
					</div>
					<div class="logo col-xl-4 col-lg-3 col-md-12 col-12 ">
						<img class="d-block mx-auto logo-padding" src="img/logo-pb.svg" alt="logo">
					</div>
					<div class="contacts col-xl-4 col-lg-3 col-md-12 col-12 d-flex flex-column justify-content-between align-items-center">
						<div class="cont">
							<div class="tel-phone"><a href="tel:+7(999)9999999">+7(342)-204-07-23</a></div>

							<div class="soc-net-icon d-flex justify-content-around">
								<a href="#"><img style="width: 25px;" src="img/soc-net3.svg" alt="inst" class="instagram"></a>
								<a href="#"><img style="width: 25px;" src="img/XMLID_497_1.svg" alt="telegram" class="telegram"></a>
								<a href="#"><img style="width: 25px;" src="img/vk-black.svg" alt="vk" class="vk"></a>

							</div>
						</div>
					</div>
				</div><!-- .header -->
			</div><!-- row -->
		</div><!-- container -->

	</section>
	<section class="back-red" id="banner">
		<div class="container">
			<div class="row d-flex justify-content-between" style="margin-top:-45px;">
				<div class="label col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center flex-column">
					<span style="padding-bottom:50px;" class="text-label bold text-center-mobile">Стильная одежда<br> с <span style="color:#FF001F; font-size: 42px;font-family:'Gilroy-Bold';">уникальным принтом</span><br> за 1 день</span>
					<div class="btn-label d-flex flex-wrap justify-content-start align-items-center text-title-mobile">
						<a href="#yak1" class="text-title-mobile margin-bot-mobile margin-bot-mobile-sm"><button class="btn btn-primary">Заказать за 5 минут</button></a>
						<a href="#yak2" class="text-title-mobile-e text-title-mobile-m padding-left-mobile padding-left-mobile-m">Узнать больше</a>
					</div>

				</div>
				<div class="banner-photo col-xl-6 col-lg-6 col-md-6 col-sm-12 img-shirt-mobile">
					<img src="img/back-top.png" alt="banner-photo">
				</div>
				<div class="col-12 text-center padding-start">
						<h2 >НАЧНЁМ?</h2>
				</div>
			</div><!-- row -->
		</div><!-- container -->
	</section>

	<section>
		<div class="container">
			<div class="row">
				<div class="slider d-flex flex-column" style="width: 100%; margin: 50px 0 50px 0">
					<div class="d-flex justify-content-center">
						<div class="choice-menu d-flex justify-content-between" style="margin-bottom: 50px; width: 80%">
							<div data-slide="0" class="text-center item-slider-choice type col-3 item-slider-choice-active">Выберите тип одежды</div>
							<div data-slide="1" class="text-center item-slider-choice make-constructor col-3">Создайте макет</div>
							<div data-slide="2" class="text-center item-slider-choice packing col-3">Упакуйте подарок</div>
							<div data-slide="3" class="text-center item-slider-choice order col-3">Оформите заказ</div>
						</div>
					</div>
					<div class="visible-slide-part">
						<div class="wrapper">
							<div data-slide="0" class="active slide item-choice" id="goods">
								1
								<div class="container">
									<div class="goods d-flex justify-content-around flex-wrap col-12" >
										<div class="choice d-flex flex-column align-items-center justify-content-start" data-price="350" data-choice= "futbolka" data-color="black" data-gender="man" data-pos="front" data-choiceimg="futbolka__front">
											<img src="img/front/futbolka/man/black/futbolka__front.jpg" alt="Футболка" style="width: 180px; height: 180px;">
											<div class="text-choice"><span>ФУТБОЛКА</span></div>
										</div>
										<div class="choice d-flex flex-column align-items-center justify-content-start" data-price="700" data-choice= "polo" data-color="black" data-gender="man" data-pos="front" data-choiceimg="polo__front">
											<img src="img/front_new/polo__front.svg" alt="Поло" style="width: 180px; height: 180px;">
											<div class="text-choice">ПОЛО</div>
										</div>
										<div class="choice d-flex flex-column align-items-center justify-content-start" data-price="1900" data-choice="tolstovka" data-color="black" data-gender="man" data-pos="front" data-choiceimg="tolstovka__front">
											<img src="img/front_new/tolstovka__front.svg" alt="Толстовка" style="width: 180px; height: 180px;">
											<div class="text-choice">ТОЛСТОВКА</div>
										</div>
										<div class="choice d-flex flex-column align-items-center justify-content-start" data-price="2500" data-choice="bomber" data-color="black" data-gender="man" data-pos="front" data-choiceimg="bomber__front">
											<img src="img/front_new/bomber__front.svg" alt="Бомбер" style="width: 180px; height: 180px;">
											<div class="text-choice">БОМБЕР</div>
										</div>
										<div class="choice d-flex flex-column align-items-center justify-content-start" data-price="1500" data-choice="switshot" data-color="black" data-gender="man" data-pos="front" data-choiceimg="switshot__front">
											<img src="img/front_new/switshot__front.svg" alt="Свитшот" style="width: 180px; height: 180px;">
											<div class="text-choice">СВИТШОТ</div>
										</div>
										<div class="choice d-flex flex-column align-items-center justify-content-start" data-price="350" data-choice="cap" data-color="black" data-gender="man" data-pos="front" data-choiceimg="cap__front">
											<img src="img/front_new/cap__front.svg" alt="Кепка" style="width: 180px; height: 180px;">
											<div class="text-choice">КЕПКА</div>
										</div>
										<div class="choice d-flex flex-column align-items-center justify-content-start" data-price="750" data-choice="snep" data-color="black" data-gender="man" data-choiceimg="snep__front" data-pos="front">
											<img src="img/front_new/snep__front.svg" alt="Снеп" style="width: 180px; height: 180px;">
											<div class="text-choice">СНЕП</div>
										</div>
										<div class="hide choice d-flex flex-column align-items-center justify-content-start" data-price="750" data-choice="mantia" data-color="black" data-gender="man" data-gender="man" data-pos="front" data-choiceimg="mantia__front">
											<img src="img/front_new/mantia__front.svg" alt="Мантия" style="width: 180px; height: 180px;">
											<div class="text-choice">МАНТИЯ</div>
										</div>
										<div class="choice d-flex flex-column align-items-center justify-content-start" data-price="750" data-choice="backpack" data-color="black" data-gender="man" data-pos="front" data-choiceimg="ruckzak__front" >
											<img src="img/front_new/ruckzak__front.svg" alt="Рюкзак" style="width: 180px; height: 180px;">
											<div class="text-choice">РЮКЗАК</div>
										</div>
									</div>
								</div>
							</div>
							<div data-slide="1" class="slide slide item-choice" id="consctructor">
								<div class="constructor d-flex" style="width: 100%">
									<div class="container">
										<div class="row">
									<div class="colll d-flex flex-column justify-content-between align-items-center col-xl-6 col-lg-6 col-md-12">
										<div id="img-choice-front" class="img" style="width: 100%; height: 440px">
											<div class="img-choice-front d-flex justify-content-center align-items-center flex-column" id= "capture" style="position: relative;" style="height: 100%">
												<!--<img src="" alt="main-img-choiceee" id="main-img">-->
												<div class="front-text-number-img d-flex justify-content-center align-items-center" style="width: 100%">
													<div class="item-enter-text text-main d-flex justify-content-center align-items-center" >
														<span class="font" style="text-align: center;"></span>
														<!-- <div class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se"> -->

														<!-- </div> -->
													</div>
													<div class="item-enter-number number-main d-flex justify-content-center align-items-center" ><span class="font" style="text-align: center;"></span></div>
													<div class="item-enter choice-imgg">
														<!-- <div style="width: 100%, height: 100%;">
														<img id="choice-img" src="" alt="">
													</div> -->
													</div>
												</div>
<!-- 												<div class="back-text-number-img" style="width: 100%; display: none;">
													<div class="text-main d-flex justify-content-center align-items-center" >
														<span class="font" style="text-align: center;"></span>

													</div>
													<div class="number-main d-flex justify-content-center align-items-center" ><span class="font" style="text-align: center;"></span></div>
													<div class="choice-imgg"><img id="choice-img" src="" alt=""></div>
												</div> -->
											</div>
										</div>
										<div id="img-choice-back" class="img hide" style="width: 100%; height: 440px">
											<div class="img-choice-back d-flex justify-content-center align-items-center flex-column" id= "capture-2" style="position: relative;">
												<!--<img src="" alt="main-img-choiceee" id="main-img">-->
												<div class="back-text-number-img d-flex justify-content-center align-items-center" style="width: 100%; height: 100%; display: none;">
													<div class="text-main d-flex justify-content-center align-items-center" >
														<span class="font" style="text-align: center;"></span>

													</div>
													<div class="number-main d-flex justify-content-center align-items-center" ><span class="font" style="text-align: center;"></span></div>
													<div class="choice-imgg"><img id="choice-img" src="" alt=""></div>
												</div>
											</div>
										</div>
										<div class="color-change-product d-flex justify-content-center" style="width: 100%">
											<div class="change-color-product d-flex justify-content-around col-5 " >
												<div data-colorproduct="white" class=" color"></div>
												<div data-colorproduct="black" class="active-choice-product-color color"></div>
												<div data-colorproduct="golden" class="color"></div>
												<div data-colorproduct="gray" class="color"></div>
												<div data-colorproduct="red" class="color"></div>
												<div data-colorproduct="blue" class="color"></div>
												<!-- <div data-colorproduct="nocolor" class="color"></div> -->
											</div>
										</div>
										<button id="packing-btn" class="packing-btn" type="button">Упаковать</button>
									</div>
									<div class="tools d-flex justify-content-start flex-column align-items-start col-xl-6 col-lg-6 col-md-12" style="height: 100%;">
										<div class="d-flex justify-content-start flex-column" style="width: 300px">
											<div class="namesPriceChoice d-flex justify-content-between">
												<div class="title-choice"><span></span></div>
												<div class="price" style="margin-left: 10px; font-weight: bold"><span data-curPrice="" class="nameChoice"></span><span class="currency" >&#8381</span></div>
											</div>
											<div class="gender d-flex justify-content-between">
												<button data-gender="man" class="btn-choice-gen-draw btn-gender active-btn-choice-gen-draw">Мужская</button>
												<button id="btn-women-gender" data-gender="women" class="btn-choice-gen-draw btn-gender">Женская</button>
											</div>
											<div class="position-drawing d-flex justify-content-between">
												<button data-position="front" class="btn-choice-gen-draw btn-position-drawing active-btn-choice-gen-draw active-btn-choice-position">Спереди</button>
												<button id="btn-pos-draw" data-position="back" class="btn-choice-gen-draw btn-position-drawing">Сзади</button>
											</div>
										</div>
										<div class="line"></div>

										<div class="size-choice d-flex flex-column flex-wrap">
											<div class="title-size-choice"><span>Размер нанесения:</span></div>
											<div class="size-choice-radio-front d-flex justify-content-between flex-wrap">
												<!-- <label id="A3" class="label-size-btn hide" for=""><input data-sized="A3" name="A3" class="radio-size-btn" type="radio"><span data-size="A3" class="radio-size-span "></span>А3 (297х420мм)</label> -->
												<label id="A4" class="label-size-btn" for=""><input data-sized="A4" name="A4" class="radio-size-btn" type="radio"><span data-size="A4" class="radio-size-span active-radio"></span>А4 (210х297мм)</label>
												<label id="A5" class="label-size-btn" for=""><input data-sized="A5" name="A5" class="radio-size-btn" type="radio"><span data-size="A5" class="radio-size-span"></span>А5 (148х210мм)</label>
												<label id="A6" class="label-size-btn" for=""><input data-sized="A6" name="A6" class="radio-size-btn" type="radio"><span data-size="A6" class="radio-size-span"></span>А6 (105х148мм)</label>
												<label id="A7" class="label-size-btn" for=""><input data-sized="A7" name="A7" class="radio-size-btn" type="radio"><span data-size="A7" class="radio-size-span"></span>А7</label>
											</div>
											<div class="size-choice-radio-back hide d-flex justify-content-between flex-wrap">
												<label id="A3" class="label-size-btn" for=""><input data-sized="A3" name="A3" class="radio-size-btn" type="radio"><span data-size="A3" class="radio-size-span active-radio"></span>А3 (297х420мм)</label>
												<label id="A4" class="label-size-btn" for=""><input data-sized="A4" name="A4" class="radio-size-btn" type="radio"><span data-size="A4" class="radio-size-span"></span>А4 (210х297мм)</label>
												<label id="A5" class="label-size-btn" for=""><input data-sized="A5" name="A5" class="radio-size-btn" type="radio"><span data-size="A5" class="radio-size-span"></span>А5 (148х210мм)</label>
												<label id="A6" class="label-size-btn" for=""><input data-sized="A6" name="A6" class="radio-size-btn" type="radio"><span data-size="A6" class="radio-size-span"></span>А6 (105х148мм)</label>
												<!-- <label id="A7" class="label-size-btn hide" for=""><input data-sized="A7" name="A7" class="radio-size-btn" type="radio"><span data-size="A7" class="radio-size-span"></span>А7</label> -->
											</div>
										</div>
										<div class="hide-enter-par-front " style="width: 100%">
											<div class="change-choice-front d-flex justify-content-around flex-wrap" style="margin-top: 30px;">
												<div class="change-choice-text d-flex flex-column align-items-center col-xl-4 col-lg-4 col-md-6 col-sm-12">
													<label class="d-flex justify-content-start" for="change-text"><div class="img-jackdaw img-active-front-text"><img src="img/not_active_jackdaw.svg" alt=""></div><div class ="title-change-text">Добавить текст</div></label>
													<input id="change-text" class="enter-text-choice" type="text">
													<div class="color-text d-flex justify-content-between">
														<div data-colortext="white" class="active-choice-text-color color"></div>
														<div data-colortext="black" class="color"></div>
														<div data-colortext="golden" class="color"></div>
														<div data-colortext="gray" class="color"></div>
														<div data-colortext="red" class="color"></div>
														<div data-colortext="blue" class="color"></div>
														<div data-colortext="nocolor" class="color"></div>
													</div>
													<div class="select-font">
														<select class="font" name="" id="">
															<option value="">Выберите шрифт</option>
															<option class="calibri" style="" value="calibri">Calibri</option>
															<option class="a_campus" style="" value="a_campus">a_Campus</option>
															<option class="a_campusgrav" style="" value="a_campusgrav">a_CampusGrav</option>
															<option class="a_machinaorto" style="" value="a_machinaorto">a_machinaorto</option>
															<option class="bebas-neue" style="" value="bebas-neue">Bebas Neue</option>
															<option class="impact" style="" value="impact">Impact</option>
															<option class="lobster" style="" value="lobster">Lobster</option>
														</select>
													</div>
												</div>
												<div class="change-choice-number d-flex flex-column align-items-center col-xl-4 col-lg-4 col-md-6 col-sm-12">
													<label class="d-flex justify-content-start" for="change-number"><div class="img-jackdaw img-active-front-number"><img src="img/not_active_jackdaw.svg" alt=""></div><span class ="title-change-number">Добавить номер</span></label>
													<input id="change-number" class="enter-text-choice" type="text">
													<div class="color-number d-flex justify-content-between">
														<div data-colortext="white" class="active-choice-text-color color"></div>
														<div data-colortext="black" class="color"></div>
														<div data-colortext="golden" class="color"></div>
														<div data-colortext="gray" class="color"></div>
														<div data-colortext="red" class="color"></div>
														<div data-colortext="blue" class="color"></div>
														<div data-colortext="nocolor" class="color"></div>
													</div>
													<div class="select-font">
														<select class="font" name="" id="">
															<option value="">Выберите шрифт</option>
															<option class="calibri" style="" value="calibri">Calibri</option>
															<option class="a_campus" style="" value="a_campus">a_Campus</option>
															<option class="a_campusgrav" style="" value="a_campusgrav">a_CampusGrav</option>
															<option class="a_machinaorto" style="" value="a_machinaorto">a_machinaorto</option>
															<option class="bebas-neue" style="" value="bebas-neue">Bebas Neue</option>
															<option class="impact" style="" value="impact">Impact</option>
															<option class="lobster" style="" value="lobster">Lobster</option>
														</select>
													</div>
												</div>
												<div class="d-flex flex-column justify-content-start align-items-center col-xl-4 col-lg-4 col-md-6 col-sm-12">
													<label for="change-number"><span class ="title-change-pic">Добавить картинку</span></label>
													<div class="down-img d-flex justify-content-between">
														<span > <span class="text-down-img">Загрузить файл</span></span>
														<form action="" id="down-img"><input type="file" name="pic-down" class="photo" id="imgInput" value="загрузить фото"/></form>
														<div class="hide close">
															<img src="img/delete.svg" alt="" class="close-img">
														</div>
													</div>

												</div>
											</div>
										</div>
										<div class="hide-enter-par-back hide" style="width: 100%">
											<div class="change-choice-back d-flex justify-content-around" style="margin-top: 30px;">
												<div class="change-choice-text d-flex flex-column align-items-center">
													<label class="d-flex justify-content-start" for="change-text"><div class="img-jackdaw img-active-back-text"><img src="img/not_active_jackdaw.svg" alt=""></div><div class ="title-change-text">Добавить текст</div></label>
													<input id="change-text-back" class="enter-text-choice" type="text">
													<div class="color-text d-flex justify-content-between">
														<div data-colortext="white" class="active-choice-text-color-back color"></div>
														<div data-colortext="black" class="color"></div>
														<div data-colortext="golden" class="color"></div>
														<div data-colortext="gray" class="color"></div>
														<div data-colortext="red" class="color"></div>
														<div data-colortext="blue" class="color"></div>
														<div data-colortext="nocolor" class="color"></div>
													</div>
													<div class="select-font">
														<select class="font" name="" id="">
															<option value="">Выберите шрифт</option>
															<option class="calibri" style="" value="calibri">Calibri</option>
															<option class="a_campus" style="" value="a_campus">a_Campus</option>
															<option class="a_campusgrav" style="" value="a_campusgrav">a_CampusGrav</option>
															<option class="a_machinaorto" style="" value="a_machinaorto">a_machinaorto</option>
															<option class="bebas-neue" style="" value="bebas-neue">Bebas Neue</option>
															<option class="impact" style="" value="impact">Impact</option>
															<option class="lobster" style="" value="lobster">Lobster</option>
														</select>
													</div>
												</div>
												<div class="change-choice-number d-flex flex-column align-items-center">
													<label class="d-flex justify-content-start" for="change-number"><div class="img-jackdaw img-active-back-number"><img src="img/not_active_jackdaw.svg" alt=""></div><span class ="title-change-number">Добавить номер</span></label>
													<input id="change-number-back" class="enter-text-choice" type="text">
													<div class="color-number d-flex justify-content-between">
														<div data-colortext="white" class="active-choice-number-color-back color"></div>
														<div data-colortext="black" class="color"></div>
														<div data-colortext="golden" class="color"></div>
														<div data-colortext="gray" class="color"></div>
														<div data-colortext="red" class="color"></div>
														<div data-colortext="blue" class="color"></div>
														<div data-colortext="nocolor" class="color"></div>
													</div>
													<div class="select-font">
														<select class="font" name="" id="">
															<option value="">Выберите шрифт</option>
															<option class="calibri" style="" value="calibri">Calibri</option>
															<option class="a_campus" style="" value="a_campus">a_Campus</option>
															<option class="a_campusgrav" style="" value="a_campusgrav">a_CampusGrav</option>
															<option class="a_machinaorto" style="" value="a_machinaorto">a_machinaorto</option>
															<option class="bebas-neue" style="" value="bebas-neue">Bebas Neue</option>
															<option class="impact" style="" value="impact">Impact</option>
															<option class="lobster" style="" value="lobster">Lobster</option>
														</select>
													</div>
												</div>
		<!-- 											<div class="down-img">
													<span > <span class="text-down-img">загрузить фотографию</span></span>
													<input type="file" name="pic[]" class="photo" id="imgInput" value="загрузить фото"/>
												</div> -->
											</div>
										</div>
										<div id="size" class="d-flex flex-wrap" style="width: 100%; margin-top: 30px;" >
											<div class="tab-size col-xl-8 col-lg-8 col-md-12">
												<span class="titlesize">Размер</span>
												<div class="sizes d-flex flex-row justify-content-around">
													<div class="xs size-box choice-size">XS</div>
													<div class="s size-box ">S</div>
													<div class="m size-box ">M</div>
													<div class="l size-box ">L</div>
													<div class="xl size-box ">XL</div>
													<div class="xxl size-box ">XXL</div>
												</div>
											</div>
											<div class="qual col-4">
												<input type="text" placeholder="введите количество " value="1">
											</div>
										</div>

									</div>
								</div>
							</div>
								</div>
								<!-- <button type="button" class="btn btn-primary" id="canvas"></button> -->
							</div>
							<div data-slide="2" class="slide slide item-choice" id="packing">
								<div id="packing-container" class="container">
									<div class="row" style="width: 100%; height: 100%;">
										<div id="packing" class="col-xl-6 col-lg-6 col-md-12" style="width: 100%; height: 100%;">
											<div  class="img-packing-choice d-flex justify-content-center align-items-center" style="width: 100%; height: 100%;">
												<div class="main-text-packing">
													<span></span>
												</div>
												<div id="pack-img" style="width: 70%; position: absolute;">
													<img src="img/boxes/craft.svg" alt="craft" class="img-packing" >
												</div>
											</div>
										</div>
										<div id="packing" class="col-xl-6 col-lg-6 col-md-12 d-flex flex-column">
											<div class="title-packing-choice">
												<span>
													Создаешь уникальный подарок? Мы позаботимся об упаковке!
												</span>
											</div>
											<div class="radio-packing-choice d-flex flex-column align-items-start justify-content-around line-order" style="height: 50%; margin-top: 20px;">
												<label for=""><input id="craft-packing"  class="packink-radio-btn" type="radio" name="packing" value="craft" checked><span class=" packing-radio-btn active-radio"data-pricepacking = "0"  data-packing="craft"></span>"Крафтовый пакет"</label>
												<label for=""><input id="pizza-packing" class="packink-radio-btn" type="radio" name="packing" value="pizza"><span class="packing-radio-btn" data-pricepacking = "120" data-packing="pizza"></span>Коробка с уникальным нанесением</label>
												<label for=""> <input id="our-packing"  class="packink-radio-btn" type="radio" name="packing" value="our"><span class="packing-radio-btn" data-pricepacking = "0" data-packing="our"></span>Наша фирменная упаковка</label>
											</div>
											<div class="enter-packing-text" style="width: 100%">
												<div class="change-choice-pack d-flex justify-content-start" style="margin-top: 30px;">
													<div class="change-choice-packing-text d-flex flex-column align-items-center">
														<label for="change-text"><div class ="title-change-text">Добавить текст на упаковку</div></label>
														<input id="change-text" class="enter-text-choice-packing" type="text" style="width: 100%">
														<div class="color-text d-flex justify-content-between">
															<div data-colortext="white" class="active-choice-text-color-packing color"></div>
															<div data-colortext="black" class="color"></div>
															<div data-colortext="golden" class="color"></div>
															<div data-colortext="gray" class="color"></div>
															<div data-colortext="red" class="color"></div>
															<div data-colortext="blue" class="color"></div>
															<div data-colortext="nocolor" class="color"></div>
														</div>
														<div class="select-font">
															<select name="" id="">
																<option value="">Выберите шрифт</option>
																<option value="calibri">Calibri</option>
																<option value="a_Campus">a_Campus</option>
																<option value="a_campusgrav">a_CampusGrav</option>
																<option value="a_machinaorto">a_machinaorto</option>
																<option value="Bebas_Neue">Bebas Neue</option>
																<option value="Impact">Impact</option>
																<option value="Lobster">Lobster</option>
															</select>
														</div>
														</div>
												</div>
											</div>
											<button id="place-your-order-btn" class="packing-btn place-your-order-btn" type="button">Оформить заказ</button>

											<!-- <button id="place-your-order-btn" class="packing-btn place-your-order-btn" type="button">Оформить заказ</button> -->
										</div>
									</div>
								</div>
							</div>
							<div data-slide="3" class="d-flex flex-wrap slide slide item-choice d-flex justify-content-between" id="order">

								<div class="result col-xl-6 col-lg-6 col-md-12" id="result">

								</div>
								<div class="col-xl-6 col-lg-6 col-md-12 d-flex flex-column justify-content-center">
									<div class="form d-flex flex-column">
										<div class="title-order-form d-flex justify-content-between line-order">
											<div class="title-text-order ">
												<span>Ваш заказ:<br></span>
												<span class="nameOrderResult"></span>
											</div>
											<div class="line-order"></div>
											<div class="price-finally-order ">
												<span class="text-price-order"></span><span class="currency">&#8381</span>
											</div>
										</div>
										<form action="" class="line-order d-flex flex-wrap flex-row justify-content-between" style="margin-top: 15px;">
											<div class="item-form-irder-input d-flex flex-column justify-content-around align-items-center"><label for="">Введите Ваше Имя</label><input id="name-order"  type="text" placeholder="Иванов Иван" required></div>
											<div class="item-form-irder-input d-flex flex-column justify-content-around align-items-center"><label for="">Введите Ваш e-mail</label><input  id="email-order" type="email" placeholder="ivanov@mail.ru" required></div>
											<div class="item-form-irder-input d-flex flex-column justify-content-around align-items-center"><label for="">Введите Ваш телефон</label><input  id="tel-order" type="tel" placeholder="+79998887755" required></div>
										</form>
										<div class="title-delivery" style="margin: 10px 0 0 0; font-weight: bold"><span>Оплата заказа</span></div>
										<div class="payment d-flex flex-wrap justify-content-around line-order">
											<label for=""><input id="card" type="radio" name="payment"><span class="active-radio" data-payment="card"></span>Картой</label>
											<label for=""><input id="cash" type="radio" name="payment"><span data-payment="cash"></span>Наличными на месте</label>
											<label for=""><input id="qiwi" type="radio" name="payment"><span data-payment="qiwi"></span>Киви кошелек</label>
										</div>
										<div class="title-delivery" style="margin: 20px 0 10px 0; font-weight: bold"><span>Как Вам отправить товар?</span></div>
										<div class="delivery line-order d-flex flex-wrap justify-content-start" >
											<label for="" class="">
													<!-- <img src="img/ellipse-not-checked.svg" alt=""> -->
													<input type="radio" name="delivery">
												<span class="check-delivery active-radio" data-delivery="false"></span>Cамовывоз (Пермь, Колизей Синема 3 этаж)
											</label>
											<label for="" class="">

													<input type="radio" name="delivery">
													<!-- <img src="img/ellipse-not-checked.svg" alt=""> -->
												<span class="check-delivery" data-delivery="false"></span>Транспортная компания CDEK (+400р)
											</label>
											<label for="" class="">

													<input type="radio" name="delivery">
													<!-- <img src="img/ellipse-not-checked.svg" alt=""> -->
												<span class="check-delivery" data-delivery="false"></span>Почта России (+300р)
											</label>
										</div>
									</div>
									<!-- <form action="js/k.php"><button type="submit" id="place-order" class="place-your-order">Оформить заказ</button></form> -->
									<button id="place-order" class="place-your-order">Оформить заказ</button>
									<!-- <button type="button" id="sendemail" class="btn btn-primary">Отправить в неизведанное будущее</button> -->
								</div>
								<div id="screen"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

<div class="container" id="yak2">
	<div class="row">
		<div class="col-md-7 col-sm-offset-1">
			<h2 class="h2-bottom text-center-mobile">Мы сами производим одежду<br/>
					для Print Box, поэтому<br/><span style="color:#FF001F;font-family:'Gilroy-Bold'; font-size:35px;">отвечаем за качество<span></h2>
				<div class="row padding-icon">
					<div class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3 bold-digits col-md-bold-digits d-block my-auto text-icon-mobile">
						<img src="img/icon-1.svg">
					</div>
					<div class="col-xl-4 col-lg-4 col-md-4 col-sm-7 col-7 d-block my-auto p-digits">
						Собственное швейное
						<br/>производство в Перми
					</div>
					<div class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3 bold-digits col-md-bold-digits d-block my-auto text-icon-mobile">
						<img src="img/icon-7.svg">
					</div>
					<div class="col-xl-4 col-lg-4 col-md-4 col-sm-7 col-7 d-block my-auto p-digits">
						Стильные
						<br/>цвета
					</div>
				</div>
				<div class="row padding-icon">
					<div class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3 bold-digits col-md-bold-digits d-block my-auto text-icon-mobile">
						<img src="img/icon-3.svg">
					</div>
					<div class="col-xl-4 col-lg-4 col-md-4 col-sm-7 col-7 d-block my-auto p-digits">
						Премиальные
						<br/>ткани
					</div>
					<div class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3 bold-digits col-md-bold-digits d-block my-auto text-icon-mobile">
						<img src="img/icon-8.svg">
					</div>
					<div class="col-xl-4 col-lg-4 col-md-4 col-sm-7 col-7 d-block my-auto p-digits">
						Гарантия
						<br/>на принт 1 год
					</div>
				</div>
				<div class="row padding-icon">
					<div class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3 bold-digits col-md-bold-digits d-block my-auto text-icon-mobile">
						<img src="img/icon-4.svg">
					</div>
					<div class="col-xl-4 col-lg-4 col-md-4 col-sm-7 col-7 d-block my-auto p-digits">
						Внимательные
						<br/>менеджеры
					</div>
					<div class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3 bold-digits col-md-bold-digits d-block my-auto text-icon-mobile">
						<img src="img/icon-6.svg">
					</div>
					<div class="col-xl-4 col-lg-4 col-md-4 col-sm-7 col-7 d-block my-auto p-digits">
						Дорогое<br/>оборудование<br/>для печати
					</div>
				</div>
				<div class="row padding-icon padding-last-icon">
					<div class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3 bold-digits col-md-bold-digits d-block my-auto text-icon-mobile">
						<img src="img/icon-5.svg">
					</div>
					<div class="col-xl-4 col-lg-4 col-md-4 col-sm-7 col-7 d-block my-auto p-digits">
						Профессиональные
						<br/>дизайнеры
					</div>
				</div>
			</div>
		<div class="col-xl-5 col-lg-5 col-md-5 col-sm-10">
			<img src="img/back-02.svg" class="img-back-02">
		</div>
		</div>
</div>



	<section id="video">
		<div class="video">
			<h3 class="d-block mx-auto" style="max-width:500px;">Посмотри, как создаются вещи для Print Box</h3>
			<div class="container margin-after-video">
				<div class="row d-flex justify-content-center">
					<div class="video-youtube col-10"><iframe class="youtube-iframe" src="https://www.youtube.com/embed/DN6tgH6-kPE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>
				</div>
			</div>
		</div>
	</section><!-- section video-->
	<section id="portfolio">
		<div class="portfolio">
			<div class="container max-height-slider">
				<div class="row">
					<div style="padding-top:130px;" class="col-xl-5 col-lg-5 col-md-12 col-12 back-03">
						<div class="slider-center-mobile">
							<span style="font-family:'Gilroy-Bold'; font-size:35px;">Одежда, созданная в PrintBox -<span style="color:#FF001F; font-family:'Gilroy-Bold'; font-size:35px;"><br>отличное дополнение твоего образа</span></span>
							<p style="padding-top:20px;">Оцените готовые работы</p>
						</div>
					</div>
					<div class=" col-xl-7 col-lg-7 col-md-12 col-12" style="padding-bottom:40px; overflow:hidden;">
						<section class="responsive slick-slider">
						    <div>
						      <img src="img/img-slider-1.jpg">
						    </div>
						    <div>
						      <img src="img/img-slider-2.jpg">
						    </div>
						    <div>
						    	<img src="img/img-slider-3.jpg">
						    </div>
						    <div>
						      <img src="img/img-slider-4.jpg">
						    </div>
								<div>
						      <img src="img/slider/img-slider-5.jpg">
						    </div>
						    <div>
						      <img src="img/slider/img-slider-6.jpg">
						    </div>
						    <div>
						    	<img src="img/slider/img-slider-7.jpg">
						    </div>
						    <div>
						      <img src="img/slider/img-slider-8.jpg">
						    </div>
								<div>
						      <img src="img/slider/img-slider-9.jpg">
						    </div>
						    <div>
						      <img src="img/slider/img-slider-10.jpg">
						    </div>
						    <div>
						    	<img src="img/slider/img-slider-11.jpg">
						    </div>
						    <div>
						      <img src="img/slider/img-slider-12.jpg">
						    </div>
								<div>
						      <img src="img/slider/img-slider-13.jpg">
						    </div>
								<div>
						      <img src="img/slider/img-slider-14.jpg">
						    </div>
						    <div>
						      <img src="img/slider/img-slider-15.jpg">
						    </div>
						    <div>
						    	<img src="img/slider/img-slider-16.jpg">
						    </div>
								<div>
						      <img src="img/slider/img-slider-17.jpg">
						    </div>
								<div>
						      <img src="img/slider/img-slider-18.jpg">
						    </div>
						    <div>
						      <img src="img/slider/img-slider-19.jpg">
						    </div>
						    <div>
						    	<img src="img/slider/img-slider-20.jpg">
						    </div>
						</section>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="back-shirt container" id="form-1" style="background-color: #F8F8F8">
		<div class="container">
			<div class="row">
				<div class="form-newIdea d-flex justify-content-center flex-column align-items-center">
					<h3 class="text-center bold font-size-mobile">Не нашел нужное изделие и нанесение?<br/>
					<span class="h3-title bold font-size-mobile" style="color: #FF001F;">Опишите нам свою идею</span>:</h3>
					<h5 class="text-center" style="padding-top: 15px;">Наши дизайнеры и технологи производства помогут её реализовать</h5>
<!-- 					<form action="">
						<textarea class="item-form-newIdea col-12" placeholder="Описание идеи" name="" id="" cols="10" rows="10"></textarea>
						<div class="d-flex flex-row flex-wrap justify-content-between">
							<input class="item-form-newIdea text-title-mobile" type="tel" value="" placeholder="Телефон">
							<input class="item-form-newIdea text-title-mobile" type="email" placeholder="E-mail">
						</div>
						<div class="btn-form-newIdea d-flex justify-content-center" style="width: 100%;"><button class="item-form-newIdea" type="button">Воплотите идею в жизнь</button></div>
					</form> -->
					<form action="" id="newIdea" style="z-index: 1000">
						<textarea name="textNewIdea" class="item-form-newIdea col-12" placeholder="Описание идеи" name="" id="" cols="10" rows="10"></textarea>
						<div class="d-flex flex-row flex-wrap justify-content-between">
							<input name="telNewIdea" class="item-form-newIdea text-title-mobile" type="tel" value="" placeholder="Телефон">
							<input name="emailNewIdea" class="item-form-newIdea text-title-mobile" type="email" placeholder="E-mail">
						</div>
						<div class="btn-form-newIdea d-flex justify-content-center" style="width: 100%;">
							<!-- <button class="item-form-newIdea" type="button">Воплотите идею в жизнь</button> -->
							<input class="item-form-newIdea" type="submit" value="Воплотите идею в жизнь">
						</div>
					</form>
				</div><!-- .formNewIdea -->
			</div><!-- row -->
					</div>
					<!-- <div class="img-shirt" data-parallax="scroll" data-speed="0.6" data-image-src="img/shirt.svg"> -->
						<img class="img-shirt" src="img/shirt.svg">
					<!-- </div> -->
	</section><!-- section formNewIdea-->
	<section id="packaging" class="container">
		<div class="container">
			<div class="row ">
				<div class="d-flex justify-content-center" style="width: 100%">
					<span class="text-packaging pb55 text-center bold font-size-mobile">Готовишь оригинальный подарок?<br><span class="text-center font-size-mobile" style="font-family:'Gilroy-Bold';font-size:35px; color:#FF001F;">Мы позаботились об упаковке!</span></span>
				</div>
				<div class="packaging direction-column col-12 d-flex align-items-start justify-content-around">
					<div class=" d-flex flex-column justify-content-end item-packaging transition-opacity col-xl-3 col-lg-3 col-md-6 col-12 d-block mx-auto">
						<img src="img/box_01.svg" alt="">
						<span class="text-center bold" style="font-size: 16px;">Пакет с уникальным нанесением</span>
						<span class="text-center" style="font-size: 14px; padding-top: 12px;">При оформлении заказа - 0 р.<br>Отдельный заказ - 200 р.</span>
					</div>
					<div class=" d-flex flex-column justify-content-end item-packaging transition-opacity col-xl-3 col-lg-3 col-md-6 col-12 d-block mx-auto">
						<img src="img/box_02.svg" alt="">
						<span class="text-center bold" style="font-size: 16px;">Коробка с уникальным нанесением</span>
						<span class="text-center" style="font-size: 14px; padding-top: 12px;">При оформлении заказа - 120 р.<br>Отдельный заказ - 290 р.</span>
					</div>
					<div class=" d-flex flex-column justify-content-end item-packaging transition-opacity col-xl-3 col-lg-3 col-md-6 col-12 d-block mx-auto">
						<img src="img/box_03.svg" alt="">
						<span class="text-center bold" style="font-size: 16px; margin-bottom: 52px;">Фирменная упаковка PrintBox </span>
						<span class="text-center" style="font-size:14px; margin-top:-42px; margin-bottom:22px;">При оформлении заказа - 0 р.</span>
					</div>
				</div>
			</div>
		</div>
	</section>

	<div class="container-fluid back-partners">
		<div class="container padding-partners">
			<h2 style="font-size:35px;" class="middle-title text-center padding-top-bottom-80px font-size-mobile">Нужно больше стильных вещей?<br/>
				Мы работаем с корпоративными клиентами<br/>
			<span class="font-size-mobile" style="color:#FF001F;font-size: 35px;font-family:'Gilroy-Bold';">по оптовым ценам</span></h2>
			<div class="row h-100 margin-bottom-30px padding-0-mobile">
				<div class="col-xl-3 col-lg-3 col-md-3 col-6 middle-img my-auto">
					<img class="w60 d-block mx-auto margin-partners-mobile" src="img/partners/partners-1.jpg">
				</div>
				<div class="col-xl-3 col-lg-3 col-md-3 col-6 middle-img my-auto">
					<img class="w60 d-block mx-auto margin-partners-mobile" src="img/partners/partners-2.jpg">
				</div>
				<div class="col-xl-3 col-lg-3 col-md-3 col-6 middle-img my-auto">
					<img class="w60 d-block mx-auto margin-partners-mobile" src="img/partners/partners-21.jpg">
				</div>
				<div class="col-xl-3 col-lg-3 col-md-3 col-6 middle-img my-auto">
					<img class="w60 d-block mx-auto margin-partners-mobile" src="img/partners/partners-4.jpg">
				</div>
			</div>
			<div class="row h-100 margin-bottom-30px padding-0-mobile">
				<div class="col-xl-3 col-lg-3 col-md-3 col-6 middle-img my-auto">
					<img class="w60 d-block mx-auto margin-partners-mobile" src="img/p_06.png">
				</div>
				<div class="col-xl-3 col-lg-3 col-md-3 col-6 middle-img my-auto">
					<img class="w60 d-block mx-auto margin-partners-mobile" src="img/partners/partners-6.jpg">
				</div>
				<div class="col-xl-3 col-lg-3 col-md-3 col-6 middle-img my-auto">
					<img class="w60 d-block mx-auto margin-partners-mobile" src="img/partners/partners-7.jpg">
				</div>
				<div class="col-xl-3 col-lg-3 col-md-3 col-6 middle-img my-auto">
					<img class="w60 d-block mx-auto margin-partners-mobile" src="img/partners/partners-8.jpg">
				</div>
			</div>
			<div class="row h-100 margin-bottom-30px padding-0-mobile">
				<div class="col-xl-3 col-lg-3 col-md-3 col-6 middle-img my-auto">
					<img class="w60 d-block mx-auto margin-partners-mobile" src="img/partners/partners-9.jpg">
				</div>
				<div class="col-xl-3 col-lg-3 col-md-3 col-6 middle-img my-auto">
					<img class="w60 d-block mx-auto margin-partners-mobile" src="img/partners/partners-10.jpg">
				</div>
				<div class="col-xl-3 col-lg-3 col-md-3 col-6 middle-img my-auto">
					<img class="w60 d-block mx-auto margin-partners-mobile" src="img/partners/partners-11.jpg">
				</div>
				<div class="col-xl-3 col-lg-3 col-md-3 col-6 middle-img my-auto">
					<img class="w60 d-block mx-auto margin-partners-mobile" src="img/partners/partners-12.jpg">
				</div>
			</div>
			<div class="row h-100 margin-bottom-30px padding-0-mobile">
				<div class="col-xl-3 col-lg-3 col-md-3 col-6 middle-img my-auto">
					<img class="w60 d-block mx-auto margin-partners-mobile" src="img/partners/partners-14.jpg">
				</div>
				<div class="col-xl-3 col-lg-3 col-md-3 col-6 middle-img my-auto">
					<img class="w60 d-block mx-auto margin-partners-mobile" src="img/partners/partners-13.jpg">
				</div>
				<div class="col-xl-3 col-lg-3 col-md-3 col-6 middle-img my-auto">
					<img class="w60 d-block mx-auto margin-partners-mobile" src="img/partners/partners-15.jpg">
				</div>
				<div class="col-xl-3 col-lg-3 col-md-3 col-6 middle-img my-auto">
					<img class="w60 d-block mx-auto margin-partners-mobile" src="img/partners/partners-16.jpg">
				</div>
			</div>
			<div class="row h-100 margin-bottom-30px padding-0-mobile">
				<div class="col-xl-3 col-lg-3 col-md-3 col-6 middle-img my-auto">
					<img class="w60 d-block mx-auto margin-partners-mobile" src="img/partners/partners-17.jpg">
				</div>
				<div class="col-xl-3 col-lg-3 col-md-3 col-6 middle-img my-auto">
					<img class="w60 d-block mx-auto margin-partners-mobile" src="img/partners/partners-18.jpg">
				</div>
				<div class="col-xl-3 col-lg-3 col-md-3 col-6 middle-img my-auto">
					<img class="w60 d-block mx-auto margin-partners-mobile" src="img/partners/partners-19.jpg">
				</div>
				<div class="col-xl-3 col-lg-3 col-md-3 col-6 middle-img my-auto">
					<img class="w60 d-block mx-auto margin-partners-mobile" src="img/partners/partners-20.jpg">
				</div>
			</div>
		</div>
	</div>

	<section id="commers">
		<div id="yak1" class="container back-form">
			<div class="row">
				<div class="comma d-flex justify-content-center align-items-center flex-column">
					<div class="form-partner">
						<h3 class="text-center bold" style="padding-bottom: 43px;">Сформируйте ваш оптовый заказ<br> <span style="color:#FF001F;font-size: 35px;font-family:'Gilroy-Bold';">за 3 минуты</span></h3>
						<div class="form-org d-flex justify-content-center">
							<form method="post" action="" id="formWholesaleOrder" class="d-flex flex-column" style="margin-bottom: 50px;">
								<div class="d-flex flex-row align-items-center justify-content-end element-form-org " >
									<label for="fio">ФИО</label>
									<input name="fioPartner" id="fio" class="form-control" type="text" placeholder="ФИО" >
								</div>
								<div class="d-flex flex-row align-items-center justify-content-end element-form-org" >
									<label for="organization">Организация</label>
									<input name="nameOrg" class="form-control" id="organization" type="text" placeholder="Организация"> </div>
								<div class="d-flex flex-row align-items-center justify-content-end element-form-org" >
									<label for="kindOfProduct">Вид изделия</label>
									<div class="select-style">
										<select name="kindOfProduct" id="kindOfProduct" class="">
											<option value="" hidden disabled selected>Выбрать</option>
											<option value="Футболка">Футболка</option>
											<option value="Толстовка">Толстовка</option>
											<option value="Поло">Поло</option>
											<option value="Бомбер">Бомбер</option>
											<option value="Свитшот">Свитшот</option>
											<option value="Кепка">Кепка</option>
										</select>
									</div>
								</div>
								<div class="d-flex flex-row align-items-center justify-content-end element-form-org " >
									<label for="volumeOfProduct">Количество</label>
									<input name="volumeOfProduct" class="form-control" type="number" value="5" id="volumeOfProduct">
								</div>
								<div class="d-flex flex-row align-items-center justify-content-end element-form-org " >
									<label for="tel-phone">Телефон</label>
									<input name="telOrg" id="tel-phone" class="form-control" type="tel" value="" placeholder="Телефон">
								</div>
								<div class="down-fileOrg">
									<span><span>Загрузите файл</span></span>
									<input name="fileOrg" type="file" id="v_file" value="Загрузиите файл" class="custom-file-input"  multiple="multiple">
								</div>
								<!-- <input name="fileOrg" type="file" id="v_file" value="Загрущиите файл" class="custom-file-input"> -->

								<div class="text-center">
									<!-- <button class="org-btn" type="button">Узнать цену</button> -->
									<input id="btnWholesaleOrder" type="submit" value="Узнать цену">
								</div>

							</form>
						</div>
					</div><!-- form-partner -->
				</div><!-- comma -->
			</div><!-- row -->
		</div><!-- container -->
	</section><!-- section partners-commers-->
	<section style="padding-bottom:100px;" id="feedback">
		<div class="container">
			<h2 style="padding-top:35px;" class="text-center">Отзывы</h2>
			<div class="row">
				<div class="feedback d-flex justify-content-center align-items-center flex-row" style="width: 100%;">
					<div class="owl-carousel owl-theme  owl-feedback">
						<div class="feedback-item ">
							<p class="p-bottom-slider text-center d-block mx-auto">Заказывали пошив курток для большого танцевального
								коллектива на отчетный концерт. Хочется отметить отличное
								качество материалов и индивидуальный подход! Теперь за
								пошивом костюмов будем обращаться только в ЦЕХ!</p>
								 <div class="row padding-bottom-top-70-40px">
									 <div class="col-md-3"></div>
									 <div class="col-md-6">
										 <div class="row align-items-center">
												 <img src="img/report_01.png" class="img-slider d-block mx-auto">
												 <div class="col-md-12">
													 <p class="p-slider"><span id="bold-word">Артур Шагаев,</span><br/>тренер студии Freak Dance</p>
												 </div>
											 </div>
										 </div>
									 </div>
						</div>
						<div class="feedback-item">
							<p class="p-bottom-slider text-center d-block mx-auto">Я художница. Совсем недавно решила превратить свои
	 								работы в принты для одежды и авторские аксессуары.
	 								Футболки с рисунками очень порадовали качеством. Срочный
	 								заказ выполнили быстро, обязательно приду ещё воплощать свои идеи</p>
								 <div class="row padding-bottom-top-70-40px">
									 <div class="col-md-3"></div>
									 <div class="col-md-6">
										 <div class="row align-items-center">
												 <img src="img/report_02.png" class="img-slider d-block mx-auto">
												 <div class="col-md-12">
													<p class="p-slider"><span id="bold-word">Ульяна Айтакова,</span><br/>художница, менеджер<br/> тату-студии 69level</p>
												 </div>
											 </div>
										 </div>
									 </div>
						</div>
						<div class="feedback-item">
							<p class="p-bottom-slider text-center d-block mx-auto">Разработали и изготовили атрибутику для детской хоккейной
								 команды. Дети и родители в восторге! Помогали во всем:
								 в доработке логотипа, подборе цветов и моделей. Получилась
								 современная форма с фирменной вышивкой</p>
								 <div class="row padding-bottom-top-70-40px">
									 <div class="col-md-3"></div>
									 <div class="col-md-6">
										 <div class="row align-items-center">
												 <img src="img/report_03.png" class="img-slider d-block mx-auto">
												 <div class="col-md-12">
													 <p class="p-slider"><span id="bold-word">Артур Зайцев,</span><br/>руководитель СДЮСШОР «Молот»</p>
												 </div>
											 </div>
										 </div>
									 </div>
						</div>
						<div class="feedback-item">
							<p class="p-bottom-slider text-center d-block mx-auto">Очень порадовал современный подход к разработке
								фирменной одежды нашей компании. Быстро решают
								вопросы и вносят необходимые поправки по нашим
								пожеланиям!</p>
							<div class="row padding-bottom-top-70-40px">
								<div class="col-md-3"></div>
								<div class="col-md-6">
									<div class="row align-items-center">
										<img src="img/report_04.png" class="img-slider d-block mx-auto">
										<div class="col-md-12">
											<p class="p-slider"><span id="bold-word">Андрей Погодин,</span><br/>собственник и директор ГК Wert Lab</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div><!-- feedback -->
			</div><!-- row -->
		</div><!-- container -->
	</section>
	<section id="maps">
		<div class="container">
			<div class="row">
				<div class="map col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center flex-column align-items-start text-center-mobile">
					<h3 class="maps-text bold text-title-mobile">PrintBox - место,<br> где <span style="font-size: 35px;color:#FF001F; font-family:'Gilroy-Bold';">реализуются идеи</span></h3>
					<h5 class="text-title-mobile" style="font-size:20px; margin-bottom: 25px;">г. Пермь, ТРК «Колизей Синема», 3 этаж</h5>
					<!-- <div class="maps-yandex">
						<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A735bf2a9aa18c9d8282a66446ac0f9ac6873dc41c1aea05f1b5c2da96bbd2075&amp;max-height=350&amp;lang=ru_RU&amp;scroll=true"></script>
					</div> -->
				</div>
				<div class="photo-map col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
					<div class="maps-yandex">
						<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A735bf2a9aa18c9d8282a66446ac0f9ac6873dc41c1aea05f1b5c2da96bbd2075&amp;max-height=350&amp;lang=ru_RU&amp;scroll=true"></script>
					</div>
					<!-- <div style="max-height: 350px; "><img src="img/back-bot.jpg" style="max-width: 100%; max-height: 350px;"></div> -->
				</div>
			 </div><!--row -->
		</div><!-- container -->
	</section>
	<!-- <footer> -->
	<div class="container-fluid padding-0">
		<div class="contacts-footer" style="width: 100%;">
		<div class="row" style="max-width: 100%;">
				<div class="col-xl-5 col-lg-5 col-md-5 col-sm-7 offset-1 middle-img my-auto footer-mobile">
					<img class="logo-2 footer-mobile" src="img/logo-2.svg"><br/>
					<p class="text-center-mobile" style="color:#fff; margin-top:-11px;">г. Пермь, ТРК «Колизей Синема», 3 этаж <br/>
							+7(342)-204-07-23, printboxperm@yandex.ru</p>
						<div class="d-flex justify-content-center-footer">
							<img class="soc-net" src="img/vk.svg">
							<img class="soc-net" src="img/soc-net1.svg">
							<img class="soc-net" src="img/soc-net2.svg">
						</div>
				</div><!-- cont -->
				<div class="col-xl-5 col-lg-5 col-md-5 col-sm-7 offset-1 middle-img my-auto footer-mobile">
					<p class="bold text-center-mobile" style="color:#fff; font-family: "Gilroy-Regular";">Способы оплаты в интернет-магазине:</p>
				<div class="d-flex justify-content-center-footer flex-wrap">
					<img class="logo-payment" src="img/payment/visa.png">
					<img class="logo-payment" src="img/payment/mastercard.png">
					<img class="logo-payment" src="img/payment/webmoney.png">
					<img class="logo-payment" src="img/payment/qiwi.png">
					<img class="logo-payment" src="img/payment/yandex.png"><br/>
				</div>
					<p class="text-center-mobile" style="color:#fff; margin-top: 12px; font-family: "Gilroy-Regular";">Также Вы можете оплатить заказ наличными при получении</p>
					<!-- <img class="soc-net" src="img/vk.svg">
					<img class="soc-net" src="img/soc-net1.svg">
					<img class="soc-net" src="img/soc-net2.svg">
					<p style="color:#fff">г. Пермь, ТРК «Колизей Синема», 3 этаж <br/>
+7(342)-204-07-23, printboxperm@yandex.ru</p> -->
				</div>
			</div><!-- contacts-footer -->
		</div><!-- row -->
	</div><!-- container -->
	<!-- </footer> -->


	<script src="js/html2canvas.min.js"></script>
	<script src="js/constructor.js"></script>
	<script src="js/ajax.js"></script>
	<script src="js/touch.js"></script>
<!-- 	<script src="js/senedemail.js"></script> -->
</body>
</html>
