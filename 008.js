a=[1,0,0,0,0,0,0,0,0,1] 
b=[1,0,0,0,0,0,0,0,0,2]
c=[1,0,0,0,0,0,0,0,0,3]
d=[1,0,0,0,0,0,0,0,0,4]
e=[1,0,0,0,0,0,0,0,0,5] 
// function aVeryBigSum() {
//     // Write your code here
// var arr = new Array();
// for(let i=0;i<a.length;i++){
//    let arr =a[i]+b[i]+c[i]+d[i]+e[i];
 
// }
// }
// aVeryBigSum();

function aVeryBigSum(ar) {
    // Write your code here
    var arr=0;
    for(let i=0;i<a.length;i++){
        arr += a[i]
    }
    console.log(arr);
    return arr;


}