// Q. https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true

const migratoryBirds = (arr) => {
    let countObj = {};
    for(let item of arr){
        countObj[item] = (countObj[item] || 0) + 1
    }
    let migratoryBirdsCount = 0;
    let migratoryBirdId = 0;
    for(let item in countObj){
        if(countObj[item] > migratoryBirdsCount){
            migratoryBirdsCount = countObj[item];
            migratoryBirdId = item
        }
    }
    return migratoryBirdId
}
const output1  = migratoryBirds([1,2,4,5,3,4,3,2,1,3,4])
console.log('output1', output1)
const output2  = migratoryBirds([1,4,4,4,5,3])
console.log('output2', output2)