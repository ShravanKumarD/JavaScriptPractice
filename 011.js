let arr1 = [10,10,10,10,2,2,3,3,5];
let n = 7;
function a(arr,n){
    let i=0;
    let res =0;
    while(i<n){
        let e = arr[i];
        let counter = 1;
        i++;
    while(i<n && arr[i]==e){
    counter++;
    i++;
    }
    if(counter >= 2){
        res = res + Math.floor(counter/2);
    } 
}
    return res;
}
console.log(a(arr1,n));