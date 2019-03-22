//==============================digitDifferenceSort===================================
function digitDifferenceSort(a) {
var obj = {}
var dif_list=[]
var output_list=[]
for(var j of a){
	i=j.toString().split('')
	// console.log(i)
	var max = Math.max(...i)
	var min = Math.min(...i)
	var diff=(max-min)
	dif_list.push(diff)
	obj[j]=diff

}

for(var i of dif_list.sort()){
	for(var j in obj){
		if(obj[j]==i){
			if(output_list.indexOf(obj[j])> -1){
				break;
		}else{console.log(j)
			output_list.push(j)}
		}
	}
}
console.log(output_list)
}
a = [152, 23, 7, 887, 243]
digitDifferenceSort(a)



// var obj={ '7': 0, '23': 1, '152': 4, '243': 2, '887': 1 }
// for (var i in obj){
// 	console.log(i)
// }

// var a=[2,5,4]
// if (!a.hasOwnProperty(12)){
// 	console.log(true)
// }