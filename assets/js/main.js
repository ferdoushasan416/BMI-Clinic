(function ($) {
"use strict";

$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});

 //Navber//
(() =>{
 
	const openNavMenu = document.querySelector(".open-nav-menu"),
	closeNavMenu = document.querySelector(".close-nav-menu"),
	navMenu = document.querySelector(".main-menu"),
	menuOverlay = document.querySelector(".menu-overlay"),
	mediaSize = 991;
  
	openNavMenu.addEventListener("click", toggleNav);
	closeNavMenu.addEventListener("click", toggleNav);
	// close the navMenu by clicking outside
	menuOverlay.addEventListener("click", toggleNav);
  
	function toggleNav() {
	  navMenu.classList.toggle("open");
	  menuOverlay.classList.toggle("active");
	  document.body.classList.toggle("hidden-scrolling");
	}
  
	navMenu.addEventListener("click", (event) =>{
		if(event.target.hasAttribute("data-toggle") && 
		  window.innerWidth <= mediaSize){
		  // prevent default anchor click behavior
		  event.preventDefault();
		  const menuItemHasChildren = event.target.parentElement;
		  // if menuItemHasChildren is already expanded, collapse it
		  if(menuItemHasChildren.classList.contains("active")){
			collapseSubMenu();
		  }
		  else{
			// collapse existing expanded menuItemHasChildren
			if(navMenu.querySelector(".menu-item-has-children.active")){
			collapseSubMenu();
			}
			// expand new menuItemHasChildren
			menuItemHasChildren.classList.add("active");
			const subMenu = menuItemHasChildren.querySelector(".sub-menu");
			subMenu.style.maxHeight = subMenu.scrollHeight + "px";
		  }
		}
	});
	function collapseSubMenu(){
	  navMenu.querySelector(".menu-item-has-children.active .sub-menu")
	  .removeAttribute("style");
	  navMenu.querySelector(".menu-item-has-children.active")
	  .classList.remove("active");
	}
	function resizeFix(){
	   // if navMenu is open ,close it
	   if(navMenu.classList.contains("open")){
		 toggleNav();
	   }
	   // if menuItemHasChildren is expanded , collapse it
	   if(navMenu.querySelector(".menu-item-has-children.active")){
			collapseSubMenu();
	   }
	}
  
	window.addEventListener("resize", function(){
	   if(this.innerWidth > mediaSize){
		 resizeFix();
	   }
	});
  
  })();
//Tab function //
$('.tab-menu button').eq(0).addClass('active') 
$('.tab-box').hide()
$('.tab-box').eq(0).show()

$('.tab-menu button').each(function(i){
    $(this).click(function(){
        
        if( $(this).hasClass('active') ) return false
        
        else{
            $('.tab-menu button').removeClass('active')
            $(this).addClass('active')
            $('.tab-box').hide()
            $('.tab-box').eq(i).show()
            
        } 
    })
});
// Slides //
  $('.about-image-slides').slick({
    arrows: true,
    dots: false,
    autoplay: false,
    speed: 300,
    slidesToShow: 1,
    prevArrow: '<span class="priv_arrow"><i class="fa-light fa-arrow-left-long"></i></span>',
    nextArrow: ' <span class="next_arrow"><i class="fa-light fa-arrow-right-long"></i></span>',
    responsive: [
      {
      breakpoint: 1199,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
      },
      {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
      }
      },
      {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
      }
      }
    ]
    });

/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


// WOW active
new WOW().init();


})(jQuery);