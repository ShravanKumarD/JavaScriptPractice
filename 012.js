function staircase(n) {
    // Write your code here
    let str = 1;
for(var i = 1;i<=str.length;i++){
    for(var j =str.length;j<=1;j++){
        str += str[i]+str[j]+'#';
    
        console.log(str);
    }
}
console.log(str);
return str;
}
staircase(6);