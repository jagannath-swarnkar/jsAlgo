var matrix = [
[1, 1, 1, 0],
[0, 5, 0, 1], 
[2, 1, 3, 10]]
var count =0
for (var i=0; i<matrix[0].length; i++){
	for(var j=0; j<matrix.length; j++){
		if(matrix[j][i]!=0){
			count+=matrix[j][i]
		}else{break;}
	}
}
console.log(count)


