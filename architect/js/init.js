$(function()
{
	function jc_submit($form, callback, callback_done) {
        var data = $form.serialize();
        $.ajax({
			url: 'submit.php'+window.location.search
		,	type: 'POST'
		,	data: data
        })
        .done(callback_done)
        .always(callback);
	}

	var go = false;
	function onSubmit(e)
	{
		if(go) return  false;
        go = true;
        e.preventDefault();
		var $form = $(this);
		$form.off();
		$form.submit(onSubmit);

		jc_submit($form, function(){
			//ga('send', 'event', 'delomm', 'form');
			//yaCounter18188044.reachGoal('sub_drive_activation');
			go = false;
			// $form.submit();
		}, function(){
			$form.parent().prev('.connect__head').hide();
            $form.find('.form-inner, .agreement').hide();
            $form.find('.after_submit').show();
        });
		return false;
	}

    $('form').submit(onSubmit);
    
});
