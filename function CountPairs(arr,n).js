   function CountPairs(arr,n)
    {
        let count = 0;
        // Generate all possible pairs and increment
        // the count if the condition is satisfied
        for (let i = 0; i < n - 1; i++) {
            for (let j = i + 1; j < n; j++) {
                if ((i + j) == (arr[i] + arr[j]))
                    count++;
            }
        }
        console.log( )
        return count;
    }
    // Driver code
    let arr=[1, 0, 3, 2];
    let n = arr.length ;
    document.write(CountPairs(arr, n));
 
 