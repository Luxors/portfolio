function save_reg_init($form, field_name, field_email, postfix )
{
	var name  = $.cookie('user_' +postfix);
	var email = $.cookie('email_'+postfix);
	if( name  ) $form.find('input[name="'+field_name +'"]').val(name);
	if( email ) $form.find('input[name="'+field_email+'"]').val(email);

	$form.submit(function(event) {
		var form = this;
        $.cookie('user_' +postfix, form[field_name ].value, {expires: 365, path: '/'});
        $.cookie('email_'+postfix, form[field_email].value, {expires: 365, path: '/'});
        
		// return false;
		return true;
	});

}