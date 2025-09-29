$(document).ready(function(){
	//slide function
    $('a[href^="#"], *[data-href^="#"]').on('click', function(e){
        e.preventDefault();
        var t = 1000;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
    });
	
	//faq function
	$('.faq__question').click(function(){
		$(this).next('.faq__answer').slideToggle(300);
	});
	
	//modal
	$("#modalOpen").click(function(){
		$("#modal").fadeIn();
		$("html,body").css("overflow","hidden");
	});
	
	$("#modalClose").click(function(){
		$("#modal").fadeOut();
		$("html,body").css("overflow","auto");
	});
	
	$.modal().open({
    onOpen: function(el, options){
        $.get('http://example.com/', function(data){
            el.html(data);
        });
    }
});
});
