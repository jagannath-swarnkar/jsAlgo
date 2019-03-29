// An inverse permutation is a permutation in which each number and
//  the number of the place which it occupies are exchanged.
// Q. Given a permutation, produce its inverse permutation.

// Example

// For permutation = [1, 3, 4, 2], the output should be
// inversePermutation(permutation) = [1, 4, 2, 3].



var permutation = [1, 0, 3, 4, 2]
var inversePermutatuion = []
for(var i of permutation){
	inversePermutatuion.push(permutation[i-1])
}
console.log(inversePermutatuion)