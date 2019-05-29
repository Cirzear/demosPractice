const ex = [1,56,489,3,4,6,48,-8];
const a =[1,2,3,4,5,6,7,8];
const b =[];
// mvalue(ex,'>');
// mvalue(ex,'<');



function mvalue(arr,type) {
    if(type === "<"){
        minNum(arr);

    }
    else if( type === ">"){
        maxNum(arr);
    }
}

function maxNum(arr) {
    var max = arr[0];

    for (var i =1;i<arr.length;i++){
        if(max<arr[i+1]){
            max = arr[i+1];
        }


    }document.write("最大值为："+max+"<br>");
}

function minNum(arr) {
var min =arr[0];
    for (var i =1;i<arr.length;i++){
        if(min>arr[i+1]){
            min = arr[i+1];

        }


    } document.write("最小值为："+min+"<br>");
}


unshiftArrs(a,'s','d','f');
function unshiftArrs(arr) {
    var newarr =[];
    for (var i =0;i<arr.length;i++) {
        newarr[i] = arr[i];
    }
    arr.length = 0;

    for (var i =1; i<arguments.length;i++){
        arr.push(arguments[i]);
    }
    for (var i = 0; i<newarr.length;i++){
        arr.push(newarr[i]);
    }
    document.write(arr);

}
