function grading(arr){
    let r=arr.map((i)=>{
        if(i<38){
          //  console.log('first i<38',i)
            return i;
        }else if(i%5<3){
          console.log('second',i%5<3,i)
            return i; 
        }
        else {
          //  console.log('BEFORE THIRD',i)
            let extrMarks = 5-(i%5);
            // console.log('third 5-(i%5)',i);
            // console.log('extrmarks',extrMarks)
            return i+extrMarks;
      }
    });
    // console.log(r);
    // return;
}
let arr1  = [10,20,54,38]
grading(arr1);