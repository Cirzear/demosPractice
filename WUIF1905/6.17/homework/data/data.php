<?php
    $study = [
        [
            'title'=>'学习',
            'name'=>'陈龙',
            'id'=>'study'
        ],


    ];
    $entertainment=[
        [
            'title'=>'娱乐',
            'name'=>'陈龙',
            'id'=>'entertainment'
        ],
    ];
    $PE=[
        [
            'title'=>'体育',
            'name'=>'陈龙',
            'id'=>'P.E'
        ],
    ];

    $id = $_GET['type'];

    switch ($id){
        case 'study':
            echo json_encode($study);
            break;
        case 'entertainment':
            echo json_encode($entertainment);
            break;
        case 'PE':
            echo json_encode($PE);
            break;
    }
