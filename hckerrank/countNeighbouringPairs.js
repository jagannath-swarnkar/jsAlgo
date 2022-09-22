/* Given a string, find the number of pairs of equal characters in neighbouring positions.
Example

For inputString = "abacaba", the output should be
countNeighbouringPairs(inputString) = 0;
For inputString = "aaa", the output should be
countNeighbouringPairs(inputString) = 2.
*/


function countNeighbouringPairs(inputString) {
    var count =0;
    for (var i = 0; i<inputString.length; i++){
        if(inputString[i]==inputString[i+1]){
            count+=1
        }
    }
    return count
}	

var inputString = 'aabaa'
console.log(countNeighbouringPairs(inputString))