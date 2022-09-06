let arr=[1,2,3,4,5,6]
function time(){
    s=0
    for(var i=0;i<arr.length;i++){
        s=s+arr[i];
    }
    console.log("tottal :",s)
}
time();