// JavaScript Document
$(function(){
"use strict";
 var ojbect= {
	 init : function(){
		this.idxBlog();
	 },
	 	idxBlog : function(){
	 		$.ajax({
			'url' : '../blog/_custom/?limit=4',
			'dataType' : 'jsonp',
			'success' : function(json){
				$.each(json.data, function(i,val){
					var title = val.title.length < 90 ? val.title : val.title.substr(0,90)+'...';

					var $li_ind = $('<li/>').html(
					'<span class="date">' + val.date + '</span><span class="new">' + val.category_name + '</span> <a href="../blog/' + val.url + '">'+ title +'</a>'
					);
					$li_ind.appendTo('.idx-ov');
				});
				}
			});
	 	},
	 };
	 ojbect.init();
});