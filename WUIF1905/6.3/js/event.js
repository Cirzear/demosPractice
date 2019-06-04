
    let box = document.querySelector('.box');

    box.onclick = function(){
        this.classList.toggle('green');
    }


    box.addEventListener('click',fn)

    function fn() {
        let flag =box.classList.contains('green');
        if(flag){
            this.style.height = "150px";
        }else{
            this.style.height = "300px";
        }
    }