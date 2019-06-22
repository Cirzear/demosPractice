<?php
$id = $_POST["id"];
$mysql = new mysqli('localhost', 'root', '', 'wuif190502', '3306');
if ($mysql->connect_errno) {
    echo '数据库连接失败,失败原因', $mysql->connect_errno;
    exit();
}
$mysql->query("set names utf8");
$sql = "delete from students where id=$id";
$result = $mysql->query($sql);
$mysql->affected_rows;
echo json_encode([
    'code'=>1,
    'msg'=>"删除成功"
]);