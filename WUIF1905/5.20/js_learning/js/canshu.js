const ex = [1,56,489,3,4,6,48,-8];
const a =[1,2,3,4,5,6,7,8];
const b =[];
// mvalue(ex,'>');
// mvalue(ex,'<');

redefi(a,b);

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
function redefi(arr1, arr2) {
    for (var i = arr1.length-1;i>0;i--){
        for (var j =0; j<arr1.length; j++){
            arr2[j] = arr1[i];

        }

    }
    for (var k =0; k<arr2.length; k++){
        arr1.push(arr2[k]);
    }
    document.write(arr1);
}