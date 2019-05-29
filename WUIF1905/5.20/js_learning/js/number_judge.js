const arr1 = [1,65,21,23,1,4,8,9,3,156,16561,999]

const arr2 = [123,1651,-1,189]

const arr3 = [1,2,3,4,5,6,7,8]

const arr4 = [1,17,31,13,16,684,18,16,16]

const arr5 =[1,5,8,4,1,3,88,11,3,4,64]


function is_cunzai() {
    var input_num = document.getElementById('numbers').value;

    for (var i = 0; i <arr1.length; i++){
        if(input_num == arr1[i]){
            document.write("存在该值");
            break;
        }


    }

}

function is_allzs() {
    for (var i =0; i<arr2.length;i++){
        while(arr2[i] < 0){
            document.write("非也")
            break;
        }
    }
}
function all_twice() {
    for (var i =0; i<arr3.length;i++){
       arr3[i] *= 2;
    }
    document.write(arr3);
}
function chuxcs() {
    var input_num = document.getElementById('numbers').value;
    var j =0;
    for (var i =0; i<arr4.length;i++){
        if (input_num == arr4[i]){
            j++;
        }
    }
    document.write(input_num+"出现"+j+"次");
}
function small_to_big() {
    var temp = 0;
    for (var i = 0; i< arr4.length; i++){
        for (var j = 0; j<arr4.length-1-i;j++)
        if (arr4[j] > arr4[j+1]){
            temp = arr4[j];
            arr4[j] = arr4[j+1];
            arr4[j+1] = temp;
        }
    }
    document.write(arr4);
}
function quc() {
    var arr_quc =[];
    for (var i =0; i<arr5.length; i++){
        for (var k = i+1; k<arr5.length; k++){
            if(arr5[i] === arr5[k]){
               i++;
            }

        } arr_quc.push(arr5[i]);
    }document.write(arr_quc);

}
function big_to_small() {
    var temp = 0;
    for (var i = 0; i< arr4.length; i++){
        for (var j = 0; j<arr4.length-i-1;j++)
            if (arr4[j] < arr4[j+1]){
                temp = arr4[j];
                arr4[j] = arr4[j+1];
                arr4[j+1] = temp;
            }
    }
    document.write(arr4);
}