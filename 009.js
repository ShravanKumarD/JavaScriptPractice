function plusMinus(arr) {
    let p=0;
    let m=0;
    let z=0;
    let n = arr.length;
    for(let i=0;i<n;i++){
    if(arr[i]>0){    
     p++
    }else if(arr[i]<0){
    m++
    }else if(arr[i]==0){
       z++;
    }else{
        return;
    }
}
let a = (p/n);
let b = (m/n);
let c = (z/n);
console.log(a.toPrecision(12));
console.log(b);
console.log(c);
return a,b,c;
}
let arr =[-4, 3 ,-9, 0 ,4, 1]
plusMinus(arr);