// Q. https://www.hackerrank.com/challenges/utopian-tree/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
const utopianTree = (n) => {
    let growth = 1;
    for (let i=1; i<=n; i++){
        if(i%2==0){
            growth++
        }else{
            growth = growth*2
        }
    }
    return growth
}
const output1 = utopianTree(4)
console.log('output1', output1)
const output2 = utopianTree(1)
console.log('output2', output2)