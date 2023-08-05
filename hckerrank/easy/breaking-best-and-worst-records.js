/**
Q. https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true
*/

const breakingRecords = (scores) => {
    let minRecord = 0;
    let maxRecord = 0;
    let minScore = scores[0];
    let maxScore = scores[0];
    for(let score of scores){
        if(score < minScore) {
            minRecord+=1;
            minScore = score
        };
        if(score > maxScore) {
            maxRecord +=1;
            maxScore = score
        };
    }
    return [maxRecord, minRecord]

};
const input1 = [10, 5, 20, 20, 4, 5, 2, 25, 1];
const output1 = breakingRecords(input1);
console.log('output1', output1) // [2,4]

const input2 = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];
const output2 = breakingRecords(input2);
console.log('output2', output2) // [4,0]