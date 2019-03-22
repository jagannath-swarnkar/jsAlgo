function firstMultiple2(divisors, start) {
for(var i=start; i>=start; i++){
    for(var j of divisors){
        if (i%j==0){
            return i
        	}
	    }
    }
}
var divisors = [2, 3, 4];
var start = 13
console.log(firstMultiple2(divisors, start));