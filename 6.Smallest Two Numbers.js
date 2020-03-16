function solve(input){
let result=input.sort((a,b)=>a-b);
console.log(result.splice(0,2).join(" "));

}

solve([0,30, 15, 50, 5,5]);
//5 15