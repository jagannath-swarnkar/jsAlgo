function isoscelesTriangle(sides) {
 
for(var i of sides){
   var count = 0
    for(var j of sides){
        if (i==j){
            count += 1
        }
    }if(count>1){
        return(true);
    } 
    }return(false);
}

var sides=[6,6,6];
console.log(isoscelesTriangle(sides))