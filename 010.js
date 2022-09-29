let arr = [7,69, 2, 221, 8974]
let counter = 0;
let x = 0;
let flag=0;
arr.sort((a,b)=>{return a-b});
console.log(arr);
for(i=0;i<arr.length-1;i++)
 {
counter +=arr[i];
 }
 x=arr.slice(-4);
 
 for(var j=0;j<x.length;j++){
    flag +=x[j];
 }
console.log(counter);
console.log(flag);
