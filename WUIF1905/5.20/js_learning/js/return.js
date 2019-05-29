const arr1 =[1,23,3,4,45,589,6,65,8,0,-12];
function gudugudubang(a){
    document.write(gudugudu(a));
}


function gudugudu(arr) {
    for (var i =0;i<arr.length;i++){
        for (var j =0; j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}