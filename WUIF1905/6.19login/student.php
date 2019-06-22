<?php
    session_start();
    if(!isset($_SESSION['username'])){
        header('location:login.html');
    }
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="./js/jquery-3.4.1.js"></script>
    <script src="./js/login.js"></script>
    <script src="./js/student.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <title>Document</title>
    <style>

        input{
            border: none;
            background: transparent;
        }
    </style>
</head>
<body>
<div style="width: 100%;height:2px;" class="progress">
    <div class="progress-bar" role="progressbar"  style="transition:1s;width: 0%;height:2px;display: none;">

    </div>
</div>

<nav class="navbar navbar-default">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <s1pan class="icon-bar"></s1pan>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Brand</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

            <form class="navbar-form navbar-left">
                <div class="form-group">
                    <input type="text" name="names" class="form-control" placeholder="Names">
                    <input type="text" name="sex" class="form-control" placeholder="Sex">
                    <input type="text" name="age" class="form-control" placeholder="Age">
                    <input type="text" name="major" class="form-control" placeholder="Major">
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
            </form>
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <a href="#">
                        <?php
                            echo $_SESSION['username'];
                        ?>
                    </a>
                </li>

            </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>
<table class="table table-striped">
    <tr>
        <th>姓名</th>
        <th>年龄</th>
        <th>性别</th>
        <th>专业</th>
        <th>操作</th>
    </tr>

</table>

</body>
</html>