// find largest number from the array
const array1 = [
    46, 12, 3, 4, 5, 3, 4, 3, 2, 2, 4, 5, 6, 7, 4, 5, 3, 3, 2, 4, 5, 6, 7, 8, 5, 3, 45, 45, 43, 43, 3, 5, 4, 5, 23, 45, 2, 4, 45, 6, 7, 7, 5, 32, 32,
];

let max = 0;
let max2 = 0;

for(let item of array1){
    if(max < item){
        max = item
    }
    if(item < max && item > max2){
        max2 = item
    }
}
console.log(max, max2);
