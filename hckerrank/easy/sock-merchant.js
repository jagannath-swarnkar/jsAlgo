// Q. https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

const sockMerchant = (n, ar) => {
    let count = 0;
    let countObj = {};
    for(let item of ar){
        countObj[item] = (countObj[item] || 0) + 1
    }
    for(let item in countObj){
        if(countObj[item] > 1){
            count += parseInt(countObj[item]/2)
        }
    }
    return count
}
const output1 = sockMerchant(7, [1,2,1,2,1,3,2])
console.log('output1', output1)
const output2 = sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])
console.log('output2', output2)