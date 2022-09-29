// function staircase(n) {
//     let output = '';
//     for (let i = 1; i <= n; i++) {
//         for (let s = n - 1; s >= i; s--) {
//             output += ' '
//         }
//         for (let h = 1; h <= i; h++) {
//             output += '#'
//         }
//         output += "\n"
      
//     }
//     console.log(output)
// }
//     staircase(6);
function staircase(n) {

    // here we use just one for loop where i tracks the number of rows
    // the number of rows (i) should be less than or equal to n
      for (let i = 1; i <= n; i++) {
        // print out a " " n-i times and append a # i times
        // console log adds a new line by default
        console.log(i.repeat(n-i));
          console.log(" ".repeat(n-i) + "#".repeat(i))
      }    
  }
  staircase(6);

  