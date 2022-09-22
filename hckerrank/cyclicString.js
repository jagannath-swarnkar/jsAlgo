function cyclicString(s) {
    for(var i=0; i<s.length; i++){
        var a = s.slice(0,i);
        var b = s.slice(i)
        if(a.includes(b)){
            return a.length;
        }
    }return 0;
    
}
