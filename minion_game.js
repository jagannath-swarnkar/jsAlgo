var a = 'banana';
var allsubs = [];
var substrings = [];

var i = 0;
while(true){
    var j =i +1
    while(j<a.length+1){
        var subs = a.slice(i,j)
        allsubs.push(subs)
        if (!substrings.includes(subs)) {
            substrings.push(subs)
        }j++
    }i++
if(i==a.length){
    break;
    }
}

var vowels = ['a','e','i','o','u']
var kevin = []
var stuart = []
for (var i of substrings){
    if(vowels.includes(i[0])){
        kevin.push(i)
    }else{stuart.push(i)}
}

var kevin_mark = 0
var stuart_mark = 0

for (var k of kevin){
    var count =0
    for(i of allsubs){
        if(k==i){count+=1}
    }kevin_mark+=count
}
