$(function () {
    let table =$("table");
    let progressBar = $('.progress-bar');
    let progress = $('.progress');

    $(document).ajaxStart(function () {
        progressBar.css({width:'30%',display:'block'})
    });
    $(document).ajaxSuccess(function () {
        progressBar.css({width:'100%'})
    })
    progressBar.on('webkitTransitionEnd',function () {
        $(this).css({display: 'none',width:0})
    });

    ///////////////查询/////////////////
     $.ajax({
         url:"php/query.php",
         type:'POST',
         async:true,
         data:"date",
         dataType:'json',
         success:function (res) {
           let {code,data}=res;
             if (code == 1){
                render(data);
           } else {

           }
       }
      });
    ////////////////修改///////////////////////
    table.on('blur','input',{},function () {
        let id =$(this).closest('tr').attr('id');
        let val =$(this).val();
        let type =$(this).data("type");
        console.log(id,val,type);
        $.ajax({
            url: 'php/update.php',
            data: {id,val,type},
            dataType: 'json',
            success:function (res) {
                let {code,msg}=res;
            }
        });
    });
    ///////////////添加/////////////////////////
    $('[type=submit]').on('click',function (e) {
        e.preventDefault();
        let data =$('form').serializeArray();
        $.ajax({
            url:'php/insert.php',
            type:'POST',
            data:data,
            dataType:'json',
            success:function (res) {
                let {code,msg}=res;
                if (code === 0){
                    console.log(1);
                    let obj = arrayToJson(data);
                    render([obj]);
                }
            },
        })
    });
    function arrayToJson(data) {
        let obj ={};
        data.forEach(function (ele) {
            let{name,value}=ele;
            obj[name] = value;
        });
        return obj;
    }



        // 删除
         table.on('click','button',function () {
            let tr =$(this).closest('tr');
            let id = tr.attr('id');
            $.ajax({
                url: 'php/delete.php',
                type: 'POST',
                data: {id},
                dataType: 'json',
                success:function (res) {
                    let {code,msg} = res;
                    if(code==1){
                        tr.remove();
                        tr=null;
                    }else{

                    }
                }
            });

         });
     ////////////////////////////////////////////////////////
        function render(data) {
            let html ='';
            data.forEach(ele=>{
                html +=`
                <tr id="${ele.id}">
                    <td><input type="text" value="${ele.names}" data-type="names"></td>
                    <td><input type="text" value="${ele.sex}" data-type="sex"></td>
                    <td><input type="text" value="${ele.age}" data-type="age"></td>
                    <td><input type="text" value="${ele.major}" data-type="major"></td>
                    <td><button class="btn btn-danger btn-sm">删除</button></td>
                </tr>
                `
            });
            table.html((index,value)=>value+html);

        }
});