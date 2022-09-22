// remove all duplicate elements from this array
const array1 = [
    12, 3, 4, 5, 3, 4, 3, 2, 2, 4, 5, 6, 7, 4, 5, 3, 3, 2, 4, 5, 6, 7, 8, 5, 3, 45, 45, 43, 43, 3, 5, 4, 5, 23, 45, 2, 4, 45, 6, 7, 7, 5, 32, 32,
];

const getUniqueArr = (arr) => {
    const newArr = [];
    for (let item of arr) {
        if (!newArr.includes(item)) {
            newArr.push(item);
        }
    }
    return newArr;
};
const newArr = getUniqueArr(array1)
console.log('newArr', newArr)
