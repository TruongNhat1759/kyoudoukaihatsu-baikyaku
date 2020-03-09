// JavaScript Document
$(function(){
"use strict";
 var ojbect= {
	 init : function(){
		this.idxWow();
		this.idxCase();
		this.idxBlog();
	 },
	 	idxWow : function(){
	 		new WOW().init();

	 		var tBox = $('#mainvisual').offset();
	 		$(window).scroll(function(){
                if($(this).scrollTop() > tBox.top){
                	$('.b01-person').addClass('fadeInRight');
                }
                else{
                }
              });
	 	},
	 	idxCase : function(){
	 		$.ajax({
			'url' : 'work/case/_custom/',
			'dataType' : 'jsonp',
			'success' : function(json){
				$.each(json.data, function(i,val){
					var title = val.title.length < 30 ? val.title : val.title.substr(0,30)+'...';
					var img = "";
                        if(val.img01){
                            img = $(val.img01).attr('src');
                        } 
                        else {
                            img = "images/under_img02.jpg";
                        }
                    var price = "";
                        if(val.txt06){
                            price = val.txt06+'万円';
                        } 
                        else {
                            price = "-";
                        }
                    var txt01 = "";
                        if(val.txt05){
                            txt01 = val.txt05;
                        } 
                        else {
                            txt01 = "-";
                        }
                    var txt02 = "";
                        if(val.txt02){
                            txt02 = val.txt02;
                        } 
                        else {
                            txt02 = "-";
                        }
                    var txtnew = "";
                        if(val.new){
                            txtnew = '<span class="new">新着</span>';
                        } 
                        else {
                            txtnew = '<span class="none"></span>';
                        }

					var $li_ind = $('<li/>').html(
					'<a href="work/case/' + val.url + '"><div class="img"><img src="' + img + '" alt="'+val.title+'">' + txtnew + '</div><p class="title">' + title + '</p><p class="price"><i>' + price + '</i></p><dl class="cont"><dt><span>物件種目</span>' + txt01 + '</dt><dd><span>最寄り駅</span>' + txt02 + '</dd>'
					);
					$li_ind.appendTo('.b03-silder');
				});
				$('.b03-silder').slick({
					infinite: true,
					slidesToShow: 4,
					slidesToScroll: 1,
					variableWidth : true,
					responsive: [
					    {
					      breakpoint: 641,
					      settings: {
					        slidesToShow: 2,
							variableWidth : false,
					      }
					    },
					    {
					      breakpoint: 481,
					      settings: {
					        slidesToShow: 1,
					        variableWidth : false,
					      }
					    },
					   ]
				});
			}
		});
	 	},
	 	idxBlog : function(){
	 		$.ajax({
			'url' : 'blog/_custom/?limit=4&sort=date&order=bottom',
			'dataType' : 'jsonp',
			'success' : function(json){
				$.each(json.data, function(i,val){
					var title = val.title.length < 90 ? val.title : val.title.substr(0,90)+'...';

					var $li_ind = $('<li/>').html(
					'<span class="date">' + val.date + '</span><span class="new">' + val.category_name + '</span> <a href="blog/' + val.url + '">'+ title +'</a>'
					);
					$li_ind.appendTo('.idx-ov');
				});
				}
			});
	 	},
	 };
	 ojbect.init();
});