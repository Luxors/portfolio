<?php

//Принимает метки из запроса
$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$phone = $_REQUEST['phone'];
$time = $_REQUEST['time'];
    

//Собираем параметры для гугл-таблицы
$params = array(
     'entry.1722875805'        =>  $name
    ,'entry.1772486307'        =>  $email
    ,'entry.98801218'          =>  $phone
    ,'entry.1908283355'        =>  $time
    ,'fvv'                     =>  '1'
    ,'draftResponse'           =>  '[null,null,"3719319166459504169"]'
    ,'fbzx'                    =>  '3719319166459504169'
    ,'pageHistory'             =>  '0'
);

//Формируем пост-запрос в гугл-форму
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://docs.google.com/forms/d/e/1FAIpQLSdUKxG5tyXNw_eIr5VCK6MdV6/formResponse'); 
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); 
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
$data = curl_exec($ch); 
curl_close($ch);
      
//Отправляем емейл на почту 
$to      = ''; //от кого
$subject = 'Новая заявка с сайта';     //тема письма
$message = "
Новая заявка с сайта: 
Имя - ".$name."
Телефон - ".$phone."
Почта - ".$email."
Время - ".$time."
";                                     //сообщение

mail($to, $subject, $message);         //запрос на отправку
?>