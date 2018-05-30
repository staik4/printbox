$(document).ready(function(){
	let gender, pos, color, first__choice = "";
	let numCanvas = 0;

	let priceList = {
		"futbolka": {
			"text": {
				"front": {
					"A4":"500",
					"A5":"350",
					"A6":"250",
					"A7":"150"
				},
				"back": {
					"A3":"200",
					"A4":"200",
					"A5":"200",
					"A6":"200"
				}
			},
			"number": {
				"front" : {
					"A4":"500",
					"A5":"350",
					"A6":"250",
					"A7":"150"
				},
				"back":{
					"A3":"200",
					"A4":"200",
					"A5":"200",
					"A6":"200"
				}
			}
		},
		"polo": {
			"text": {
				"front": {
					"A4":"500",
					"A5":"350",
					"A6":"250",
					"A7":"150"
				},
				"back": {
					"A3":"650",
					"A4":"500",
					"A5":"350",
					"A6":"250"
				}
			},
			"number": {
				"front": {
					"A4":"500",
					"A5":"350",
					"A6":"250",
					"A7":"150"
				},
				"back": {
					"A3":"200",
					"A4":"200",
					"A5":"200",
					"A6":"200"
				}
			}
		},
		"tolstovka": {
			"text": {
				"front": {
					"A4":"500",
					"A5":"350",
					"A6":"250",
					"A7":"150"
				},
				"back": {
					"A4":"500",
					"A5":"350",
					"A6":"250",
					"A7":"150"
				}
			},
			"number": {
				"front": {
					"A4":"500",
					"A5":"350",
					"A6":"250",
					"A7":"150"
				},
				"back": {
					"A3":"200",
					"A4":"200",
					"A5":"200",
					"A6":"200"
				}
			}
		}
	}

	console.log(priceList);

	let activeJackDaw = "img/active_jackdaw.svg";
	let notActiveJackDaw = "img/not_active_jackdaw.svg";
	let namesChoice = {
		"futbolka":"Футболка",
		"polo":"Поло",
		"tolstovka":"Толстовка",
		"bomber":"Бомбер",
		"switshot":"Свитшот",
		"cap":"Кепка",
		"snep":"Снеп",
		"backpack": "Рюкзак"
	};//array of goods name

	var colorNames = {
		"white": "#FFF",
		"black": "#000",
		"golden": "#C49F03",
		"gray": "#D1D1D1",
		"red": "#FF0000",
		"blue": "#505EFF",
		"nocolor": "#FFF"
	};//array of main colors


	setTimeout(function(){
		var numberMainWidth = $(".number-main").width();
		var numberMainHeight = $(".number-main").height();
		var imgChoiceWidth = $(".img-choice").width();
		var imgChoiceHeight = $(".img-choice").height();
		var textMainWidth = $(".text-main").width();
		var textMainHeight = $(".text-main").height();
		var left = imgChoiceWidth/2 - 50;
		var topTextMain = imgChoiceHeight/2 - textMainHeight/2;
		var leftNumber = imgChoiceWidth/2 - 50;
		var topNumberMain = imgChoiceHeight/2 - textMainHeight/2 - textMainHeight;
		console.log(imgChoiceWidth, left, textMainWidth, textMainHeight, topTextMain);
		$(".text-main").css({"top":topTextMain, "left": left});
		$(".text-main span").css({"font-size":"26px"});
		$(".number-main").css({"top": topNumberMain, "left":leftNumber});
		$(".number-main span").css({"font-size":"26px"});
	}, 1500);//fix position of number and text-main

	var wrapper = $('.wrapper');
	var visible = $('.visible-slide-part');
	var slideHeight = visible.height();
	var slideWidth = visible.width();
	//console.log(slideWidth);
	wrapper.width(wrapper.children().length*visible.width()); // width of slider
	$(".slide").width(slideWidth);//width of slide

	$(".choice").each(function(){
		$(this).click(function(){
			$(".goods").children().removeClass("choice-active");
			$(this).addClass("choice-active");
			var nextSlide = $(".item-slider-choice").data('slide');
			nextSlide = nextSlide + 1;
			console.log(nextSlide);
			var next = slideWidth;
			wrapper.animate({'margin-left': '-='+next}, 700);
			var currentSlide = $(".active").data("slide");
			$(".wrapper").children().removeClass('active');
			$(".wrapper [data-slide="+nextSlide+"]").addClass('active');


			if(nextSlide == 1){
				$(".choice-menu").children().removeClass("item-slider-choice-active");
				$(".make-constructor").addClass("item-slider-choice-active");
				var first__choice = $(".choice-active").data("choice");
					console.log("first__choice",first__choice);

				if (first__choice == "futbolka") {
					$(".img-choice-front").css({"background-size": "80%"});
					$(".img-choice-back").css({"background-size": "80%"});
					$(".change-color-product [data-colorproduct ='red']").css({"display":"none"});
					$(".change-color-product [data-colorproduct ='golden']").css({"display":"none"});
					$(".change-color-product [data-colorproduct ='blue']").css({"display":"none"});

				} else if (first__choice == "polo") {
					$(".img-choice-front").css({"background-size": "60%"});
					$(".img-choice-back").css({"background-size": "60%"});
					$(".change-color-product [data-colorproduct ='gray']").css({"display":"none"});
					$(".change-color-product [data-colorproduct ='golden']").css({"display":"none"});
					$(".change-color-product [data-colorproduct ='blue']").css({"display":"none"});
				}else if(first__choice == "tolstovka") {
					$(".img-choice-front").css({"background-size": "51%"});
					$(".img-choice-back").css({"background-size": "51%"});
					// $("#btn-women-gender").css({"display":"none"});
					$("#btn-women-gender").attr("disabled", true);
					$("#btn-women-gender").css({"opacity": "0.5"});

					$(".gender").removeClass('justify-content-between');
					$(".gender").css({"justify-content":"center"});
					$(".change-color-product [data-colorproduct ='red']").css({"display":"none"});
					$(".change-color-product [data-colorproduct ='golden']").css({"display":"none"});
					$(".change-color-product [data-colorproduct ='blue']").css({"display":"none"});
				} else if (first__choice == "bomber") {
					$(".img-choice-front").css({"background-size": "60%"});
					$("#btn-women-gender").attr("disabled", true);
					$("#btn-women-gender").css({"opacity": "0.5"});

					$(".img-choice-back").css({"background-size": "60%"});

					$(".change-color-product").css({"display": "none"});
					$(".change-color-product").removeClass("d-flex");
				} else if (first__choice == "switshot") {
					$(".img-choice-front").css({"background-size": "60%"});
					$(".change-color-product [data-colorproduct ='red']").css({"display":"none"});
					$(".change-color-product [data-colorproduct ='golden']").css({"display":"none"});
					$(".change-color-product [data-colorproduct ='blue']").css({"display":"none"});

					$("#btn-women-gender").attr("disabled", true);
					$("#btn-women-gender").css({"opacity": "0.5"});
				}else if (first__choice == "cap") {
					$(".img-choice-front").css({"background-size": "60%"});
					$(".img-choice-back").css({"background-size": "60%"});

					$(".change-color-product [data-colorproduct ='red']").css({"display":"none"});
					$(".change-color-product [data-colorproduct ='golden']").css({"display":"none"});
					$(".change-color-product [data-colorproduct ='blue']").css({"display":"none"});
					$(".change-color-product [data-colorproduct ='gray']").css({"display":"none"});

					$("#btn-women-gender").attr("disabled", true);
					$("#btn-women-gender").css({"opacity": "0.5"});
				}else if (first__choice == "snep"){
					$(".img-choice-front").css({"background-size": "60%"});
					$(".img-choice-back").css({"background-size": "60%"});

					$(".change-color-product [data-colorproduct ='red']").css({"display":"none"});
					$(".change-color-product [data-colorproduct ='golden']").css({"display":"none"});
					$(".change-color-product [data-colorproduct ='blue']").css({"display":"none"});
					$(".change-color-product [data-colorproduct ='gray']").css({"display":"none"});

					$("#btn-women-gender").attr("disabled", true);
					$("#btn-women-gender").css({"opacity": "0.5"});
				}else if (first__choice == "backpack"){
					$(".img-choice-front").css({"background-size": "60%"});
					$(".img-choice-back").css({"background-size": "60%"});

					$(".change-color-product [data-colorproduct ='red']").css({"display":"none"});
					$(".change-color-product [data-colorproduct ='golden']").css({"display":"none"});
					$(".change-color-product [data-colorproduct ='white']").css({"display":"none"});

					$("#btn-women-gender").attr("disabled", true);
					$("#btn-women-gender").css({"opacity": "0.5"});

					$("#btn-pos-draw").attr("disabled", true);
					$("#btn-pos-draw").css({"opacity": "0.5"});

					$(".tab-size").css({"display":"none"});
				}//image definition and its functionality


				$('#img-choice-front').removeClass('hide');
				$('#img-choice-back').addClass('hide');

				$('.hide-enter-par-front').removeClass('hide');
				$('.hide-enter-par-back').addClass('hide');

				//let pos = $(".choice-active").data("pos");
				let pos = $('.active-btn-choice-gen-draw.active-btn-choice-position').data('position');
				console.log('pos',pos);
				//let gender = $(".choice-active").data("gender");
				let gender = $('.active-btn-choice-gen-draw').data('gender')
				// let colorsss = $(".choice-active").data("color");
				let color = $(".active-choice-product-color").data('colorproduct');
				//console.log(first__choice);
				if (first__choice == undefined){
					first__choice = "futbolka__front";
					$(".img-choice-"+pos).css({"background-image":"url(img/"+pos+"/"+first__choice+"/"+gender+"/"+color+"/"+first__choice+"__"+pos+".jpg)", "background-repeat":"no-repeat", "background-position": "center","height": "100%"});
				}else{
					$(".img-choice-"+pos).css({"background-image":"url(img/"+pos+"/"+first__choice+"/"+gender+"/"+color+"/"+first__choice+"__"+pos+".jpg)", "background-repeat":"no-repeat", "background-position": "center","height": "100%"});
					//	$(".img-choice").css({"background-image":"url(img/"+pos+"/"+first__choice+"/"+gender+"/"+color+"/"+first__choice+"__"+pos+".jpg)", "background-repeat":"no-repeat", "background-position": "center"});
					$(".img-choice-"+pos).attr("data-gender", gender);
					$(".img-choice-"+pos).attr("data-pos", pos);
					// $(".img-choice").attr("data-prcolor", colorsss);
					$(".img-choice-"+pos).attr("data-choice", first__choice);

					//console.log(gender, pos, color);
					console.log("url(img/"+pos+"/"+first__choice+"/"+gender+"/"+color+"/"+first__choice+"__"+pos+".jpg)");
				}
				for(var key in namesChoice) {
					if(key == $(".choice-active").data("choice")) {
						$(".title-choice span").html(namesChoice[key]+": ");
						$(".price .nameChoice").html($(".choice-active").data("price"));
						$(".img-choice-"+pos).attr("data-superoldoprice",$(".choice-active").data("price"));
					}//insert name of the selected good and its price
				}//loop for finding the accordance in array of goods name
				$("#result").html("");


			}


		});
	});//choice active of goods

	$("#packing-btn").click(function(){
		console.log("packing");
		var nextSlide = $(".item-slider-choice").data('slide');
		nextSlide = nextSlide +1+1;
		console.log(nextSlide);
		var next = slideWidth;
		let curPrice = $('.nameChoice').text();
		wrapper.animate({'margin-left': '-='+next}, 700);
		var currentSlide = $(".active").data("slide");
		$(".wrapper").children().removeClass('active');
		$(".wrapper [data-slide="+nextSlide+"]").addClass('active');
		$(".choice-menu").children().removeClass("item-slider-choice-active");
		$(".packing ").addClass("item-slider-choice-active");
		$('.text-price-order').html(curPrice);


	});// click on packing button

	$(".item-slider-choice").each(function(){
		var next;
		$(this).click(function(){

			$(".choice-menu").children().removeClass("item-slider-choice-active");
			$(this).addClass("item-slider-choice-active");

			var nextSlide = $(this).data('slide');
			next = nextSlide * slideWidth;
			var currentSlide = $(".active").data("slide");
			$(".wrapper").children().removeClass('active');
			$(".wrapper [data-slide="+nextSlide+"]").addClass('active');
			//console.log(currentSlide, nextSlide);
			if (currentSlide > nextSlide) {
				var next = (currentSlide-nextSlide)*slideWidth;
				wrapper.animate({'margin-left': '+='+next}, 700);
			}else {
				var next = (nextSlide-currentSlide)*slideWidth;
				wrapper.animate({'margin-left': '-='+next}, 700);
			}//work of slider

			if(nextSlide == 0) {
				$("#btn-women-gender").css({"opacity":"1"});

				$(".gender").addClass('justify-content-between');
				$("#btn-women-gender").attr("disabled", false);

				$("#btn-pos-draw").css({"opacity":"1"});
				$("#btn-pos-draw").attr("disabled", false);
				$(".change-color-product").children().removeClass("change-color-product");
				$(".change-color-product [data-colorproduct ='black']").addClass("active-choice-product-color");
				$(".change-color-product .color").css({"display":"block"});
				$(".change-color-product [data-colorproduct ='red']").css({"display":"block"});
				$(".change-color-product [data-colorproduct ='golden']").css({"display":"block"});
				$(".change-color-product [data-colorproduct ='blue']").css({"display":"block"});

				$(".change-color-product").css({"display": "flex"});

				$(".tab-size").css({"display":"block"});

				$("[data-position='front']").addClass('active-btn-choice-gen-draw');
				$("[data-position='front']").addClass('active-btn-choice-position');

				$("[data-position='back']").removeClass('active-btn-choice-gen-draw');
				$("[data-position='back']").removeClass('active-btn-choice-position')

				$("button[data-gender='man']").addClass('active-btn-choice-gen-draw');
				$("button[data-gender='women']").removeClass('active-btn-choice-gen-draw');

				$('.img-choice-back').css({"background-image":""});
				//console.log($("[data-position='front']"));

			}

			if(nextSlide == 1){
				var first__choice = $(".choice-active").data("choice");
				//let pos = $(".choice-active").data("pos");
				let gender = $(".choice-active").data("gender");
				let pos = $('.active-btn-choice-gen-draw').data('position');
				console.log('pos',pos);
				// let colorsss = $(".choice-active").data("color");
				let color = $(".active-choice-product-color").data('colorproduct');
				//console.log(first__choice);
				if (first__choice == undefined){
					first__choice = "futbolka__front";
					$(".img-choice-"+pos).css({"background-image":"url(img/"+pos+"/"+first__choice+"/"+gender+"/"+color+"/"+first__choice+"__"+pos+".jpg)", "background-repeat":"no-repeat", "background-position": "center","height": "100%"});
				}else{
					$(".img-choice-"+pos).css({"background-image":"url(img/"+pos+"/"+first__choice+"/"+gender+"/"+color+"/"+first__choice+"__"+pos+".jpg)", "background-repeat":"no-repeat", "background-position": "center","height": "100%"});
					// var src = "img/front/"+first__choice+".svg";
					// $("#main-img").attr("src", src);
					// $("#main-img").css({"position": "absolute", "width": "80%"});
				}
				for(var key in namesChoice) {
					if(key == $(".choice-active").data("choice")) {
						$(".title-choice span").html(namesChoice[key]+": ");
						$(".price .nameChoice").html($(".choice-active").data("price"));
					}//insert name of the selected good and its price
				}//loop for finding the accordance in array of goods name
				$("#result").html("");
				console.log($(".price .nameChoice"));

			} else if(nextSlide == 3){
				let widthCapture = 0;
				let heightCapture = 0;
				//let curPrice = $('.nameChoice').text();

				let curPrice = parseInt($('.nameChoice').text())+parseInt($('.radio-packing-choice label .active-radio').data('pricepacking'));
				$('.text-price-order').html(curPrice);
				$('#packing-container').css({"height":"440px"});
				//$('.item-choice ').css({"height":"440px"})

				function clones(){
					var clone = $("#capture").clone(true);
					$("#result").css({"width":heightCapture, "height":heightCapture*2});
					clone.appendTo("#result");

					$("#result .img-choice-front").css({"height": "440px"});
					$("#result .img-choice .front-text-number-img").css({"display": "block"});

					var clone2 = $("#capture-2").clone(true);

					clone2.appendTo("#result");

					$("#result .img-choice-back").css({"height": "440px"});

					//console.log(clone);
				};//clone capture for result

				console.log("wi", $("#capture").height());
				if( $("#capture").height() == 0) {
					widthCapture = $("#capture-2").width();
					heightCapture = $("#capture-2").height();
					clones();
				} else {
					widthCapture = $("#capture").width();
					heightCapture = $("#capture").height();
					clones()
				};//define hideigh back side on result div
				let priceOrderResult = $('.nameChoice').text()
				let nameOrderResult = $('.title-choice span').text();
				let packOrderResult = $('.radio-packing-choice span.active-radio').parent().text();
				console.log('packing',packOrderResult,$('.radio-packing-choice span.active-radio').parent());

				let OrderResult = nameOrderResult + " + " + packOrderResult;
				$('.nameOrderResult').html(OrderResult);
				$('.text-price-order').html(priceOrderResult);
			}//insert hte selected picture in next slide
		});//changes slides
	});//main slider

	$(".gender button").each(function(){
		$(this).click(function(){
			$(".gender").children().removeClass('active-btn-choice-gen-draw');
			$(this).addClass('active-btn-choice-gen-draw');
			let gender = $(".active-btn-choice-gen-draw").data("gender");
			let pos = $(".active-btn-choice-position").data("position");
			console.log("gender", gender);

			var first__choice = $(".choice-active").data("choice");

			let color = $(".active-choice-product-color").data('colorproduct');
			//console.log("color", color);
			console.log("pos", pos);
			if (gender == "man") {
				let gender = "man";
				console.log(gender, pos, color, first__choice)
				$(".img-choice-"+pos).css({"background-image":"url(img/"+pos+"/"+first__choice+"/"+gender+"/"+color+"/"+first__choice+"__"+pos+".jpg)", "background-repeat":"no-repeat", "background-position": "center","height": "100%"});
				$(".img-choice-"+pos).attr("data-gender", gender);
				$(".img-choice-"+pos).attr("data-pos", pos);
				$(".img-choice-"+pos).attr("data-prcolor", color);
				$(".img-choice-"+pos).attr("data-choice", first__choice);

			}else {
				let gender = "women";
				// let color = "white";
				let pos = $(".active-btn-choice-position").data("position");
				var first__choice = $(".choice-active").data("choice");


				$(".img-choice-"+pos).css({"background-image":"url(img/"+pos+"/"+first__choice+"/"+gender+"/"+color+"/"+first__choice+"__"+pos+".jpg)", "background-repeat":"no-repeat", "background-position": "center","height": "100%"});
				$(".img-choice-"+pos).attr("data-gender", gender);
				$(".img-choice-"+pos).attr("data-pos", pos);
				$(".img-choice-"+pos).attr("data-prcolor", color);
				$(".img-choice-"+pos).attr("data-choice", first__choice);
			}//condition for gender

		});//click gender button
	});//function for gender choice

	$(".position-drawing button").each(function(){

		$(this).click(function(){
			console.log("kuku", $(".img-choice").data("prcolor"));
			$(".position-drawing").children().removeClass('active-btn-choice-gen-draw');
			$(".position-drawing").children().removeClass('active-btn-choice-position');
			$(this).addClass('active-btn-choice-gen-draw');
			$(this).addClass('active-btn-choice-position');
			var position = $(".active-btn-choice-position").data("position");
			console.log("position", position);

			let gender = $(".active-btn-choice-gen-draw").data("gender");
			var first__choice = $(".choice-active").data("choice");
			//let first__choice = $(".img-choice").data("choice");
			//let colorss = $(".img-choice").data("prcolor");
			let color = $(".active-choice-product-color").data('colorproduct');
			//console.log("color position-drawing button", color);
			if (position == "front") {
				let pos = "front";

				$("#img-choice-front").removeClass("hide");

				$("#img-choice-back").addClass("hide");


				//var first__choice = $(".choice-active").data("choice") + "__front";
				$(".img-choice-"+pos).css({"background-image":"url(img/"+pos+"/"+first__choice+"/"+gender+"/"+color+"/"+first__choice+"__"+pos+".jpg)", "background-repeat":"no-repeat", "background-position": "center","height": "100%"});

				$(".img-choice-"+pos).attr("data-gender", gender);
				$(".img-choice-"+pos).attr("data-pos", pos);
				$(".img-choice-"+pos).attr("data-prcolor", color);
				$(".img-choice-"+pos).attr("data-choice", first__choice);

				$(".back-text-number-img").css({"display":"none"});
				$(".front-text-number-img").css({"display":"flex"});

				$(".hide-enter-par-front").removeClass("hide");
				$(".hide-enter-par-back").addClass("hide");


				$(".size-choice-radio-front").removeClass('hide');
				$(".size-choice-radio-back").addClass('hide');
			}else if(position == "back"){
				let pos = "back";
				$("#img-choice-front").addClass("hide");

				$("#img-choice-"+pos).removeClass("hide");

				$(".img-choice-"+pos).css({"background-image":"url(img/"+pos+"/"+first__choice+"/"+gender+"/"+color+"/"+first__choice+"__"+pos+".jpg)", "background-repeat":"no-repeat", "background-position": "center","height": "100%"});

				$(".img-choice-"+pos).attr("data-gender", gender);
				$(".img-choice-"+pos).attr("data-pos", pos);
				$(".img-choice-"+pos).attr("data-prcolor", color);
				$(".img-choice-"+pos).attr("data-choice", first__choice);

				$(".back-text-number-img").css({"display":"flex"});
				$(".front-text-number-img").css({"display":"none"});

				$(".hide-enter-par-front").addClass("hide");
				$(".hide-enter-par-back").removeClass("hide");


				$(".size-choice-radio-back").removeClass('hide');
				$(".size-choice-radio-front").addClass('hide');
			}//condition for position
		});//click for change position
	});//function for position draweing

	$

	$(".change-choice-front .change-choice-text .color-text .color").each(function(){
		var backgroundIconColor = $(this).data('colortext');
		//console.log($(this));
		for (var key in colorNames){
			if (key == backgroundIconColor){
				$(this).css({"background-color": colorNames[backgroundIconColor]});
			};
		};

		$(this).click(function(){
			$(".change-choice-front .change-choice-text .color-text").children().removeClass('active-choice-text-color');
			$(this).addClass("active-choice-text-color");
			var color = $(".active-choice-text-color").data('colortext');
			//console.log(color);
			$(".front-text-number-img .text-main span").css({"color":colorNames[color]})
		});
	});//function for distributions of colors icons under the text-choice front

	$(".change-choice-front .change-choice-number .color-number .color").each(function(){
		var backgroundIconColor = $(this).data('colortext');
		//console.log($(this));
		for (var key in colorNames){
			if (key == backgroundIconColor){
				$(this).css({"background-color": colorNames[backgroundIconColor]});
			}
		}
		$(this).click(function(){
			$(".change-choice-front .change-choice-number .color-number").children().removeClass('active-choice-number-color');
			$(this).addClass("active-choice-number-color");
			var color = $(".active-choice-number-color").data('colortext');
			$(".front-text-number-img .number-main span").css({"color":colorNames[color]});
			console.log(color);
		});
	});//function for distributions of colors icons under the number-choice front

	$(".sizes .size-box").each(function(){
		$(this).click(function(){
			$(".sizes").children().removeClass("choice-size");
			$(this).addClass("choice-size");

		});
	});

	$(".ui-resizable-handle").mousedown(function(){
		alert("yes");
	})


	//=======================front-choice img=======================//
	let k = true;
	function pricePlusePrice() {
		let pos = $(".active-btn-choice-position").data('position');
		let superOldPrice = parseInt($(".nameChoice").text());
		price = superOldPrice + parseInt(priceList[$(".img-choice-"+pos).data('choice')]["text"][pos][$(".size-choice-radio-"+pos+" .label-size-btn .active-radio").data('size')]);
		//console.log(typeof(superOldPrice),typeof(price),'price', typeof(price), 'superOldPrice', typeof(superOldPrice),"pos", typeof(parseInt(priceList[$(".img-choice-"+pos).data('choice')]["text"][pos][$(".label-size-btn .active-radio").data('size')])));
		console.log(priceList[$(".img-choice-"+pos).data('choice')]["text"][pos][$(".size-choice-radio-"+pos+" .label-size-btn .active-radio").data('size')], "pos", pos);
		$('.price .nameChoice').html(price);
	};//price plus

	function priceMinusPrice() {
		let pos = $(".active-btn-choice-position").data('position');
		let superOldPrice = parseInt($(".nameChoice").text());
		price = superOldPrice - parseInt(priceList[$(".img-choice-"+pos).data('choice')]["text"][pos][$(".size-choice-radio-"+pos+" .label-size-btn .active-radio").data('size')]);
		console.log('price', price, 'superOldPrice', superOldPrice, "pos",priceList[$(".img-choice-"+pos).data('choice')]["text"][pos][$(".size-choice-radio-"+pos+".label-size-btn .active-radio").data('size')]);
		$('.price .nameChoice').html(price);
	};//price minus

	$(".change-choice-front .change-choice-text .enter-text-choice").focus(function(){
		if($("#change-text").val() != "") {
			k=true;
		}else {
			k=false;
		};

		$(".front-text-number-img .text-main .ui-resizable-handle").css({"display":"block"})
		$('.front-text-number-img .text-main .ui-rotatable-handle.ui-draggable').css({"display":"block"});

		$(".front-text-number-img .text-main span").css({"font-size":"20px"});
		var textMainWidth = $(".front-text-number-img .text-main").width();
		var textMainHeight = $(".front-text-number-img .text-main").height();
		var imgChoiceWidth = $(".img-choice").width();
		var imgChoiceHeight = $(".img-choice").height();
		var left = imgChoiceWidth/2 - 50;
		var topTextMain = imgChoiceHeight/2 - textMainHeight/2;
		var fontStyle = textMainWidth/3.4;
		fontStyle = fontStyle + "px";
		var textMainWidthSpan = $(".front-text-number-img .text-main span").width();
		var textMainHeightSpan = $(".front-text-number-img .text-main span").width();

		$(".front-text-number-img .text-main").css({"z-index":"1000","border":"0.7px dashed #FF0202","width": textMainWidth, "height":textMainHeight, "cursor":"move","padding":"0","left":left, "top": topTextMain});
		$(".item-enter-text").css({"display":"block"});
		if($('.change-choice-front .change-choice-text label div').hasClass('active-jackdaw') ==  true){
			$("#change-text").bind("change paste keyup", function(ev) {
				var enter = "";
				enter = $(this).val();
				$(".front-text-number-img .text-main span").html(enter);
			});
		}else{
			$("#change-text").bind("change paste keyup", function(ev) {
			 	var enter = ""
			 	enter = $(this).val();

			 	$(".front-text-number-img .text-main span").html(enter);
				//console.log(k,ev.keyCode);
				if( ev.keyCode == 8 && enter.length == 0) {
						$(".img-active-front-text img").attr("src", notActiveJackDaw);
						$(".img-active-front-text").removeClass('active-jackdaw');

						if (k == true){
							priceMinusPrice();
							k = false;
						}else {

						}
						//console.log(enter.length, k,ev.keyCode);
				} else if (enter.length > 0 && ev.keyCode == 8){
					//console.log(enter.length, k,ev.keyCode);
				} else if(enter.length > 0) {
					$(".img-active-front-text img").attr("src", activeJackDaw);
					$(".img-active-front-text").addClass('active-jackdaw');
					if (k==false) {
						pricePlusePrice();
						k = true;
					}else {

					}
					//console.log(enter.length, k,ev.keyCode);
				}

			});//keyup text
		};//check active jackdaw

	});//focus front text

	$(".front-text-number-img .text-main").resize(function(){
		var textMainWidth = $(".text-main").width();
		var textMainHeight = $(".text-main").height();
		var fontSize = textMainWidth/3.4;
		fontSize = fontSize + "px";
		$(".front-text-number-img .text-main span").css({"font-size":fontSize});
	});//font text on front

	$(".front-text-number-img .text-main").mouseover(function(){
		var x = 100;
		var y = 30;
		//console.log("kuku");
		//$(this).rotatable();
		$(this).draggable({
			containment: "parent"
		});
		$(this).resizable({
			aspectRatio: x / y
		});
		$(this).rotatable();
		// $(this).css({"border":"2px dashed gray"});

	});//install resizeble and draggable on div main-text

	$(".front-text-number-img .text-main").mouseout(function(){
		// $(this).css({"border":"0"});
		// $(".front-text-number-img .text-main .ui-resizable-handle").css({"display":"none"})
	});

	$(".text-main").attr("tabindex",-1);
	$(".text-main span").attr("tabindex",-1);
	$(".colll .img-choice-front .front-text-number-img .text-main").mousedown(function (){
		$(".front-text-number-img .text-main .ui-resizable-handle").css({"display":"block"})
		$('.ui-rotatable-handle.ui-draggable').css({"display":"block"});

	});

	$(document).mousedown(function (e){
		var divText = $(".front-text-number-img .text-main");
		var divNumber = $(".front-text-number-img .number-main");
		if (!$(e.target).closest(divText).length) {
			//console.log("focusout")
			divText.css({"border":"0"});
			$(".front-text-number-img .text-main .ui-resizable-handle").css({"display":"none"});
			$(".front-text-number-img .text-main").css({"z-index":"90"});
			$('.front-text-number-img .text-main .ui-rotatable-handle.ui-draggable').css({"display":"none"});
			// $(".back-text-number-img .text-main .ui-resizable-handle").css({"display":"none"})
			// $(".back-text-number-img .text-main").css({"z-index":"90"})
		};
		if(!$(e.target).closest(divNumber).length){
			divNumber.css({"border":"0"});
			$(".front-text-number-img .number-main .ui-resizable-handle").css({"display":"none"});
			$(".front-text-number-img .number-main").css({"z-index":"90"});

			$('.front-text-number-img .number-main .ui-rotatable-handle.ui-draggable').css({"display":"none"});

		};
	});

	$(".change-choice-front #change-number").focus(function(){
		$(".item-enter-text").css({"display":"block"});
		$(".front-text-number-img .number-main .ui-resizable-handle").css({"display":"block"});
		$('.front-text-number-img .number-main .ui-rotatable-handle.ui-draggable').css({"display":"block"});
		$(".front-text-number-img .number-main").css({"z-index":"1000"});
		if($("#change-number").val() != "") {
			k=true;
		}else {
			k=false;
		};

		$(".front-text-number-img .number-main span").css({"font-size":"18px"});
		var numberMainWidth = $(".front-text-number-img .number-main").width();
		var numberMainHeight = $(".front-text-number-img .number-main").height();
		var imgChoiceWidth = $(".img-choice-front").width();
		var imgChoiceHeight = $(".img-choice-front").height();
		var textMainWidth = $(".front-text-number-img .number-main").width();
		var textMainHeight = $(".front-text-number-img .number-main").height();
		var left = imgChoiceWidth/2 - 50;
		var topTextMain = imgChoiceHeight/2 - textMainHeight/2 - textMainHeight;

		$(".front-text-number-img .number-main span").css({"font-size":"26px"});

		$(".front-text-number-img .number-main").css({"border":"0.7px dashed #FF0202","width": textMainWidth, "height":textMainHeight, "cursor":"move","padding":"0"});
		// $(".front-text-number-img .number-main span").css({"width": "100px", "height":"30px",})
			if($('.change-choice-front .change-choice-number label div').hasClass('active-jackdaw') ==  true){
				$(".change-choice-front #change-number").bind("change paste keyup", function(ev) {
					let enter = "";
					enter = $(this).val();
					$(".front-text-number-img .number-main span").html(enter);
				});
			}else {
				$(".change-choice-front #change-number").bind("change paste keyup", function(ev) {
					let enter = ""
					enter = $(this).val();
					$(".front-text-number-img .number-main span").html(enter);
					if( ev.keyCode == 8 && enter.length == 0) {
							$(".img-active-front-number img").attr("src", notActiveJackDaw);
							$(".img-active-front-number").removeClass('active-jackdaw');
							console.log(enter.length, k,ev.keyCode);

							if (k == true){
								priceMinusPrice();
								k = false;
							}else {

							}
							console.log(enter.length, k,ev.keyCode);
					} else if (enter.length > 0 && ev.keyCode == 8){
						console.log(enter.length, k,ev.keyCode);
					} else if(enter.length > 0) {
						$(".img-active-front-number img").attr("src", activeJackDaw);
						$(".img-active-front-number").addClass('active-jackdaw');
						if (k==false) {
							pricePlusePrice();
							k = true;
						}else {

						}
						console.log(enter.length, k,ev.keyCode);
					}
				});
			};

		$(".front-text-number-img .number-main").resize(function(){
			var numberMainWidth = $(".front-text-number-img .number-main").width();
			var numberMainHeight = $(".number-main").height();
			var fontSize = numberMainWidth/3.4;
			fontSize = fontSize + "px";
			$(".front-text-number-img .number-main span").css({"font-size":fontSize});
		});

	});

	$(".front-text-number-img .number-main").mouseover(function(){
		var x = 100;
		var y = 30;
		//console.log("kuku");
		$(this).draggable({
			containment: "parent"
		});
		$(this).resizable({
			aspectRatio: x / y
		});
		$(this).rotatable();
		// $(this).css({"border":"2px dashed gray"});
		// $(".front-text-number-img .number-main .ui-resizable-handle").css({"display":"block"})
	});

	$(".front-text-number-img .number-main").mouseout(function(){
		// $(this).css({"border":"0"});
		// $(".front-text-number-img .number-main .ui-resizable-handle").css({"display":"none"})
	});

	$(".front-text-number-img .text-main").mousedown(function(){
		$(this).css({"border":"0.7px dashed #FF0202"});
	});

	$(".front-text-number-img .number-main").mousedown(function(){
		$(this).css({"border":"0.7px dashed #FF0202"});
		$(".front-text-number-img .number-main .ui-resizable-handle").css({"display":"block"})
		$('.ui-rotatable-handle.ui-draggable').css({"display":"block"});
	});

	//back-choice img

	$(".change-choice-back .change-choice-text .enter-text-choice").focus(function(){
		if($("#change-text-back").val() != "") {
			k=true;
		}else {
			k=false;
		};
		$(".back-text-number-img .text-main .ui-resizable-handle").css({"display":"block"})
		$('.back-text-number-img .text-main .ui-rotatable-handle.ui-draggable').css({"display":"block"});
		let textMainWidth = $(".text-main").width();
		let textMainHeight = $(".text-main").height();
		let imgChoiceWidth = $(".img-choice-back").width();
		let imgChoiceHeight = $(".img-choice-back").height();
		let left = imgChoiceWidth/2 - 50;
		let topTextMain = imgChoiceHeight/2 - textMainHeight/2;
		let fontStyle = textMainWidth/3.4;
		fontStyle = fontStyle + "px";
		$(".back-text-number-img .text-main").css({"z-index":"1000","border":"0.7px dashed #FF0202","width": textMainWidth, "height":textMainHeight, "cursor":"move","padding":"0"});

		if($('.change-choice-back .change-choice-text label div').hasClass('active-jackdaw') ==  true){
			$(".change-choice-back #change-text-back").bind("change paste keyup", function(ev) {
				let enter = "";
				enter = $(this).val();
				$(".back-text-number-img .text-main span").html(enter);
			});

		}else {
			$(".change-choice-back #change-text-back").bind("change paste keyup", function(ev) {
				let enter = ""
				enter = $(this).val();
				$(".back-text-number-img .text-main span").html(enter);
				if( ev.keyCode == 8 && enter.length == 0) {
						$(".img-active-back-text img").attr("src", notActiveJackDaw);
						$(".img-active-back-text").removeClass('active-jackdaw');
						console.log(enter.length, k,ev.keyCode);

						if (k == true){
							priceMinusPrice();
							k = false;
						}else {

						}
						console.log(enter.length, k,ev.keyCode);
				} else if (enter.length > 0 && ev.keyCode == 8){
					console.log(enter.length, k,ev.keyCode);
				} else if(enter.length > 0) {
					$(".img-active-back-text img").attr("src", activeJackDaw);
					$(".img-active-back-text").addClass('active-jackdaw');
					if (k==false) {
						pricePlusePrice();
						k = true;
					}else {

					}
					console.log(enter.length, k,ev.keyCode);
				}
			});
		};

	});
	$(".back-text-number-img .text-main").mousedown(function(){
		$(this).css({"border":"0.7px dashed #FF0202"});
		$(".back-text-number-img .text-main .ui-resizable-handle").css({"display":"block"})
	});
	$(".back-text-number-img .text-main").resize(function(){
		let textMainWidth = $(".back-text-number-img .text-main").width();
		let textMainHeight = $(".back-text-number-img .text-main").height();
		let fontSize = textMainWidth/3.4;
		fontSize = fontSize + "px";
		$(".back-text-number-img .text-main span").css({"font-size":fontSize});
	});

	$(".back-text-number-img .text-main").mouseover(function(){
		let x = 100;
		let y = 30;
		//console.log("kuku");
		$(this).draggable({
			containment: "parent"
		});
		$(this).resizable({
			aspectRatio: x / y
		});
		$(this).rotatable();
		// $(this).css({"border":"2px dashed gray"});
		// $(".back-text-number-img .text-main .ui-resizable-handle").css({"display":"block"})
	});
	$(".back-text-number-img .text-main").mouseout(function(){
		//back $(this).css({"border":"0"});
		// $(".back-text-number-img .text-main .ui-resizable-handle").css({"display":"none"})
	});

	$(".back-text-number-img .text-main").attr("tabindex",-1);
	$(".back-text-number-img .text-main span").attr("tabindex",-1);


	$(document).mousedown(function (e){
		let divText = $(".back-text-number-img .text-main");
		let divNumber = $(".back-text-number-img .number-main");
		let packDivText = $('.img-packing-choice .main-text-packing')
		if (!$(e.target).closest(divText).length) {
			//console.log("focusout")
			divText.css({"border":"0"});
			$(".back-text-number-img .text-main .ui-resizable-handle").css({"display":"none"});
			$(".back-text-number-img .text-main").css({"z-index":"90"});
			$('.back-text-number-img .text-main .ui-rotatable-handle.ui-draggable').css({"display":"none"});
		};
		if(!$(e.target).closest(divNumber).length){
			divNumber.css({"border":"0"});
			$(".back-text-number-img .number-main .ui-resizable-handle").css({"display":"none"});
			$('.back-text-number-img .number-main .ui-rotatable-handle.ui-draggable').css({"display":"none"});
			$(".back-text-number-img .number-main").css({"z-index":"90"})

		};
		if(!$(e.target).closest(packDivText).length){
			$(".img-packing-choice .main-text-packing .ui-resizable-handle").css({"display":"none"});
			$('.img-packing-choice .main-text-packing .ui-rotatable-handle.ui-draggable').css({"display":"none"});
			$(".img-packing-choice .main-text-packing").css({"z-index":"90","border":"none"});
		};
	});
	$(".back-text-number-img .text-main").mousedown(function(){
		$(this).css({"border":"2px dashed gray"});
		$(".back-text-number-img .text-main .ui-resizable-handle").css({"display":"block"});
		$('.back-text-number-img .text-main .ui-rotatable-handle.ui-draggable').css({"display":"block"});


	});


	$(".change-choice-back #change-number-back").focus(function(){
		if($("#change-number-back").val() != "") {
			k=true;
		}else {
			k=false;
		};

		$(".back-text-number-img .number-main .ui-resizable-handle").css({"display":"block"});
		$('.back-text-number-img .number-main .ui-rotatable-handle.ui-draggable').css({"display":"block"});

		let numberMainWidth = $(".back-text-number-img .number-main").width();
		let numberMainHeight = $(".back-text-number-img .number-main").height();
		let imgChoiceWidth = $(".img-choice-back").width();
		let imgChoiceHeight = $(".img-choice-back").height();
		let textMainWidth = $(".back-text-number-img .text-main").width();
		let textMainHeight = $(".back-text-number-img .text-main").height();
		let left = imgChoiceWidth/2 - 50;
		let topTextMain = imgChoiceHeight/2 - textMainHeight/2 - textMainHeight;

		$(".back-text-number-img .number-main").css({"border":"0.7px dashed #FF0202","width": "100px", "height":"30px", "cursor":"move","padding":"0"});

		if($('.change-choice-back .change-choice-number label div').hasClass('active-jackdaw') ==  true){
			$(".change-choice-back #change-number-back").bind("change paste keyup", function(ev) {
				let enter = "";
				enter = $(this).val();
				$(".back-text-number-img .number-main span").html(enter);
			});
		}else {

			$(".change-choice-back #change-number-back").bind("change paste keyup", function(ev) {

				let enter = ""
				enter = $(this).val();
				$(".back-text-number-img .number-main span").html(enter);
				if( ev.keyCode == 8 && enter.length == 0) {
						$(".img-active-back-number img").attr("src", notActiveJackDaw);
						$(".img-active-back-number").removeClass('active-jackdaw');
						console.log(enter.length, k,ev.keyCode);

						if (k == true){
							priceMinusPrice();
							k = false;
						}else {

						}
						console.log(enter.length, k,ev.keyCode);
				} else if (enter.length > 0 && ev.keyCode == 8){
					console.log(enter.length, k,ev.keyCode);
				} else if(enter.length > 0) {
					$(".img-active-back-number img").attr("src", activeJackDaw);
					$(".img-active-back-number").addClass('active-jackdaw');
					if (k==false) {
						pricePlusePrice();
						k = true;
					}else {

					}
					console.log(enter.length, k,ev.keyCode);
				}
			});
		};
		$(".back-text-number-img .number-main").mousedown(function(){
			$(this).css({"border":"0.7px dashed #FF0202"});
			$(".back-text-number-img .number-main .ui-resizable-handle").css({"display":"block"})
			$('.back-text-number-img .number-main .ui-rotatable-handle.ui-draggable').css({"display":"block"});
		});
		$(".back-text-number-img .number-main").resize(function(){
			var numberMainWidth = $(".back-text-number-img .number-main").width();
			var numberMainHeight = $(".back-text-number-img .number-main").height();
			var fontSize = numberMainWidth/3.4;
			fontSize = fontSize + "px";
			$(".back-text-number-img .number-main span").css({"font-size":fontSize});
		});

	});

	$(".back-text-number-img .number-main").mouseover(function(){
		var x = 100;
		var y = 30;
		//console.log("kuku");
		$(this).draggable({
			containment: "parent"
		});
		$(this).resizable({
			aspectRatio: x / y
		});
		$(this).rotatable();
		// $(this).css({"border":"2px dashed gray"});
		// $(".back-text-number-img .number-main .ui-resizable-handle").css({"display":"block"})
	});

	$(".back-text-number-img .number-main").mouseout(function(){
		// $(this).css({"border":"0"});
		// $(".back-text-number-img .number-main .ui-resizable-handle").css({"display":"none"})
	});

	$(".back-text-number-img .text-main").mousedown(function(){
		$(this).css({"border":"0.7px dashed #FF0202"});
	});

	$(".back-text-number-img .number-main").mousedown(function(){
		$(this).css({"border":"0.7px dashed #FF0202"});
	});

	$(".color-change-product .change-color-product .color").each(function(){
		let backgroundIconColor = $(this).data('colorproduct');

		for (var key in colorNames){
			if (key == backgroundIconColor){
				$(this).css({"background-color": colorNames[backgroundIconColor]});
			}
		};
		$(this).click(function(){
			$(".color-change-product .change-color-product").children().removeClass("active-choice-product-color");
			$(this).addClass("active-choice-product-color");
			let color = $(this).data('colorproduct');

			let pos = $(".active-btn-choice-position").data("position");
			//let first__choice = $(".img-choice").data("choice");
			var first__choice = $(".choice-active").data("choice");
			//let gender = $(".img-choice-"+pos).data("gender");
			let gender = $('.active-btn-choice-gen-draw').data('gender')
			//console.log(color,pos,first__choice,gender);
			$(".img-choice-front").css({"background-image":"url(img/"+"front"+"/"+first__choice+"/"+gender+"/"+color+"/"+first__choice+"__"+"front"+".jpg)", "background-repeat":"no-repeat", "background-position": "center","height": "100%"});
			$(".img-choice-back").css({"background-image":"url(img/"+"back"+"/"+first__choice+"/"+gender+"/"+color+"/"+first__choice+"__"+"back"+".jpg)", "background-repeat":"no-repeat", "background-position": "center","height": "100%"});

			$(".img-choice-"+pos).attr("data-gender", gender);
			$(".img-choice-"+pos).attr("data-pos", pos);
			$(".img-choice-"+pos).attr("data-prcolor", color);
			$(".img-choice-"+pos).attr("data-choice", first__choice);

		});
	});

	$(".change-choice-back .change-choice-text .color-text .color").each(function(){
		var backgroundIconColor = $(this).data('colortext');
		for (var key in colorNames){
			if (key == backgroundIconColor){
				$(this).css({"background-color": colorNames[backgroundIconColor]});
			}
		}
		$(this).click(function(){
			$(".change-choice-back .change-choice-text .color-text").children().removeClass('active-choice-text-color-back');
			$(this).addClass("active-choice-text-color-back");
			var color = $(".active-choice-text-color-back").data('colortext');
			//console.log(color);
			$(".back-text-number-img .text-main span").css({"color":colorNames[color]})
		});
	});//function for distributions of colors icons under the text-choice back

	$(".change-choice-back .change-choice-number .color-number .color").each(function(){
		var backgroundIconColor = $(this).data('colortext');
		//console.log($(this));
		for (var key in colorNames){
			if (key == backgroundIconColor){
				$(this).css({"background-color": colorNames[backgroundIconColor]});
			}
		}
		$(this).click(function(){
			//console.log("Kuku");
			$(".change-choice-back .change-choice-number .color-number").children().removeClass('active-choice-number-color-back');
			$(this).addClass("active-choice-number-color-back");
			var color = $(".active-choice-number-color-back").data('colortext');
			$(".back-text-number-img .number-main span").css({"color":colorNames[color]});
			// console.log(color);
		});
	});//function for distributions of colors icons under the number-choice back


	//onloadImg
	function readURL(input) {

		if (input.files && input.files[0]) {
			var reader = new FileReader();

			reader.onload = function(e) {
				// $('#choice-img').attr('src', e.target.result);
				$(".choice-imgg").css({"background-image":e.target.result});
				setTimeout(function(){
					$('.close').removeClass('hide');
					$('.choice-imgg').css({"opacity": "1"});
					$(".choice-imgg").draggable();
					$(".choice-imgg").resizable({
						minHeight: 100,
						minWidth: 100

					});
				},1000);
			};

			reader.readAsDataURL(input.files[0]);
		}
	}

	$("#imgInput").change(function() {
		readURL(this);
	});

	$("#place-your-order-btn").click(function(){
		//console.log("place-your-order");
		var nextSlide = $(".item-slider-choice").data('slide');
		nextSlide = nextSlide +1+1+1;
		//console.log(nextSlide);
		var next = slideWidth;
		wrapper.animate({'margin-left': '-='+next}, 700);
		var currentSlide = $(".active").data("slide");
		let curPrice = parseInt($('.nameChoice').text())+parseInt($('.radio-packing-choice label .active-radio').data('pricepacking'));
		console.log($('.radio-packing-choice label .active-radio').data('pricepacking'));
		//let pricePacking = parseInt($('.radio-packing-choice label .active-radio').data('pricepacking'));

		$(".wrapper").children().removeClass('active');
		$(".wrapper [data-slide="+nextSlide+"]").addClass('active');
		$(".choice-menu").children().removeClass("item-slider-choice-active");
		$(".order ").addClass("item-slider-choice-active");

		$('.text-price-order').html(curPrice);

		var widthCapture = $("#capture").width();
		var heightCapture = $("#capture").height();

		var clone = $("#capture").clone(true);
		$("#result").css({"width":heightCapture, "height":heightCapture*2});
		clone.appendTo("#result");
		
		$('#packing-container').css({"height":"440px"});
		$("#result .img-choice-front").css({"height": "440px"});

		var clone2 = $("#capture-2").clone(true);

		clone2.appendTo("#result");

		$("#result .img-choice-back").css({"height": "440px"});
		$('#result .img-choice-front .front-text-number-img .text-main').children().removeClass('ui-resizable-handle ui-resizable-e ui-resizable-s ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se ui-draggable');
		let priceOrderResult = $('.nameChoice').text()
		let nameOrderResult = $('.title-choice span').text();
		let packOrderResult = $('.radio-packing-choice span.active-radio').parent().text();
		console.log('packing',packOrderResult,$('.radio-packing-choice span.active-radio').parent());

		let OrderResult = nameOrderResult + " + " + packOrderResult;
		$('.nameOrderResult').html(OrderResult);
		$('.text-price-order').html(priceOrderResult);
		//console.log(clone);
	});//show result pic

	$(".size-choice-radio-front span").each(function(){
		$(this).click(function(){
			if($('.change-choice-front .change-choice-text label div').hasClass('active-jackdaw') && $('.change-choice-front .change-choice-number label div').hasClass('active-jackdaw')){
				console.log('true');
				let pos = $(".active-btn-choice-position").data('position');
				let superOldPrice = parseInt($(".nameChoice").text());
				let active = $('.size-choice-radio-front .active-radio');
				$('.nameChoice').data('curprice', superOldPrice);
				console.log(active.data('size'));

				price = superOldPrice - 2*parseInt(priceList[$(".img-choice-"+pos).data('choice')]["text"][pos][active.data('size')]) + 2*parseInt(priceList[$(".img-choice-"+pos).data('choice')]["text"][pos][$(this).data('size')]);

				$(".size-choice-radio-front label").children().removeClass("active-radio");
				$(this).addClass("active-radio");

				$('.price .nameChoice').html(price);
			} else if($('.change-choice-front .change-choice-text label div').hasClass('active-jackdaw') || $('.change-choice-front .change-choice-number label div').hasClass('active-jackdaw')) {
				// console.log('true_1');
				// console.log('true');
				let pos = $(".active-btn-choice-position").data('position');
				let superOldPrice = parseInt($(".nameChoice").text());
				let active = $('.size-choice-radio-front .active-radio');
				$('.nameChoice').data('curprice', superOldPrice);
				//console.log(active.data('size'));

				price = superOldPrice - parseInt(priceList[$(".img-choice-"+pos).data('choice')]["text"][pos][active.data('size')]) + parseInt(priceList[$(".img-choice-"+pos).data('choice')]["text"][pos][$(this).data('size')]);

				$(".size-choice-radio-front label").children().removeClass("active-radio");
				$(this).addClass("active-radio");
				$('.price .nameChoice').html(price);
			} else {
				console.log('false');
				$(".size-choice-radio-front label").children().removeClass("active-radio");
				$(this).addClass("active-radio");
			};
		});
	});

	$(".size-choice-radio-back span").each(function(){
		$(this).click(function(){
			if($('.change-choice-back .change-choice-text label div').hasClass('active-jackdaw') && $('.change-choice-back .change-choice-number label div').hasClass('active-jackdaw')){
				//console.log('true');
				let pos = $(".active-btn-choice-position").data('position');
				let superOldPrice = parseInt($(".nameChoice").text());
				let active = $('.size-choice-radio-back .active-radio');
				$('.nameChoice').data('curprice', superOldPrice);
				//console.log(active.data('size'));

				price = superOldPrice - 2*parseInt(priceList[$(".img-choice-"+pos).data('choice')]["text"][pos][active.data('size')]) + 2*parseInt(priceList[$(".img-choice-"+pos).data('choice')]["text"][pos][$(this).data('size')]);

				$(".size-choice-radio-back label").children().removeClass("active-radio");
				$(this).addClass("active-radio");

				//price = superOldPrice + 2*parseInt(priceList[$(".img-choice-"+pos).data('choice')]["text"][pos][$(this).data('size')]);
				// console.log('price', price, 'superOldPrice', superOldPrice, "pos",priceList[$(".img-choice-"+pos).data('choice')]["text"][pos][$(".size-choice-radio-"+pos+".label-size-btn .active-radio").data('size')]);
				$('.price .nameChoice').html(price);
			} else if($('.change-choice-back .change-choice-text label div').hasClass('active-jackdaw') || $('.change-choice-back .change-choice-number label div').hasClass('active-jackdaw')) {
				//console.log('true_1');
				//console.log('true');
				let pos = $(".active-btn-choice-position").data('position');
				let superOldPrice = parseInt($(".nameChoice").text());
				let active = $('.size-choice-radio-back .active-radio');
				$('.nameChoice').data('curprice', superOldPrice);
				console.log(active.data('size'));

				price = superOldPrice - parseInt(priceList[$(".img-choice-"+pos).data('choice')]["text"][pos][active.data('size')]) + parseInt(priceList[$(".img-choice-"+pos).data('choice')]["text"][pos][$(this).data('size')]);

				$(".size-choice-radio-back label").children().removeClass("active-radio");
				$(this).addClass("active-radio");
				$('.price .nameChoice').html(price);
			} else {
				console.log('false');
				$(".size-choice-radio-back label").children().removeClass("active-radio");
				$(this).addClass("active-radio");
			};
			// $(".size-choice-radio-back label").children().removeClass("active-radio");
			// $(this).addClass("active-radio");
		});
	});

	$(".radio-packing-choice span").each(function(){
		$(this).click(function(){
			$(".radio-packing-choice label").children().removeClass("active-radio");
			$(this).addClass("active-radio")
			var v = $(this).data("packing");
			var src = "img/boxes/" + v + ".jpg"
			console.log(src);
			$(".img-packing-choice img").attr("src", src);
			$(".img-packing-choice img").css({"width":"120%"});
			$(this).addClass("active-radio");
			//console.log(v);
			if ($(this).data("packing") == "pizza" || $(this).data("packing") == "craft" ) {
				$(".enter-packing-text").removeClass("hide");
			} else {
				$(".enter-packing-text").addClass("hide");
			}
		});
	});//choice packing

	$('.enter-packing-text .change-choice-pack .change-choice-packing-text input').focus(function(){
		console.log('pack');
		$(".img-packing-choice .main-text-packing").css({"border":"0.7px dashed #FF0202","width": "100px", "height":"30px", "cursor":"move","padding":"0","display": "flex"});
		$(".img-packing-choice .main-text-packing .ui-resizable-handle").css({"display":"block"});
		$('.img-packing-choice .main-text-packing .ui-rotatable-handle.ui-draggable').css({"display":"block"});

		$(".img-packing-choice .main-text-packing span").css({"font-size":"22px"});

		$(".enter-packing-text .change-choice-pack .change-choice-packing-text input").bind("change paste keyup", function(ev) {
			let enter = ""
			enter = $(this).val();
			$(".img-packing-choice .main-text-packing span").html(enter);
		});
	});
	$(".img-packing-choice .main-text-packing").mousedown(function(){
		$(".img-packing-choice .main-text-packing .ui-resizable-handle").css({"display":"block"});
		$('.img-packing-choice .main-text-packing .ui-rotatable-handle.ui-draggable').css({"display":"block"});
		$(".img-packing-choice .main-text-packing").css({"border":"0.7px dashed #ff0202"})
	});
	$(".img-packing-choice .main-text-packing").mouseover(function(){
		var x = 100;
		var y = 30;
		//console.log("kuku");
		$(this).draggable({
			containment: "parent"
		});
		$(this).resizable({
			aspectRatio: x / y
		});
		$(this).rotatable();

	});

	$(".img-packing-choice .main-text-packing").resize(function(){
		var numberMainWidth = $(".img-packing-choice .main-text-packing").width();
		var numberMainHeight = $(".img-packing-choice .main-text-packing").height();
		var fontSize = numberMainWidth/3.4;
		fontSize = fontSize + "px";
		$(".img-packing-choice .main-text-packing span").css({"font-size":fontSize});
	});


	$(".change-choice-pack .change-choice-packing-text .color-text .color").each(function(){
		var backgroundIconColor = $(this).data('colortext');
		//console.log($(this));
		for (var key in colorNames){
			if (key == backgroundIconColor){
				$(this).css({"background-color": colorNames[backgroundIconColor]});
			};
		};
		$(this).click(function(){
			var IconColor = $(this).data('colortext');
			$(this).parent().children().removeClass('active-choice-text-color-packing ');
			$(this).addClass('active-choice-text-color-packing');
			// $('.main-text-packing span').css({"color":IconColor});
			// console.log(IconColor);
			var color = $(".active-choice-text-color-packing").data('colortext');
			console.log(color);
			$(".main-text-packing span").css({"color":colorNames[color]})
		});
	});

	$(".payment span").each(function(){
		$(this).click(function(){
			$(".payment label").children().removeClass("active-radio");
			$(this).addClass("active-radio")
		});
	});	//choice delivery

	$(".delivery .check-delivery").each(function(){
		$(this).click(function(){
			$(".delivery label").children().removeClass("active-radio");
			$(".delivery label").children().removeClass("active-radio-delivery");

			$(this).addClass("active-radio")
			$(this).addClass("active-radio-delivery")
		});
	});	//choice delivery

	let font = "font";
	//console.log('пиздец',$(".change-choice-front .change-choice-text .select-font select"));
	$(".change-choice-front .change-choice-text .select-font select").change(function(){
	//	console.log('font',$(this).val());
		$(".change-choice-front .change-choice-text .select-font select").removeClass(font);
		$('#change-text').removeClass(font);
		$(".front-text-number-img .text-main span").removeClass(font);
		$('#change-text').addClass($(this).val());
		$(".front-text-number-img .text-main span").addClass($(this).val());
		$(".change-choice-front .change-choice-text .select-font select").addClass($(this).val());
		font = $(this).val();

	});//change font of text on front side

	$(".change-choice-front .change-choice-number .select-font select").change(function(){
		$(".change-choice-front .change-choice-number .select-font select").removeClass(font);
		$('#change-number').removeClass(font);
		$(".front-text-number-img .number-main span").removeClass(font);
		$('#change-number').addClass($(this).val());
		$(".front-text-number-img .number-main span").addClass($(this).val());
		$(".change-choice-front .change-choice-number .select-font select").addClass($(this).val());
		font = $(this).val();

	});//change font of text on front side

	$(".change-choice-back .change-choice-text .select-font select").change(function(){
	//	console.log('font',$(this).val());
		$(".change-choice-front .change-choice-text .select-font select").removeClass(font);
		$('#change-text-back').removeClass(font);
		$(".back-text-number-img .text-main span").removeClass(font);
		$('#change-text-back').addClass($(this).val());
		$(".back-text-number-img .text-main span").addClass($(this).val());
		$(".change-choice-back .change-choice-text .select-font select").addClass($(this).val());
		font = $(this).val();

	});	//change font of text on back side

	$(".change-choice-back .change-choice-number .select-font select").change(function(){
		$(".change-choice-back .change-choice-number .select-font select").removeClass(font);
		$('#change-number-back').removeClass(font);
		$(".back-text-number-img .number-main span").removeClass(font);
		$('#change-number-back').addClass($(this).val());
		$(".back-text-number-img .number-main span").addClass($(this).val());
		$(".change-choice-back .change-choice-number .select-font select").addClass($(this).val());
		font = $(this).val();

	});//change font of number on back side


	$("a[href^='#']").click(function(){
		var top = $(this).attr('href');
        $('html, body').stop().animate({scrollTop: $(top).offset().top}, 1000);
	});

	$('.close').click(function(){
		console.log('delete');
		$('.close').addClass('hide');
		$('#choice-img').attr('src',"");
	});


});
