jQuery(document).ready(function($){
	//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
  
     var $items = $(".img-list li");
	$items.hide();
	$items.slice(0, Math.floor($items.length/2)).show();

	
$( "#show_more" ).click(function() {
  
     var $items = $(".img-list li");
	$items.show();
	$('#show_more').toggleClass('hidden');
});


    var MQL = 1170;

    //primary navigation slide-in effect
    if($(window).width() > MQL) {
        var headerHeight = $('.cd-header').height();
        $(window).on('scroll',
        {
            previousTop: 0
        }, 
        function () {
            var currentTop = $(window).scrollTop();
            //check if user is scrolling up
            if (currentTop < this.previousTop ) {
                //if scrolling up...
                if (currentTop > 0 && $('.cd-header').hasClass('is-fixed')) {
                    $('.cd-header').addClass('is-visible');
                    $('.line').css("background-color","#fff");
                    $('#logo').attr("src","images/logo_white.png").css("margin-top","-9%");
           
                } else {
                    $('.cd-header').removeClass('is-visible is-fixed');
                    $('#logo').attr("src","images/logo.png");
                    $('.line').css("background-color","#0079dd");

                }


            } else {
                //if scrolling down...
                $('.cd-header').removeClass('is-visible');
                if( currentTop > headerHeight && !$('.cd-header').hasClass('is-fixed')) $('.cd-header').addClass('is-fixed');
            }
             
            this.previousTop = currentTop;
        });
    }




    //open/close primary navigation
    $('.cd-primary-nav-trigger').on('click', function(){
        $('.icon-container').toggleClass('is-clicked'); 
        $('.nav').toggleClass('menu-is-open');
        $('.nav').toggleClass('is-clicked');
        $('.logo').toggleClass('hidden');
            
        
        //in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
        if( $('.cd-primary-nav').hasClass('is-visible') ) {
            
            $('.cd-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
                $('.icon-container').addClass('is-visible');
                $('body').removeClass('overflow-hidden');
                
            });
        } else {
            $('.cd-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
                $('.is-fixed').toggleClass('hidden');
                $('body').addClass('overflow-hidden');
            }); 
        }
    });
});



/*	var MQL = 1170;

	//primary navigation slide-in effect
	if($(window).width() > MQL) {
		var headerHeight = $('.cd-header').height();
		$(window).on('scroll',
		{
	        previousTop: 0
	    }, 
	    function () {
		    var currentTop = $(window).scrollTop();
		    //check if user is scrolling up
		    if (currentTop < this.previousTop ) {
		    	//if scrolling up...
		    	if (currentTop > 0 && $('.cd-header').hasClass('is-fixed')) {
		    		$('.cd-header').addClass('is-visible');
		    		$('.menu').removeClass('cd-menu-icon');
		    		$('.menu').addClass('cd-menu-icon1');
		    		$('#logo').attr("src","images/logo_white.png");
		   
		    	} else {
		    		$('.cd-header').removeClass('is-visible is-fixed');
		    		$('.menu').removeClass('cd-menu-icon1');
		    		$('.menu').addClass('cd-menu-icon');
		    		$('#logo').attr("src","images/logo.png");

		    	}


		    } else {
		    	//if scrolling down...
		    	$('.cd-header').removeClass('is-visible');
		    	if( currentTop > headerHeight && !$('.cd-header').hasClass('is-fixed')) $('.cd-header').addClass('is-fixed');
		    }
		     
		    this.previousTop = currentTop;
		});
	}



	//open/close primary navigation
	$('.cd-primary-nav-trigger').on('click', function(){
		$('.cd-menu-icon').toggleClass('is-clicked'); 
		$('.cd-header').toggleClass('menu-is-open');
		$('.cd-menu-icon').toggleClass('is-notclicked'); 
		$('.logo').toggleClass('hidden');

			
		
		//in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( $('.cd-primary-nav').hasClass('is-visible') ) {
		
			$('.cd-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');


				
			});
		} else {
			$('.cd-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('.is-fixed').toggleClass('hidden');
				$('body').addClass('overflow-hidden');
			});	
		}
	});
});

$('.is-clicked').on('click', function(){

$('.cd-menu-icon').addClass('is-notclicked'); 

});*/


 function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
          center: new google.maps.LatLng(23.755408, 90.366498),
          zoom: 18,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        	var image = 'images/webable-marker.png';
  			var myLatLng = new google.maps.LatLng(23.755408, 90.366498);
  			var beachMarker = new google.maps.Marker({
      		position: myLatLng,
      		map: map,
      		icon: image
 		 });

  			map.set('styles', [
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      { color: '#0079dd' },
      { weight: 1.6 }
    ]
  },
]);
              }
      google.maps.event.addDomListener(window, 'load', initialize);

   
