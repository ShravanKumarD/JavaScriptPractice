let arr=[10,20,30,40,50]
let arr1=[22,53]
console.log(arr[1]=3);
console.log(arr);
console.log(arr.length);
// let ab=arr.toString();
// console.log(arr.join("-"));
// console.log(ab);
let x= arr.pop(20)//to remove end 
console.log(x);

delete arr[1]
console.log(arr);
/*
shift & unshift are used to remove elements at the begining of the array
*/
// z=arr.concat(arr1);

// console.log(z.sort());

// let com=(a,b)=>{
//      return a-b
// }
let sort=(a,b)=>{b-a}

//let newArr = [10,20,250,40,41,540,5,89]
//newArr.splice(2,2);
//console.log(newArr);
let newArr = [10,20,250,40,41,540,5,89]
newArr.splice(2,2,1008,1003);
console.log(newArr)

let Ar =[1,2,3,2,5,4]

Ar.forEach(Element=>{
console.log(Element**3)
});
/**
 * to convert object to array
 * we use 
 * Array.from(--Object name );
 */
let name = "shravan"
console.log(typeof name);
let newname = Array.from(name);
console.log(typeof newname);

//for of
for(let i of newArr){
    console.log(i);
}//it will return elements in the array

//for in
//it will return the index  of the array
for(let j in newArr){
    console.log(j);
}
