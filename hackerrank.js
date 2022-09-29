arr=[[11, 2, 4],
     [4, 5, 6 ],
     [10,8,-12]]
function diagonalDifference() {
    // Write your code here
      var flag = 0;
      var counter=0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (i == j) {
                flag += arr[i][j];
            }
            if(i+j === arr.length){
                console.log(i,j);
                counter+=arr[i][j]
            }
        }
    }
    console.log(flag,counter);
    console.log(flag-counter);
}
diagonalDifference();
