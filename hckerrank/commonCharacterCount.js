// Given two strings, find the number of common characters between them. EX--
// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.
// Strings have 3 common characters - 2 "a"s and 1 "c".


var readline = require('readline-sync')
var s1=readline.question().split('')
var s2 = readline.question().split('')
console.log(s1)
console.log(s2)
var count = 0
var i = 0 
while (i<s1.length){
	var flag=true
	for (var j in s2){
		if(s1[i]==s2[j]){
			count+=1
			s1.splice(i,1)
			s2.splice(j,1)
			flag=false
			break;
		}
	}if(flag==true){
		i+=1
	}
}

console.log(count)
console.log(s1)
console.log(s2)