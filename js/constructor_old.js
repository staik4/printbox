$(document).ready(function(){
	var priceText = 100;
	var priceNum = 100;
	var pricePic = 200;

	var namesChoice = {
		"futbolka":"Футболка",
		"polo":"Поло",
		"tolstovka":"Толстовка",
		"bomber":"Бомбер",
		"switshot":"Свитшот",
		"cap":"Кепка",
		"snep":"Снеп"
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
				var first__choice = $(".choice-active").data("choiceimg");
				//console.log(first__choice);
				if (first__choice == undefined){
					first__choice = "futbolka__front";
					$(".img-choice").css({"background-image":"url(img/front_new/"+first__choice+".svg)", "background-repeat":"no-repeat", "background-position": "center"});
				}else{
					$(".img-choice").css({"background-image":"url(img/front_new/"+first__choice+".svg)", "background-repeat":"no-repeat", "background-position": "center"});
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
			}

		});
	});//choice active of goods
	
	$("#packing-btn").click(function(){
		console.log("packing");
		var nextSlide = $(".item-slider-choice").data('slide');
		nextSlide = nextSlide +1+1;
		console.log(nextSlide);
		var next = slideWidth;
		wrapper.animate({'margin-left': '-='+next}, 700);
		var currentSlide = $(".active").data("slide");
		$(".wrapper").children().removeClass('active');
		$(".wrapper [data-slide="+nextSlide+"]").addClass('active');		
		$(".choice-menu").children().removeClass("item-slider-choice-active");
		$(".packing ").addClass("item-slider-choice-active");
	});

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

			if(nextSlide == 1){


				var first__choice = $(".choice-active").data("choiceimg");
				//console.log(first__choice);
				if (first__choice == undefined){
					first__choice = "futbolka__front";
					$(".img-choice").css({"background-image":"url(img/front_new/"+first__choice+".svg)", "background-repeat":"no-repeat", "background-position": "center"});
				}else{
					$(".img-choice").css({"background-image":"url(img/front_new/"+first__choice+".svg)", "background-repeat":"no-repeat", "background-position": "center"});
					// var src = "img/front/"+first__choice+".svg";
					// $("#main-img").attr("src", src);
					// $("#main-img").css({"position": "absolute", "width": "80%"});
				}
				for(var key in namesChoice) {
					if(key == $(".choice-active").data("choice")) {
						$(".title-choice span").html(namesChoice[key]+": ");
						$(".price .nameChoice").html($(".choice-active").data("price"));
						
						//$(".price .nameChoice").data("curPrice", $(".choice-active").data("price"))

					}//insert name of the selected good and its price
				}//loop for finding the accordance in array of goods name
				$("#result").html("");
				console.log($(".price .nameChoice"));	

			} else if(nextSlide == 3){
				var widthCapture = $("#capture").width();
				var heightCapture = $("#capture").height();

				var clone = $("#capture").clone(true);
				$("#result").css({"width":heightCapture, "height":heightCapture});
				clone.appendTo("#result");

			}//insert hte selected picture in next slide
		});//changes slides
	});//main slider



	$(".gender button").each(function(){
		$(this).click(function(){
			$(".gender").children().removeClass('active-btn-choice-gen-draw');
			$(this).addClass('active-btn-choice-gen-draw');

		});
	});//function for gender choice

	$(".position-drawing button").each(function(){
		$(this).click(function(){
			$(".position-drawing").children().removeClass('active-btn-choice-gen-draw');
			$(this).addClass('active-btn-choice-gen-draw');
			var position = $(this).data("position");
			console.log(position);
			if (position == "front"){
				var first__choice = $(".choice-active").data("choice") + "__front";
				$(".img-choice").css({"background-image":"url(img/front_new/"+first__choice+".svg)", "background-repeat":"no-repeat", "background-position": "center"});
				console.log(first__choice);
				$(".back-text-number-img").css({"display":"none"});
				$(".front-text-number-img").css({"display":"flex"});

				$(".hide-enter-par-front").removeClass("hide");
				$(".hide-enter-par-back").addClass("hide");
			}else if(position == "back"){
				var first__choice = $(".choice-active").data("choice") + "__back";
				$(".img-choice").css({"background-image":"url(img/back/"+first__choice+".svg)", "background-repeat":"no-repeat", "background-position": "center"});
				console.log(first__choice);
				$(".back-text-number-img").css({"display":"flex"});
				$(".front-text-number-img").css({"display":"none"});

				$(".hide-enter-par-front").addClass("hide");
				$(".hide-enter-par-back").removeClass("hide");
			}
		});
	});//function for position draweing

	$(".change-choice-front .change-choice-text .color-text .color").each(function(){
		var backgroundIconColor = $(this).data('colortext');
		//console.log($(this));
		for (var key in colorNames){
			if (key == backgroundIconColor){
				$(this).css({"background-color": colorNames[backgroundIconColor]});
			}
		}
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

	//front-choice img  

	$(".change-choice-front .change-choice-text .enter-text-choice").focus(function(){
		var oldPrice = $(".nameChoice").text();
		var price = parseInt($(".nameChoice").text()) + priceText;

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
		$(".front-text-number-img .text-main").css({"border":"2px dashed gray","width": textMainWidth, "height":textMainHeight, "cursor":"move","padding":"0"});
		$("#change-text").bind("change paste keyup", function(ev) {
		 	// console.log(ev.keyCode);
		 	 $(".nameChoice").html(price);
		 	var enter = ""
		 	
		 	if(ev.keyCode === 13) {		
		 		enter = $(this).val();
		 	} else {
		 		enter = $(this).val(); 
		 	}
		 	// console.log(enter);
		 	if(enter == ""){
		 		$(".nameChoice").html(oldPrice);

		 	}
		 	$(".front-text-number-img .text-main span").html(enter);
		});
	});

	$(".front-text-number-img .text-main").resize(function(){
		var textMainWidth = $(".text-main").width();
		var textMainHeight = $(".text-main").height();	
		var fontSize = textMainWidth/3.4;
		fontSize = fontSize + "px";
		$(".front-text-number-img .text-main span").css({"font-size":fontSize});
	});

	$(".front-text-number-img .text-main").mouseover(function(){
		var x = 100;
		var y = 30;
		//console.log("kuku");
		$(this).draggable();
		$(this).resizable({
			aspectRatio: x / y
		});
		// $(this).css({"border":"2px dashed gray"});
		$(".front-text-number-img .text-main .ui-resizable-handle").css({"display":"block"})
	});
	$(".front-text-number-img .text-main").mouseout(function(){
		// $(this).css({"border":"0"});
		$(".front-text-number-img .text-main .ui-resizable-handle").css({"display":"none"})
	});

	$(".text-main").attr("tabindex",-1);
	$(".text-main span").attr("tabindex",-1);

	// $(".text-main span").mousedown(function(){
	// 	// $(this).css({"border":"0"});
	// 	$(this).addClass("focusin");
	// 	//console.log("step");
	// });

	$(document).mousedown(function (e){
		var divText = $(".front-text-number-img .text-main");
		var divNumber = $(".front-text-number-img .number-main");
		if (!$(e.target).closest(divText).length) {
			//console.log("focusout")
			divText.css({"border":"0"});
		};
		if(!$(e.target).closest(divNumber).length){
			divNumber.css({"border":"0"});
		};
	});

	$(".change-choice-front #change-number").focus(function(){
		var oldPrice = $(".nameChoice").text();
		var price = parseInt($(".nameChoice").text()) + priceNum;

		var numberMainWidth = $(".front-text-number-img .number-main").width();
		var numberMainHeight = $(".front-text-number-img .number-main").height();
		var imgChoiceWidth = $(".img-choice").width();
		var imgChoiceHeight = $(".img-choice").height();
		var textMainWidth = $(".front-text-number-img .text-main").width();
		var textMainHeight = $(".front-text-number-img .text-main").height();
		var left = imgChoiceWidth/2 - 50;
		var topTextMain = imgChoiceHeight/2 - textMainHeight/2 - textMainHeight;
		
		$(".front-text-number-img .number-main").css({"border":"1px dashed black","width": "100px", "height":"30px", "cursor":"move","padding":"0"});
		$(".change-choice-front #change-number").bind("change paste keyup", function(ev) {
		 	// console.log(ev.keyCode);
		 	var enter = ""

		 	$(".nameChoice").html(price);

		 	if(ev.keyCode === 13) {		
		 		enter = $(this).val();
		 	} else {
		 		enter = $(this).val(); 
		 	}

		 	if(enter == ""){
		 		$(".nameChoice").html(oldPrice);

		 	}
		 	// console.log(enter);
		 	$(".front-text-number-img .number-main span").html(enter);
		});

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
		$(this).draggable();
		$(this).resizable({
			aspectRatio: x / y
		});
		// $(this).css({"border":"2px dashed gray"});
		$(".front-text-number-img .number-main .ui-resizable-handle").css({"display":"block"})
	});

	$(".front-text-number-img .number-main").mouseout(function(){
		// $(this).css({"border":"0"});
		$(".front-text-number-img .number-main .ui-resizable-handle").css({"display":"none"})
	});

	$(".front-text-number-img .text-main").mousedown(function(){
		$(this).css({"border":"2px dashed gray"});
	});

	$(".front-text-number-img .number-main").mousedown(function(){
		$(this).css({"border":"2px dashed gray"});
	});





	//back-choice img  

	$(".change-choice-back .change-choice-text .enter-text-choice").focus(function(){ 
		var textMainWidth = $(".text-main").width();
		var textMainHeight = $(".text-main").height();
		var imgChoiceWidth = $(".img-choice").width();
		var imgChoiceHeight = $(".img-choice").height();
		var left = imgChoiceWidth/2 - 50;
		var topTextMain = imgChoiceHeight/2 - textMainHeight/2;
		var fontStyle = textMainWidth/3.4;
		fontStyle = fontStyle + "px";
		$(".back-text-number-img .text-main").css({"border":"2px dashed gray","width": textMainWidth, "height":textMainHeight, "cursor":"move","padding":"0"});
		$(".change-choice-back #change-text").bind("change paste keyup", function(ev) {
		 	// console.log(ev.keyCode);
		 	var enter = ""
		 	
		 	if(ev.keyCode === 13) {		
		 		enter = $(this).val();
		 	} else {
		 		enter = $(this).val(); 
		 	}
		 	// console.log(enter);
		 	$(".back-text-number-img .text-main span").html(enter);
		});
	});

	$(".back-text-number-img .text-main").resize(function(){
		var textMainWidth = $(".back-text-number-img .text-main").width();
		var textMainHeight = $(".back-text-number-img .text-main").height();	
		var fontSize = textMainWidth/3.4;
		fontSize = fontSize + "px";
		$(".back-text-number-img .text-main span").css({"font-size":fontSize});
	});

	$(".back-text-number-img .text-main").mouseover(function(){
		var x = 100;
		var y = 30;
		//console.log("kuku");
		$(this).draggable();
		$(this).resizable({
			aspectRatio: x / y
		});
		// $(this).css({"border":"2px dashed gray"});
		$(".back-text-number-img .text-main .ui-resizable-handle").css({"display":"block"})
	});
	$(".back-text-number-img .text-main").mouseout(function(){
		//back $(this).css({"border":"0"});
		$(".back-text-number-img .text-main .ui-resizable-handle").css({"display":"none"})
	});

	$(".back-text-number-img .text-main").attr("tabindex",-1);
	$(".back-text-number-img .text-main span").attr("tabindex",-1);

	// $(".text-main span").mousedown(function(){
	// 	// $(this).css({"border":"0"});
	// 	$(this).addClass("focusin");
	// 	//console.log("step");
	// });

	$(document).mousedown(function (e){
		var divText = $(".back-text-number-img .text-main");
		var divNumber = $(".back-text-number-img .number-main");
		if (!$(e.target).closest(divText).length) {
			//console.log("focusout")
			divText.css({"border":"0"});
		};
		if(!$(e.target).closest(divNumber).length){
			divNumber.css({"border":"0"});
		};
	});

	$(".change-choice-back #change-number").focus(function(){
		var numberMainWidth = $(".back-text-number-img .number-main").width();
		var numberMainHeight = $(".back-text-number-img .number-main").height();
		var imgChoiceWidth = $(".img-choice").width();
		var imgChoiceHeight = $(".img-choice").height();
		var textMainWidth = $(".back-text-number-img .text-main").width();
		var textMainHeight = $(".back-text-number-img .text-main").height();
		var left = imgChoiceWidth/2 - 50;
		var topTextMain = imgChoiceHeight/2 - textMainHeight/2 - textMainHeight;
		
		$(".back-text-number-img .number-main").css({"border":"1px dashed black","width": "100px", "height":"30px", "cursor":"move","padding":"0"});
		$(".change-choice-back #change-number").bind("change paste keyup", function(ev) {
		 	// console.log(ev.keyCode);
		 	var enter = ""
		 	
		 	if(ev.keyCode === 13) {		
		 		enter = $(this).val();
		 	} else {
		 		enter = $(this).val(); 
		 	}
		 	// console.log(enter);
		 	$(".back-text-number-img .number-main span").html(enter);
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
		$(this).draggable();
		$(this).resizable({
			aspectRatio: x / y
		});
		// $(this).css({"border":"2px dashed gray"});
		$(".back-text-number-img .number-main .ui-resizable-handle").css({"display":"block"})
	});

	$(".back-text-number-img .number-main").mouseout(function(){
		// $(this).css({"border":"0"});
		$(".back-text-number-img .number-main .ui-resizable-handle").css({"display":"none"})
	});

	$(".back-text-number-img .text-main").mousedown(function(){
		$(this).css({"border":"2px dashed gray"});
	});

	$(".back-text-number-img .number-main").mousedown(function(){
		$(this).css({"border":"2px dashed gray"});
	});
	
	$(".change-choice-back .change-choice-text .color-text .color").each(function(){
		var backgroundIconColor = $(this).data('colortext');
		//console.log($(this));
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
			console.log("Kuku");
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
				$('#choice-img').attr('src', e.target.result);
				setTimeout(function(){
					var widthImgChoice = $('#choice-img').width();
					var heightImgChoice = $('#choice-img').height();
					console.log("widthImg",widthImgChoice, heightImgChoice,$('#choice-img'));
					if(widthImgChoice >=300 || heightImgChoice >= 300) {
						widthImgChoice = widthImgChoice/4;
						heightImgChoice = heightImgChoice/4;
						$('#choice-img').css({"width":widthImgChoice, "height":heightImgChoice});
						$('.choice-imgg').css({"opacity": "1"});
						$(".choice-imgg").draggable();
						$("#choice-img").resizable({
							minHeight: 1,
							minWidth: 1,
							aspectRatio: widthImgChoice / heightImgChoice
						});					
					}
				}, 1000);
				// setTimeout(ImgWidth(),2000);
			};

			reader.readAsDataURL(input.files[0]);
		}
	}	

	$("#imgInput").change(function() {
		readURL(this);
		// var widthImgChoice = $('.choice-imgg #choice-img').width();
		// var heightImgChoice = $('.choice-imgg #choice-img').height();
		// console.log("widthImg",widthImgChoice, heightImgChoice,$('.choice-imgg #choice-img'));
	});

	// $(".radio-packing-choice input").each(function(){
	// 	$(this).click(function(){
	// 		$(".radio-packing-choice label").children().removeClass("active-radio");
	// 		var v = $(this).val();
	// 		var src = "img/boxes/" + v + ".svg"
	// 		$(".img-packing-choice img").attr("src", src);
	// 		$(this).addClass("active-radio");
	// 		console.log(v);
	// 		if ($(this).val() == "pizza" || $(this).val() == "our" ) {
	// 			$(".enter-packing-text").removeClass("hide");
	// 		} else {
	// 			$(".enter-packing-text").addClass("hide");
	// 		}

	// 	});


	// });	

	$("#place-your-order-btn").click(function(){
		console.log("place-your-order");
		var nextSlide = $(".item-slider-choice").data('slide');
		nextSlide = nextSlide +1+1+1;
		console.log(nextSlide);
		var next = slideWidth;
		wrapper.animate({'margin-left': '-='+next}, 700);
		var currentSlide = $(".active").data("slide");
		$(".wrapper").children().removeClass('active');
		$(".wrapper [data-slide="+nextSlide+"]").addClass('active');		
		$(".choice-menu").children().removeClass("item-slider-choice-active");
		$(".order ").addClass("item-slider-choice-active");

		var widthCapture = $("#capture").width();
		var heightCapture = $("#capture").height();

		var clone = $("#capture").clone(true);
		$("#result").css({"width":heightCapture, "height":heightCapture});
		clone.appendTo("#result");
		console.log(clone);
	});

	// $('input[type="radio"] ~ span').each(function(){
	// 	$(this).click(function(){
	// 		console.log("radio");
	// 		$('input[type="radio"]:checked ~ span:before').css({"background-image":"url(img/ellipse-checked.svg)"});
	// 	});
	// });
	$(".size-choice-radio span").each(function(){
		$(this).click(function(){
			$(".size-choice-radio label").children().removeClass("active-radio");
			$(this).addClass("active-radio")
		});
	});

	$(".radio-packing-choice span").each(function(){
		$(this).click(function(){
			$(".radio-packing-choice label").children().removeClass("active-radio");
			$(this).addClass("active-radio")
			var v = $(this).data("packing");
			var src = "img/boxes/" + v + ".svg"
			$(".img-packing-choice img").attr("src", src);
			$(this).addClass("active-radio");
			console.log(v);
			if ($(this).data("packing") == "pizza" || $(this).data("packing") == "our" ) {
				$(".enter-packing-text").removeClass("hide");
			} else {
				$(".enter-packing-text").addClass("hide");
			}
		});
	});

	$(".payment span").each(function(){
		$(this).click(function(){
			$(".payment label").children().removeClass("active-radio");
			$(this).addClass("active-radio")
		});
	});		
		// $(".delivery .check-delivery").click(function(){
		// 	//console.log($(this));
		// 	if($(this).data("delivery") == false){
		// 		$(this).addClass("active-radio-delivery");
		// 		$(".check-delivery img").attr("src","img/ellipse-checked.svg")
		// 		$(this).data("delivery", true);
		// 	}else {
		// 		$(".delivery label").children().removeClass("active-radio-delivery");
		// 		$(".check-delivery img").attr("src","img/ellipse-not-checked.svg")
		// 		$(this).data("delivery", false);
		// 	}
		// 	// $(".delivery label").children().removeClass("active-radio");
		// 	// $(this).addClass("active-radio")
		// });	

	$(".delivery .check-delivery").each(function(){
		$(this).click(function(){
			$(".delivery label").children().removeClass("active-radio");
			$(".delivery label").children().removeClass("active-radio-delivery");

			$(this).addClass("active-radio")
			$(this).addClass("active-radio-delivery")
		});
	});			
});