
var prompt = require('prompt-sync')();
let chances = 100;
const quiz = () => {
    let newNumber = Math.random() * 100;
    var OriginalValue = Math.floor(newNumber);
    console.log(OriginalValue)

    var counter = 0;
    for (let i = 0; i < chances - 1; i++) {
        var userInput = prompt("Enter a Number : ");
        userInput = Number.parseInt(userInput);
        counter =counter+userInput;
        if (OriginalValue == userInput) {
            console.log(" '-' congratulations!!!,you\'ve entered correct number",`${counter}`)
            break;
        }
        else if (userInput > OriginalValue) {
            console.log("you\'ve entered a greater number ")
        }
        else if (userInput < OriginalValue) {
            console.log("you\'ve entered a smallest number ")

        } else {
            return;
        }
    }
}
quiz();


// a = Math.floor(Math.random() * 100) + 1;
// console.log(a)
// let user;
// let guesses = 0;
// while (user != a) {
//   user = prompt("guess the number between 1 to 100 ")
//   guesses += 1;
//   if (a == user) {
//     console.log("you guessed it right")
//   } else {
//     if(user>a){
//       console.log("you guessed wrong! choose smaller number")
//     }else{
//       console.log("you guessed wrong! choose larger number")
//     }
//   }
// }
// console.log(`the guesses are ${guesses}`)