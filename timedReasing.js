var maxLength= 5;
var text= "Although zebra species may have overlapping ranges, they do not interbreed.";
function isAlpha(ch){
    if (ch >= "A" && ch <= "z"){
        return true
    }
}
function timedReading(maxLength, text) {
	var output = []
	var settext=[]
	var word='';
	for (var i of text){
    if(isAlpha(i)){
   		word+=i
   	
    }else{
    	if (word.length>0){
    	    	settext.push(word)}
    	word='';
    }   
}
for(var k of settext){
	if(k.length<=maxLength){
		output.push(k)
	}
}
console.log(output)
return output.length
}
console.log(timedReading(maxLength, text))

