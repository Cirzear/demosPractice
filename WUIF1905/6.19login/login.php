<?php
//1.接受前台数据
$user = $_POST['username'];
$pass = md5($_POST['password']);

//2.查询数据库
$mysql = new mysqli('localhost','root','','wuif190502','3306');

if( $mysql->connect_errno ){
    echo '数据库连接失败，失败原因',$mysql->connect_errno();
    exit();
}

$mysql -> query('set names utf8');

$sql = "select * from manager";

$result = $mysql->query($sql)->fetch_all(MYSQLI_ASSOC);

//    var_dump($result);
//3.验证
for( $i = 0; $i < count($result);$i++ ){
    $ele = $result[$i];
    if(($ele['names'] === $user) && $ele['pass'] === $pass){
        session_start();
        $_SESSION['username']=$user;
        echo json_encode([
            'code' =>1,
            'msg'=>"成功"
        ]);
        exit();
    }
}
echo json_encode([
    'code' =>0,
    'msg'=>"失败"
]);