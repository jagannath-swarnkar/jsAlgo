var permutation = [1, 0, 3, 4, 2]
var inversePermutatuion = []
for(var i of permutation){
	inversePermutatuion.push(permutation[i-1])
}
console.log(inversePermutatuion)