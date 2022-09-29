    // function lonely(ar){
    //     {
          
    //         let res = ar[0];
    //         for (var i = 1; i < ar.length; i++)
    //             res = res ^ ar[i];
    //             console.log(res^ar[i]);
    //             console.log(res);
    //         return res;
    //     }
  
    // }
    // let arr =[1,2,3,4,3,2,1]
    // lonely(arr);

    function lonelyinteger(a) {
       
        for (var i = 0; i < a.lenngth; i++) {
            var result = 0;
            for (var j = 0; j < a.length; j++) {
                if (a[i] == a[j]) {
                    result++;
              
                }
            } 
                 if (result == 1) {
                  console.log(a[i]);     
                  console.log(result)  
        }
            }
        }
    let ar = [1,2,3,2,1];
    lonelyinteger(ar);