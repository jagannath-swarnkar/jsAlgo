// Q. https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
const beautifulDays = (i,j,k) => {
    let beautifulDay = 0;
    for(let x=i; x<=j; x++){
        let rn = Number(String(x).split('').reverse().join(""))
        if((x-rn)%k==0){
            beautifulDay++
        }
    }
    return beautifulDay
}
const output1 = beautifulDays(20,23,6)
console.log('output1', output1)