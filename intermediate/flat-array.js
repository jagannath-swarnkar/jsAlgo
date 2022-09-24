const array = [1,2, [10,12], {name: "appscrip"}, ["javascript", "typescript"], "python", [123,212, [343,444,555,[999,888,7777],["code"]],{location: "Bengaluru"},[160062]],3,4];

const newArr = [];

const flatArray = (arr) => {
    for(let item of arr){
        if(Array.isArray(item)){
            flatArray(item)
        }else{
            newArr.push(item)
        }
    }    
}

flatArray(array);
console.log(newArr);
