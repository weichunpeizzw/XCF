<?php
// $host="localhost";
// $db_user="root";
// $db_pass="root";
// $db_name="chikefang";
//老版本
$link = @mysqli_connect( 
 'localhost', /* The host to connect to 连接MySQL地址 */  
 'root',   /* The user to connect as 连接MySQL用户名 */  
 'root', /* The password to use 连接MySQL密码 */  
 'chikefang');  /* The default database to query 连接数据库名称*/
header("Content-Type: text/html; charset=utf-8");
?>