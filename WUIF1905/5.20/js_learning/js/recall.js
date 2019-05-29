

const arr1 = [1,2,35,4,5,['a','b','c','ree','dg','r']];


function deepCopy(arr) {
   let newarr = [];
   for (let i =0; i<arr.length;i++){
    if(typeof arr[i] == "object"){
        newarr[i] = deepCopy(arr[i]);
    }else{
        newarr[i] = arr[i];
    }
   }
   return newarr;
}

console.log(deepCopy(arr1));