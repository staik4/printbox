$(document).ready(function(){
	// console.log("kukus");
	// $("#btn-form-newIdea").click(function(){
	// 	var data = $("#newIdea").val();
	// 	console.log(data);
	// });

	$( "#newIdea" ).on( "submit", function( event ) {
		event.preventDefault();
		// console.log( $( this ).serialize());
		var data = $("#newIdea").serialize();
		// console.log(data);
		let textNewIdea = $("textarea[name='textNewIdea']");
		let telNewIdea = $("input[name='telNewIdea']");
		let emailNewIdea = $("input[name='emailNewIdea']");

		if (emailNewIdea.val() != "" && telNewIdea.val() != "" && emailNewIdea.val() != "") {
			$.ajax({
				url: "js/newIdea.php",
				type: "POST",
				data: data,
				success: function(response) {
				//обработка успешной отправки
				console.log('получилось');
				alert('Ваше письмо отправлено');
				// result = jQuery.parseJSON(response);
				},
				error: function(jqXHR, exception, response) {
				//обработка ошибок при отправке
				 console.log('все хреново');
				 console.log(jqXHR, exception, response );
				}
			});


		} else {
			textNewIdea.css({"border":"2px solid #FF001F"});
			console.log(textNewIdea,telNewIdea,emailNewIdea);
			telNewIdea.css({"border":"2px solid #FF001F"});
			emailNewIdea.css({"border":"2px solid #FF001F"});
		}


	});


	$('#formWholesaleOrder input[type=file]').on('change', function(){
		files = this.files;
		console.log(files);
	});

	// $("#formWholesaleOrder").on("submit", function(event){
	// 	event.preventDefault();
	// 	console.log($(this).serialize());
	// 	// var data = new FormData();
	// 	// $.each( files, function(key, value){
	// 	// 	data.append( key, value );
	// 	// });
	// 	// console.log(data);
	// 	let data = new FormData();

	// 	$.ajax({
	// 		url: "js/wholesaleOrder.php",
	// 		type: "POST",
	// 		data: data,
	// 		success: function(response) {
	// 		//обработка успешной отправки
	// 		console.log('получилось');
	// 		alert('Ваше письмо отправлено');
	// 		// result = jQuery.parseJSON(response);
	// 		},
	// 		error: function(jqXHR, exception, response) {
	// 		//обработка ошибок при отправке
	// 		 console.log('все хреново');
	// 		 console.log(jqXHR, exception, response );
	// 		}
	// 	})
	// });



	$("#formWholesaleOrder").submit(function(e) {
		e.preventDefault();
		var formData = new FormData(this);

		let fioPartner = $("input[name='fioPartner']");
		let nameOrg = $("input[name='nameOrg']");
		let volumeOfProduct = $("input[name='volumeOfProduct']");
		let telOrg = $("input[name='telOrg']");
		let fileOrg = $("input[name='fileOrg']");
		let kindOfProduct = $("input[name='kindOfProduct']");


		if (fioPartner.val() != "" && nameOrg.val() != "" && volumeOfProduct.val() != "" && telOrg.val() != "" && kindOfProduct.val() != "") {
			$.ajax({
				url: "js/wholesaleOrder.php",
				type: 'POST',
				data: formData,
				success: function (data) {
					console.log(data)
					alert("Письмо отправлено");
				},
				error: function(jqXHR, exception, response) {
					console.log(jqXHR, exception, response );
				},
				cache: false,
				contentType: false,
				processData: false

			});



		} else {
			fioPartner.css({"border": "2px solid #FF001F"});
			nameOrg.css({"border": "2px solid #FF001F"});
			fileOrg.css({"border": "2px solid #FF001F"});
			telOrg.css({"border": "2px solid #FF001F"});
			volumeOfProduct.css({"border": "2px solid #FF001F"});
			kindOfProduct.css({"border": "2px solid #FF001F"});

		}
	});

	// function readFile(file){
	// 	var reader = new FileReader()
	// 	console.log(file)
	// 	reader.onload = function(event) {
	// 		the_url = event.target.result;
	// 	}
	// 	console.log(reader.readAsDataURL(url));
	// }


		let downImg = ""
		$('#imgInput').change(function(){
			function getBase64(file) {
				return new Promise((resolve, reject) => {
					const reader = new FileReader();
					reader.readAsDataURL(file);
					reader.onload = () => resolve(reader.result);
					reader.onerror = error => reject(error);
				});
			}
			var file = document.querySelector('#imgInput').files[0];
			console.log(file);
			file = getBase64(file);
			file.then(function(result){
				console.log("result",result);
				downImg = result;
			});

	 });
	 let packImg = "";
	 $('#place-your-order-btn').on('click', function(){
		html2canvas(document.querySelector('#packing')).then(function(canvas) {
			document.body.appendChild(canvas);
			dataUrlPackImg = canvas.toDataURL();
			console.log("img_pack", dataUrlPackImg);
		});
	 });


	$("#place-order").click(function(e) {

		console.log("#place-order");
		e.preventDefault();
		let sizeApplication = $(".radio-size-span.active-radio").parent().text();
		let sizeProduct = $(".sizes .choice-size").text();
		let qual = $(".qual  input").val();
		let packing = $(".packing-radio-btn.active-radio").parent().text();
		let telOrder = $("#tel-order").val();
		let nameOrder = $("#name-order").val();
		let emailOrder = $("#email-order").val();
		let payment = $(".payment label .active-radio").parent().text();
		let delivery = $(".delivery label .active-radio").parent().text();

		if(telOrder == "" || nameOrder == "" || emailOrder ==""){
			alert("Пожалуйста заполните необходимые поля: Имя, телефонный номер, email!");
		} else {

			html2canvas(document.querySelector('#result')).then(function(canvas) {
			    document.body.appendChild(canvas);
			    var dataURL = canvas.toDataURL();
			    imgProduct = dataURL;
			    let obsj = {"data": dataURL, "sizeApplication": sizeApplication,"sizeProduct" : sizeProduct, "qual":qual,
					"packing":packing, "telOrder": telOrder, "nameOrder": nameOrder, "emailOrder":emailOrder, "payment": payment, "delivery":delivery,"downImg": downImg, "pack": dataUrlPackImg};

					// for (key in blobFile) {
					// 	if (key == "lastModifiedDate" || key == "slice"){
					// 		console.log("ne podchodit")
					// 	}else {
					// 		obsj[key] = blobFile[key];
					// 		console.log(key, blobFile[key]);
					// 	}

					// }
					console.log(obsj);
				$.ajax({
					url: "js/k.php",
					method: 'POST',
					//dataType: 'json',
					data:obsj,
					success: function (response) {
						console.log(response);
						alert("Письмо отправлено. В ближайшее время с Вами свяжется наш менеджер для уточнения заказа!");
					},
					error: function(jqXHR, exception, response) {
						console.log(jqXHR, exception, response );
					}

				});

			});

		}

	});

});
