// Q. https://www.hackerrank.com/challenges/apple-and-orange/problem

function countApplesAndOranges(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): void {
    // Write your code here
    let appleCount: number = 0;
    let orangeCount: number = 0;

    apples.forEach((d) => {
        if (a + d >= s && a + d <= t) {
            appleCount++;
        }
    });
    oranges.forEach((d) => {
        if (b + d >= s && b + d <= t) {
            orangeCount++;
        }
    });
    console.log(appleCount);
    console.log(orangeCount);
}
