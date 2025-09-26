<?php

	function request($name)
	{
		return isset($_REQUEST[$name])?  $_REQUEST[$name] : '';
	}

	if( $mail = request('email'))
	{
		require_once('gr/GetResponseAPI3.class.php');

		$getresponse = new GetResponse('23b791fc5bded46a55214440e6d4ea14');
		$getresponse->enterprise_domain = 'engexpert.ru';

		//api URL is relative to your domain UR:
		$getresponse->api_url = 'https://api3.getresponse360.com/v3'; //default
		// $getresponse->api_url = 'https://api3.getresponse360.pl/v3'; //default

		//  Search contacts
		$contacts = $getresponse->getContacts(array(
			'query' => array(
				'email' => $mail,
			),
			// 'fields' => 'name,email'
		));

		print_r($contacts);
		/*

		// Set tags
		if($contacts && isset($contacts[0]) && isset($contacts[0]['contactId']) )
		{
			$contact_id = $contacts[0]['contactId'];
			$res = $getresponse->setContactTags($contact_id, [
				'tags' => [
					['tagId' => 'eng_funnel_pdf']
				]
			]);
			print_r($tes);
		}
		*/
	}