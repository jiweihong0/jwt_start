<?php

$router->register('getUsers', 'Employee', 'getUsers');
$router->register('newUser', 'Employee', 'newUser');
$router->register('removeUser', 'Employee', 'removeUser');
$router->register('updateUser', 'Employee', 'updateUser');


$router->register('getbook', 'book', 'getbook');
$router->register('newbook', 'book', 'newbook');
$router->register('removebook', 'book', 'removebook');
$router->register('updatebook', 'book', 'updatebook'); 
$router->register('getbooktitle', 'book', 'getbooktitle');
$router->register('getBookRemark', 'book', 'getBookRemark');
$router->register('updateBookRemark', 'book', 'updateBookRemark');



$router->register('getpub', 'publish', 'getpub');
$router->register('newpub', 'publish', 'newpub');
$router->register('removepub', 'publish', 'removepub');
$router->register('updatepub', 'publish', 'updatepub'); 
$router->register('getpubname', 'publish', 'getpubname');

$router->register('getrecord', 'record', 'getrecord');
$router->register('getrecordlist', 'record', 'getrecordlist');
$router->register('newrecord', 'record', 'newrecord');
$router->register('removerecord', 'record', 'removerecord');
$router->register('updaterecord', 'record', 'updaterecord'); 
$router->register('newrecordlist', 'record', 'newrecordlist');
$router->register('getrecordlistbook', 'record', 'getrecordlistbook');  
$router->register('DelRecordlist', 'record', 'DelRecordlist');  
$router->register('updaterecordlist', 'record', 'updaterecordlist'); 
$router->register('getGuestRecord', 'record', 'getGuestRecord');

$router->register('getguest', 'guest', 'getguest');
$router->register('newguest', 'guest', 'newguest');
$router->register('removeguest', 'guest', 'removeguest');
$router->register('updateguest', 'guest', 'updateguest'); 
$router->register('getguestname', 'guest', 'getguestname');

$router->register('getLost', 'Lost', 'getLost');
$router->register('newlost', 'Lost', 'newlost');
$router->register('getEaclost', 'Lost', 'getEaclost');

$router->register('insertsup', 'sup', 'insertsup');
$router->register('selsup', 'sup', 'selsup');
$router->register('updatesup', 'sup', 'updatesup');
$router->register('removesup', 'sup', 'removesup');

$router->register('getOrders', 'Order', 'getOrders');
$router->register('getOrderlist', 'Order', 'getOrderlist');
$router->register('newOrder', 'Order', 'newOrder');
$router->register('newItem', 'Order', 'newItem');
$router->register('getProducts', 'Employee', 'getUsers');        

$router->register('hasPermission', 'User', 'hasPermission');  