<?php
$mysql = new mysqli('localhost', 'root', '', 'wuif190502', '3306');
if ($mysql->connect_errno) {
    echo '数据库连接失败,失败原因', $mysql->connect_errno;
    exit();
}
$data = array_keys($_POST);
$mysql->query("set names utf8");
$sql = "insert into students(";
for ($i = 0; $i < count($data); $i++) {
    $sql .= $data[$i] . ',';
}
$sql = substr($sql, 0, -1) . ')values(';
foreach ($_POST as $data => $value) {
    $sql .= "'$value',";
}
$sql = substr($sql, 0, -1) . ')';

$mysql->query($sql);
$result = $mysql->affected_rows;

if ($result == 1) {
    echo json_encode([
        'code' => 0,
        'msg' => '添加成功',
    ]);
} else {
    echo json_encode([
        'code' => 1,
        'msg' => '添加失败'
    ]);
}
