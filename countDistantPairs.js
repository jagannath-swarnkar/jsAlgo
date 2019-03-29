function countDistantPairs(inputString, distance) {
    var count = 0;
    for (var i=0; i<inputString.length; i++){
        if(inputString[i]==inputString[i+distance+1]){
            count+=1
        }
    }return count
}
