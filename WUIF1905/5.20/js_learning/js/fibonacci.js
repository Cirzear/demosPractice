function fibonac() {
    var arr =[]

    var i =1,j=1,k=0;
    arr.push(i)
    arr.push(j)
    for (var a=1;a<100;a++){

        k=i+j;
        if (k<100) {
            arr.push(k);
            i = j;
            j = k;
        }else
            break;
    }

    document.write(arr);
}