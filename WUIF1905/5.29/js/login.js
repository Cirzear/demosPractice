    window.onload = login();


function login() {

    let btn = document.getElementById('btn');

    btn.onclick =function(){

        let username = document.getElementById('name').value;

        let password = document.getElementById('pass').value;

        if (username == 'cirzear' && password == '123456'){
            location.assign('http://cirzear.com');
        }else{
            window.open('error.html')
        }
    }
}