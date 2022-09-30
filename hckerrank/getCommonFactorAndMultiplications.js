//! Q. https://www.hackerrank.com/challenges/between-two-sets/problem
var getTotalX = function (a, b) {
    // Write your code here
    var possible_factors = [];
    var m = Math.max.apply(Math, a);
    var n = Math.min.apply(Math, b);
    var i = 1;
    var _loop_1 = function () {
        var item = m * i;
        if (item > n) {
            return "break";
        }
        var common_factor = true;
        a.forEach(function (j) {
            if (item % j !== 0) {
                common_factor = false;
            }
        });
        b.forEach(function (k) {
            if (k % item !== 0) {
                common_factor = false;
            }
        });
        if (common_factor) {
            possible_factors.push(item);
        }
        i++;
    };
    while (true) {
        var state_1 = _loop_1();
        if (state_1 === "break")
            break;
    }
    console.log(possible_factors);
    return possible_factors.length;
};
getTotalX([2, 6], [24, 36]);
