// https://www.hackerrank.com/challenges/the-birthday-bar/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

const birthday = (s, d, m) =>{
    let count = 0;
    for(let i in s){
        // if(parseInt(i)+m >= s.length){continue};
        let segArr = s.slice(parseInt(i), parseInt(i)+m);
        let sum = segArr.reduce((n,v)=>n+v,0);
        if(sum === d){
            count++
        }
    }
    return count;
}
const output1 = birthday([1,2,1,3,2], 3,2)
console.log('output1', output1) // 2
const output2 = birthday([1, 1, 1, 1, 1, 1], 3,2)
console.log('output2', output2) // 0
const output3 = birthday([4], 4,1)
console.log('output3', output3) // 1
