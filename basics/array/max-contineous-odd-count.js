// Find the count of max contineous odd numbers (same number)
let arr = [2, 2, 1, 1, 1, 1, 3, 3, 3, 3, 3, 7, 7];
// output = 5 => 3 3 3 3 3

const oddCounts = {};

for (let item of arr) {
    oddCounts[item] = (oddCounts[item] || 0) + 1;
}
let maxCount = 0;
let maxCountElem = 0;
for (let item in oddCounts) {    
    if (maxCount < oddCounts[item]) {
        maxCountElem = item
        maxCount = oddCounts[item];
    }
}
console.log(maxCount, "=>", String(maxCountElem).repeat(maxCount));
