
$(function () {
	$('form[id!="opener"]').submit(function(event) {
		event.preventDefault();
		var $form = $(this);

		$.ajax({
			// url : $form.prop('action'),
			url : $form.data('action'),
			data: $form.serialize(),
			dataType: 'text'
		})
		.done(function(data) {
			console.log("success");
			console.log(data);
			// $('body').append('<a href="'+data+'" id="opener" style="width:1px; height:1px; position:absolute; display: block; opacity: 0.1;" target="_blank"></a>');
			// $('#opener')[0].click();
			// setTimeout(function(){
			// 	$('#opener').remove();				
			// }, 300);
			
			//$('#opener').prop('action', data);
			//$('#opener').submit();
			window.location  = data;
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
		return false;
	});
});