$(function () {
    let inputs = document.querySelectorAll('.input_tab');
    for (let i = 0; i<inputs.length;i++){
        inputs[i].onfocus=function () {
            this.classList.add('shadow');
        }
        inputs[i].onblur=function () {
            this.classList.remove('shadow');
        }
    }


    let user =　$(':text');
    let pass = $(':password');
    let submitBtn = $(':submit');

    submitBtn.on('click',function (e) {
        e.preventDefault();
        let qs = $('form').serialize();
        let xml = new XMLHttpRequest();
        xml.open('POST',"./login.php");
        xml.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xml.send(qs);
        xml.onload = function () {
            xml.response;
        }
    })



})