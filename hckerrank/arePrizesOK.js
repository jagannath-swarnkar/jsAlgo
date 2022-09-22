function arePrizesOK(first, second, third) {
if((first>=second && first >=third)&&(second<=first && second>=third)&&(third<=second && third<=first)){
    return true;
}else{
    return false;
    }
}


var readline = require('readline-sync')
var first = readline.question('enter the first prize')
var second = readline.question('enter the second prize')
var third = readline.question('enter the third prize')

console.log(arePrizesOK(first,second,third))