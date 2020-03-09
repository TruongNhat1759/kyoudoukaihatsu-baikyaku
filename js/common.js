// JavaScript Document
$(function() {
    "use strict";
  var obj= {
	  init: function(){
		    this.toTop();
			this.smoothScroll();
			this.anchorScroll();
			this.iconMenu();
			this.changeSize();			
	  },
	  //totop
	  toTop: function(){
		  $("#totop").hide();
		  $(window).scroll(function(){
			  if($(this).scrollTop() > 100){				  
				  $("#totop").fadeIn();
			  }
			  else{
				  $("#totop").fadeOut();				  
			  }
		  });
		  $("#totop a").click(function(){
			 $('body,html').animate({
				scrollTop:0 
			 }, 500);
			 return false;
		  });
	  },
	  //smoothScroll
	  smoothScroll : function(){
		$('a[href^="#"]').click(function(){
			var wWidth = $(window).width();
				if ( $( $(this).attr('href')).length ) {
					var p = $( $(this).attr('href') ).offset();
					if(wWidth <= 640){
						$('html,body').animate({ scrollTop: p.top - 90}, 500);
					} else {
						$('html,body').animate({ scrollTop: p.top - 140}, 500);
					}
				}
			return false;
		});
		},
	  // Anchor scroll
	  anchorScroll : function(){
	  	$(window).load(function(){
		 var wWidth = $(window).width();
		 var hash1= location.hash;
		 var $root = $('html, body');
		 var top01 = $(hash1).offset(); 
			if(wWidth <= 640){
			 if(hash1!==""){ 	  
			  $root.animate({ scrollTop:top01.top - 90}, 500);  
			 }    
			} else {
			 if(hash1!==""){  		  
			  $root.animate({ scrollTop:top01.top - 140}, 500);  
			 }    
			}
		});			
			},
	 //sp gnavi
	 iconMenu : function(){	
            $('.over').mouseenter(function () {
                if (!$(this).hasClass('flag')) {
                    $(this).find('.submenu').stop().fadeIn();
                }
            });
            $('.over').mouseleave(function () {
                if (!$(this).hasClass('flag')) {
                    $(this).find('.submenu').stop().fadeOut();
                }
            });
            $('.menu-icon').click(function () {
                $(this).toggleClass('active');
                $('#gnavi').slideToggle();
            });
            $('.over').click(function () {
                if ($(this).hasClass('flag')) {
                    $(this).toggleClass('active');
                    $(this).find('.submenu').slideToggle();
                }

            });
            $('.close-menu').click(function () {
                $('.menu-icon').removeClass('active');
                $('#gnavi').stop().slideUp('fast');
                $('.over').removeClass('active');
                $('.submenu').fadeOut('fast');
            });
		},
		changeSize: function () {
            $(window).on("load resize", function () {
                var sw = $(window).width();
                if (sw > 640) {
                    $('#gnavi').removeAttr('style');
                    $('.menu-icon').removeClass('active');
                    $('.over').removeClass('flag');

                    $(window).scroll(function(){
	                    if($(this).scrollTop() > 10){
	                    	$('#header').addClass('fixed');
	                    }
	                    else{
	                    	$('#header').removeClass('fixed');
	                    }
	                });
                } else {
                    $('.over').addClass('flag');
                    $('.submenu').removeAttr('style');
                    $('.over').removeClass('active');
                    $('#header').removeClass('fixed');
                }
            });
        },	
  };
  
  obj.init();
});


