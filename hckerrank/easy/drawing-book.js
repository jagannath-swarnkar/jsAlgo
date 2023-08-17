// Q. https://www.hackerrank.com/challenges/drawing-book/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

const pageCount = (n, p) => {
    let pageCount = 0;
    if (p > n / 2) {
        let i = p % 2 === 0 ? p + 2 : p + 1;
        console.log('i', i)
        while (i <= n) {
            pageCount++;
            if(n-i ==1){
                pageCount++
            }
            i += 2;
        }
    } else {
        let i = 2;
        while (i <= p) {
            pageCount++;
            i+=2
        }
    }
    return pageCount;
};

const output1 = pageCount(6, 2);
console.log("output1", output1); //1
const output2 = pageCount(5, 4);
console.log("output2", output2); //0
const output4 = pageCount(7, 4);
console.log("output4", output4); //0
const output3 = pageCount(25, 14);
console.log("output3", output3); //6
