$(function () {

    let click_id ='';
    let titles = $('header>ul>li');

    for (let i =0; i < titles.length; i++){
        titles[i].onclick = function () {
            if(!titles[i].classList.contains('hot')){
                for (let j = 0; j < titles.length; j++){
                    titles[j].classList.remove('hot');
                }
                this.classList.add('hot');
                click_id = $(this).attr('id');
                render();
            }

        }
    }

    titles[0].onclick();


    function render(){
        let ul =document.querySelector('contents > ul');
        $(ul).empty();
        let xml = new XMLHttpRequest();
        xml.open('GET',`./data/data.php?type=${click_id}`,true);
        xml.send();
        xml.onreadystatechange=function () {
            if (xml.readyState === 4){
                if(xml.status === 200){
                    console.log(xml.response);
                    let data = JSON.parse(xml.response);
                    let html = '';

                    data.forEach(ele=>{
                        html+=`
                            <li>title:${ele.title}</li>
                            <li>name:${ele.name}</li>
                            <li>id:${ele.id}</li>
                        `
                    });
                    ul.innerHTML=html;
                }
            }
        }
    }


})