//! Q. https://www.hackerrank.com/challenges/between-two-sets/problem

var getTotalX = (a: number[], b: number[]) => {
    // Write your code here
    let possible_factors: number[] = [];
    let m = Math.max(...a);
    let n = Math.min(...b);
    let i = 1;
    while (true) {
        let item: number = m * i;
        if (item > n) {
            break;
        }
        let common_factor = true;

        a.forEach((j) => {
            if (item % j !== 0) {
                common_factor = false;
            }
        });
        b.forEach((k) => {
            if (k % item !== 0) {
                common_factor = false;
            }
        });
        if (common_factor) {
            possible_factors.push(item);
        }
        i++
    }
    console.log(possible_factors);
    return possible_factors.length
};

getTotalX([2, 6], [24, 36]);
