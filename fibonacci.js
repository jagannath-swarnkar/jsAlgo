/**
mathematics, the Fibonacci numbers are the numbers in the following integer sequence, called the Fibonacci sequence, 
and characterized by the fact that every number after the first two is the sum of the two preceding ones:

Ex- 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

*/

// ! Q1. print fibonacci series upto 1_000;
// const fibonacciPattern = [0,1];

// while(true){
//     let a = fibonacciPattern[fibonacciPattern.length -2];
//     let b = fibonacciPattern[fibonacciPattern.length -1];
//     let c = a + b;
//     fibonacciPattern.push(c);
//     if(c >= 1_000){
//         break
//     }
// }
// console.log('fibonacciPattern', fibonacciPattern)

//! Q2. find largest fibonacci number in 10_000;
// const fibonacci = [0,1];
// while(true){
//     let a = fibonacci[fibonacci.length-2];
//     let b = fibonacci[fibonacci.length-1];
//     let c = a + b
//     if(c > 10_000){
//         console.log("largest fibonacci in 10_000 is ", b)
//         break
//     }
//     fibonacci.push(c);
// }

//! Q3. find fibonacci at nth index

let currentValue = 1;
let previousValue = 0;

