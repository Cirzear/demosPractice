



// function jiech(a) {
//     var sum = 1;
//     for (let i = 1;i<=a;i++){
//         sum *= i;
//     }
//
//     return sum;
// }

    function jiech(a) {
        var sum ;
        if(a>1){
            sum = a * jiech(a-1);
            return sum;
        }
        else if(a == 1){
            return 1;
        }
    }


function  jc() {
    var jiech_number = document.getElementById("jiech_num").value;
    document.write(jiech_number+"的阶乘是：")
    document.write(jiech(jiech_number));
}