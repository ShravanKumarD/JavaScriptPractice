function unique(arr){
    arr.sort((a,b)=>{return a-b});
   for(var i=0;i<arr.length;i++){
     if(arr.count(i)<2){
        console.log(i)
        return i;
   }
}
console.log(arr[i]);
}
let ar = [1,2,3,4,3,2,1]
unique(ar);