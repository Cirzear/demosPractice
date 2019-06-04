window.addEventListener('load',function () {
    let title = document.querySelectorAll('.tab>li');
    let contents = document.querySelector('.content');
    let prev =0;
    let todolist =[
        {
            id:1, content:'放假好好睡一觉',ctime:'2019.06.08',status:false
        },
        {
            id:2, content:'放假好好睡两觉',ctime:'2019.06.09',status:false
        },
        {
            id:3, content:'不睡觉',ctime:'2019.06.07',status:true
        },
        {
            id:4, content:'学习',ctime:'2019.06.06',status:true
        }

    ];

        title.forEach((ele,index) => {
            ele.onclick = function () {
                title[prev].classList.remove('hot');
                this.classList.add('hot');
                prev = index;
                let types = this.getAttribute('type');
                // console.log(type);
                let arr = [];
                switch(types){
                    case 'all':
                        arr = todolist;
                    break;
                    case 'done':
                        arr = todolist.filter(function (ele) {return ele.status});
                        break;
                    case 'left':
                        arr = todolist.filter(function (ele) {return !ele.status});
                        break;
                 }
                render(arr);
            }
        });
    title[0].onclick();
    ///////////////////修改状态///////////////////////////////////
    /*
        视图->数据
        li ->数组元素
        复选框 ->数组元素status (li->id)

     */
    /////////////////渲染/////////////////////////////

    let checkbox = document.querySelectorAll('input[type = checkbox]')

    checkbox.forEach(ele=>{
        ele.onclick =function () {
            let id = this.parentNode.id;
            let arr = todolist.filter(eles=>eles.id=id)[0];
            arr.status = true;
        }
    })

    function render(arr) {
        let html = '';
        arr.forEach(function (elem) {
            if(elem.status){
                html +=`
                    <li id = ${elem.id}>
                        <input type="checkbox" checked> <p>${elem.content}</p> <time>${elem.ctime}</time>
                    </li>
                `;
            }else{
                html +=`
                <li id = ${elem.id}>
                    <input type="checkbox" > <p>${elem.content}</p> <time>${elem.ctime}</time>
                </li>
                `;
            }
        })
        contents.innerHTML = html;
    }
})
