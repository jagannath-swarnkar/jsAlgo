// Find the different substrings from the given string ?
var string = 'banana';
var substrings = []

// var i = 0;
// while(i<string.length){
//     if(!substrings.includes(string[i])){
//         substrings.push(string[i]);
//     }i++
// }

var i = 0;
while(true){
    var j = i + 1
    while(j<string.length+1){
        var subs = string.slice(i,j)
        if(!substrings.includes(subs)){
            substrings.push(subs);
        }j++
    }i++
if(i==string.length){
    break;
    }
}
console.log(substrings)