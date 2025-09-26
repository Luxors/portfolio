<?php

$data = array(
        'email'             => $_REQUEST['email']
    ,   'first_name'        => $_REQUEST['first_name']
    ,   'forward_data'      => ''
    ,   'campaign_token'    => 'A'
    );



$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'http://www.email.engexpert.ru/add_subscriber.html'); 
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$server_output = curl_exec ($ch);
curl_close ($ch);

/*

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'http://www.email.engexpert.ru/add_subscriber.html');
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
$otv = curl_exec($ch);
curl_close ($ch);*/

header('Location: http://engexpert.ru/eng/help/?email='.$_REQUEST['email']);  
?>