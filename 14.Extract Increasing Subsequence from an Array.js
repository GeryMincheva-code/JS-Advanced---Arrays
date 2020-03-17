function solve(input){
let biggestNumber=Number.MIN_SAFE_INTEGER;
let result=[];
input.forEach(el=>{
    if(el>=biggestNumber){
        biggestNumber=el;
        result.push(biggestNumber);
    }
});
console.log(result.join('\n'));

}
solve([20, 
    3, 
    2, 
    15,
    6, 
    1]
    
    );