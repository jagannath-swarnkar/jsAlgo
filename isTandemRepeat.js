function isTandemRepeat(inputString) {
    for (var i=0; i<inputString.length; i++){
        if((inputString.slice(0,i))==(inputString.slice(i))){
            return true;
        }
    }return false;

}
inputString = "tandemtandem"
console.log(isTandemRepeat(inputString))