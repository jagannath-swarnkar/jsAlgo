//! sort this array in ascending and descending format
var array1 = [
    12, 3, 4, 5, 3, 4, 3, 2, 2, 4, 5, 6, 7, 4, 5, 3, 3, 2, 4, 5, 6, 7, 8, 5, 3, 45, 45, 43, 43, 3, 5, 4, 5, 23, 45, 2, 4, 45, 6, 7, 7, 5, 32, 32,
];

const sort = (arr) => {
    let done = false;
    while (!done) {
        done = true;
        for (let i in arr) {
            i = Number(i);
            let a = arr[i];
            let b = arr[i + 1];
            if (b < a) {
                arr[i] = b;
                arr[i + 1] = a;
                done = false;
            }
        }
    }
    return arr;
};
let res = sort(array1);
console.log("res", res);

//! by suing inbuilt method

// let a = array1.sort((a, b)=>a-b)
// console.log('a', a)
