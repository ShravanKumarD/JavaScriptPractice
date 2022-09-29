function birthdayCakeCandles(candles) {
    let sum = 0;
    let max  = 0;
    candles.sort((a,b)=>{return a-b});
    console.log(candles);
    let n = candles.length;
    let mid = n/2;
    let num;
    for(let i=0;i<n;i++){
    if(candles[i] >= max){
       if(candles[i] == max){
        sum++;

    }else if(candles[i]>max){
        console.log(candles[i],max)
        max = candles[i];
        sum=1;
    }
}
    }
    console.log(sum);
return sum;
}
let arr = [0,2,1,3];
birthdayCakeCandles(arr)


