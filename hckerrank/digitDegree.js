function digitDegree(n) {
n=n.toString()
var count = 0
while(n.length>1){
    var sum = 0
    for(var i of n){
        sum+=parseInt(i)
    }count+=1
    n=sum.toString()
    }
    return(count)
}

var n=99
console.log(digitDegree(n))