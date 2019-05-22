function delete_odd() {
    var arr1 = [1,2,3,4,5,6,7,8,9]
    var arr2 =[]
    var a = 0;
    for (var i = 0; i<arr1.length; i++){
        if(arr1[i] % 2 !=0){

            arr2[a] =arr1[i];
            a++;
        }
    }
    document.write(arr2);

}
function maxNum() {

    var arr = [1,56,6516,23,123,456,33,58,4]
    var max =arr[0];
    for (var i =1;i<arr.length;i++){

        if(max<arr[i]){
            max = arr[i];
        }
    } document.write(max);
}