// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?h_r=next-challenge&h_v=zen&isFullScreen=false&h_r=next-challenge&h_v=zen

const divisibleSumPairs = (n, k, ar) => {
    let count = 0;
    for(let i in ar){
        for(let item of ar.slice(parseInt(i)+1)){
            if((ar[i] + item)%k === 0){
                count++
            }
        }
    }
    return count;
}
const output1 = divisibleSumPairs(6, 3,[1, 3, 2, 6, 1, 2])
console.log('output1', output1) // 5
const output2 = divisibleSumPairs(6,5,[1,2,3,4,5,6])
console.log('output2', output2) // 3
