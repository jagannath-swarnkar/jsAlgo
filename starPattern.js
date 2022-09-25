//? star pattern

//! left-triangle
// for(let i = 1; i <= 5; i++){
//     let pattern = ""
//     for(let j=1; j<=i; j++){
//         pattern = pattern.concat("* ")
//     }
//     console.log(pattern)
// }
//!-------------
// let number = 10;
// let pattern = ""
// for(let i=1; i<=number; i++){
//     pattern = pattern.concat("* ".repeat(i)).concat("\n");
// }
// console.log(pattern)

//! left-triangle-reverse
// let tringalePattern = ""
// for(let i = 5; i>0; i--){
//     let pattern = ""
//     for(let j=i; j>0; j--){
//         pattern = pattern.concat("* ")
//     }
//     tringalePattern = tringalePattern.concat(pattern + "\n")
// }
// console.log(tringalePattern);

//! right-triangle
// let length = 5
// for(let i = 1; i <= length; i++){
//     let pattern = ""
//     pattern = pattern.concat(" ".repeat(length-i))
//     for(let j=1; j<=i; j++){
//         pattern = pattern.concat("*")
//     }
//     console.log(pattern)
// }

//! center-triangle
// let length = 5
// for(let i = 1; i <= length; i++){
//     let pattern = ""
//     pattern = pattern.concat(" ".repeat(length-i))
//     for(let j=1; j<=i; j++){
//         pattern = pattern.concat("* ")
//     }
//     console.log(pattern)
// }

//! center-triangle-reversed
// let number = 10;
// for(let i=number; i>0; i--){
//     let pattern = "";
//     pattern = pattern.concat(" ".repeat(number-i))
//     for(let j=i; j>0; j--){
//         pattern = pattern.concat("* ")
//     }
//     console.log(pattern);
// }
//! --------------
// let number = 10;
// let pattern = ""
// for(let i=1; i<=number; i++){
//     pattern = pattern.concat(" ".repeat(number-i));
//     pattern = pattern.concat("* ".repeat(i)).concat("\n");
// }
// console.log(pattern)

//! square-pattern
// let number = 5;
// let pattern = ""
// for(let i=1; i<=number; i++){
//     pattern = pattern.concat("* ".repeat(number)).concat("\n");
// }
// console.log(pattern)

//! diamond-pattern
// let number = 10;
// let pattern = ""
// for(let i=1; i<=number; i++){
//     pattern = pattern.concat(" ".repeat(number-i));
//     pattern = pattern.concat("* ".repeat(i)).concat("\n");
// }
// for(let i=1; i<=number; i++){
//     pattern = pattern.concat(" *".repeat(number-i)).concat("\n");
//     pattern = pattern.concat(" ".repeat(i));
// }
// console.log(pattern)

//! triangle number pattern
// let n = 10;
// for (let i = 1; i <= n; i++) {
//     let pattern = "";
//     for (let j = 1; j <= i; j++) {
//         pattern = pattern.concat(String(j) + " ");
//     }
//     console.log(pattern);
// }
