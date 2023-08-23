// Q. https://www.hackerrank.com/challenges/picking-numbers/problem?isFullScreen=true

const pickingNumbers = (a) => {
    let n = 0;
    let uniqueArr = [];
    for(let item of a){
        if(!uniqueArr.includes(item)){
            uniqueArr.push(item)
        }
    }
    for(let item of uniqueArr){
        let count = 0;
        for(let i of a){
            if(item === i || item === parseInt(i)+1){
                count++
            }
        }
        if(n < count){
            n = count;
        }
    }

    return n;
}
const output1 = pickingNumbers([1,2,1,2,1,3,2])
console.log('output1', output1)
const output2 = pickingNumbers([1,1,2,2,4,4,5,5,5])
console.log('output2', output2)