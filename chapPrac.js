/**
 * 1.inserting one element in array
 */
// arr= [2,3,5,4]
// const insert=()=>{
// for(let i=0;i<arr.length;i++){
//     arr.splice(4,1,8)
  //  console.log(arr);
  //way of adding number ==> arr.push(5)
// }
// }
/** 
*3.insert()
*/
//filter nums divisible by 10
// arr1=[20,30,41,50,51]
// const divisible=()=>{
//     for(let i=0;i<arr1.length;i++)
//     var x =arr1.filter(i=>{
//        return i%10==0;
//     })
//     console.log(x)
// }
//  divisible();


/**
 * 4.square of given arr
 */
//  arr1=[2,1,3,4,1]
//  const square=
//  arr1.map(value=>{
// //     console.log(value);
//      return value**2; 
//   })
//  console.log(square);

/**
 * 5.factorial of first n numbers
 */
let array=[2,4,6,2]
var x = array.reduce((a1,a2)=>{
    return a1*a2;
})
console.log(x);
/**
 * 2.adding nums until zero(0)
 */

// let arr=[1,23,4,5]
// var a=1; 
// do{
// arr.push(a)
// }while(a!=0)
// console.log(arr)