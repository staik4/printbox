$(document).ready(function()   {
	$('.portfolio .owl-carousel').owlCarousel( {
	    loop:true,
	    margin:10,
	    // nav:true,
	    responsive: {
	        0: {
	            items:1
	        },
	        600: {
	            items:2
	        },
	        1000: {
	            items:4
	        }
	    }
	})
	var owl = $('.owl-carousel');
	$('.customNextBtn').click(function() {
    	owl.trigger('next.owl.carousel');
	})
	$('.customPrevBtn').click(function() {
		owl.trigger('prev.owl.carousel', [300]);
	})
	$('.feedback .owl-carousel').owlCarousel( {
	    loop:true,
	    margin:10,
	    // nav:true,
	    responsive: {
	        0: {
	            items:1
	        },
	    }
	})
	$('.responsive').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  rows: 2,
	dots:false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
});
