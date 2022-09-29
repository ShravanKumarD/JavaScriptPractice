let alice = [5, 6, 7];
let bob = [3, 6, 10];

const compareTriplets = (a, b) => {
    counterA=0;
    counterB=0;
    for (let i = 0; i < alice.length; i++) {

        if (alice[i] == bob[i]) {
            //console.log("equal")
        }
        else if (alice[i] > bob[i]) {
            //console.log("alice received a point");
            counterA++;
        } else if (alice[i] < bob[i]) {
            //console.log("bob received a point");
            counterB++;
            
        } else {
            return;
        }
  
    }
    //let arr=new Array();
    //arr.push(counterA);
    //arr.push(counterB);
    //console.log(counterA," "+counterB);

    let arr1=new Array();
  return  arr1=[counterA,counterB];


}
const result =compareTriplets(alice, bob);

//result.join('');
console.log(result)
//compareTriplets(alice, bob);



